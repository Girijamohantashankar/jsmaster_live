import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
const JWT_SECRET = process.env.JWT_SECRET || 'jhbhjhvvdjfhudfieytajgmahgbfgbvcaiunuhdyuggfahhmnudsgyu';
const OTP_EXPIRY = 2 * 60 * 1000;

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'JSMaster - Your OTP Verification Code',
    html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <div style="text-align: center;">
                <img src="YOUR_LOGO_URL" alt="JSMaster Logo" style="width: 150px; margin-bottom: 10px;" />
                <h1 style="color: #4CAF50; font-size: 28px; margin: 0;">JSMaster</h1>
            </div>
            <h2 style="color: #4CAF50;">Welcome to JSMaster!</h2>
            <p>Dear ${username},</p>
            <p>Thank you for choosing JSMaster. To complete your login or registration process, please use the OTP code provided below:</p>
            <p style="font-size: 20px; font-weight: bold; color: #000;">${otp}</p>
            <p>This code is valid for the next 2 minutes. Please do not share this code with anyone.</p>
            <p>If you did not request this code, please ignore this email.</p>
            <br />
            <p>Best regards,</p>
            <p>The JSMaster Team</p>
        </div>
    `,
  };


  await transporter.sendMail(mailOptions);
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.error('User not found');
        return res.status(400).json({ message: 'User not found' });
      }
      const otp = generateOtp();
      const otpExpiry = Date.now() + OTP_EXPIRY;
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      await user.save();
      await sendOtpEmail(email, otp);

      res.status(200).json({ message: 'OTP has been resent to your email.' });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
