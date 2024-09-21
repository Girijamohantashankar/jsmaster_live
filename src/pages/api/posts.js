import dbConnect from '../../app/lib/mongodb';
import Post from '../../app/models/Post';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, imageUrl, userEmail, userAnswer } = req.body;
        if (!title || !description || !imageUrl || !userEmail || !userAnswer) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        try {
            await dbConnect();
            const newPost = new Post({
                title,
                description,
                imageUrl,
                userEmail,
                answer: userAnswer
            });

            const savedPost = await newPost.save();

            res.status(201).json({ post: savedPost });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}