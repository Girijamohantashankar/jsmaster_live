import dbConnect from '../../app/lib/mongodb';
import Post from '../../app/models/Post';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { postId } = req.query;
        const { answer, userEmail } = req.body;

        if (!postId || !answer || !userEmail) {
            return res.status(400).json({ error: 'Post ID, answer, and user email are required' });
        }

        try {
            const updatedPost = await Post.findByIdAndUpdate(
                postId,
                {
                    $push: { answer: { userEmail, text: answer, createdAt: new Date() } }
                },
                { new: true }
            );

            if (!updatedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }

            res.status(200).json({ message: 'Answer submitted successfully', post: updatedPost });
        } catch (error) {
            console.error('Error updating post:', error);
            res.status(500).json({ error: 'Failed to submit answer' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
