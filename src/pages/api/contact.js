import nodemailer from 'nodemailer';
import dbConnect from '../../app/lib/mongodb';
import Contact from '../../app/models/Contact';
import { validate } from 'deep-email-validator';

export default async function handler(req, res) {
    await dbConnect(); 

    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const { valid, reason } = await validate(email);
        if (!valid) {
            return res.status(400).json({ message: `Invalid email address: ${reason}` });
        }
        try {
            const existingContact = await Contact.findOne({ email });
            if (existingContact) {
                return res.status(400).json({ message: 'A message from this email has already been submitted' });
            }
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: email,
                to: process.env.RECEIVED_EMAIL_USER,
                subject: `Contact Form Submission from ${name}`,
                html: `
                    <html>
                        <body>
                            <h2>Contact Form Submission</h2>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Message:</strong></p>
                            <blockquote style="border-left: 3px solid #ddd; padding-left: 10px; margin: 10px 0;">
                                ${message}
                            </blockquote>
                            <hr />
                            <footer>
                                <p>This message was sent from the JSMaster contact form.</p>
                            </footer>
                        </body>
                    </html>
                `,
            };

            await transporter.sendMail(mailOptions);
            const newContact = new Contact({ name, email, message });
            await newContact.save();

            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error handling contact form submission:', error);
            res.status(500).json({ message: 'Failed to handle contact form submission' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
