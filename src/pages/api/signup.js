import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';
import bcrypt from 'bcryptjs';
import validate from 'deep-email-validator';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { username, email, password, phone, gender } = req.body;

        let valid = await validate(email);
        if (!valid.valid) {
            return res.status(400).json({ message: 'Given email is not valid' });
        }
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                username,
                email,
                password: hashedPassword,
                phone,
                gender,
                isVerified: false, 
            });

            await newUser.save();
            res.status(201).json({ message: 'Signup successful! You can now log in.' });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
