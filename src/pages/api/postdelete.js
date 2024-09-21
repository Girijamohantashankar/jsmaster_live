import dbConnect from '../../app/lib/mongodb';
import Post from '../../app/models/Post';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'DELETE') {
        const { postId } = req.query;
        try {
            await Post.findByIdAndDelete(postId);
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete post' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
