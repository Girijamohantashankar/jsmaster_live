
import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'hbuygugdcbjhbjdsyvcuhjnuuygcbjhbhuhbucdd';
const OTP_EXPIRY = 2 * 60 * 1000; 
export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email, otp } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                console.error('User not found');
                return res.status(400).json({ message: 'User not found' });
            }

            const storedOtp = user.otp ? user.otp.toString() : '';
            const receivedOtp = otp ? otp.toString() : '';
            if (storedOtp !== receivedOtp) {
                console.error('Invalid OTP');
                return res.status(400).json({ message: 'Invalid OTP' });
            }

            if (Date.now() > user.otpExpiry) {
                console.error('OTP has expired');
                return res.status(400).json({ message: 'OTP has expired' });
            }

            user.isVerified = true;
            user.otp = undefined; 
            user.otpExpiry = undefined; 
            await user.save();

            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ message: 'OTP verified successfully', token });
        } catch (error) {
            console.error('Server error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}