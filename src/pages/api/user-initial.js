import dbConnect from '../../app/lib/mongodb';
import User from '../../app/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            const user = await User.findById(decoded.id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const userInitial = user.username.charAt(0).toUpperCase();
            res.status(200).json({ userInitial });

        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                console.error('JWT token expired:', error);
                return res.status(401).json({ message: 'Token expired. Please log in again.' });
            }
            console.error('Error fetching user:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
