import dbConnect from '../../app/lib/mongodb';
import Post from '../../app/models/Post';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        const { postId } = req.query;
        try {
            const post = await Post.findById(postId);
            if (post) {
                res.status(200).json({ answers: post.answer });
            } else {
                res.status(404).json({ error: 'Post not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch answers' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
