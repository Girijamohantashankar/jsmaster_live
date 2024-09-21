import dbConnect from '../../app/lib/mongodb';
import Post from '../../app/models/Beginner';

export default async function handler(req, res) {
    await dbConnect();

    try {
        const { userEmail } = req.body;
        console.log(userEmail, 'userEmailuserEmail');

        const post = await Post.findOne({ userEmail });


        if (post) {
            console.log(post.solvedQuestionIds, 'Solved Question IDs');
            res.status(200).json({ data: post.solvedQuestionIds });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch answers' });
    }
}
