import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        const { email } = req.query;  

        try {
            const user = await User.findOne({ email }).select('-password -otp -otpExpiry'); 
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Server error' });
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
