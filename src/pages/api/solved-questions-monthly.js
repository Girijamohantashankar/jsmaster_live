import Beginner from '../../app/models/Beginner';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    const { email, year, month } = req.query;

    if (!email || !year || !month) {
        return res.status(400).json({ message: 'Email, year, and month are required.' });
    }
    try {
        if (!mongoose.connection.readyState) {
            await mongoose.connect(process.env.MONGO_URI);
        }
        const beginner = await Beginner.findOne({ userEmail: email });
        if (!beginner) {
            return res.status(404).json({ message: 'No solved questions found for this user.' });
        }
        const solvedQuestionsCount = beginner.solvedQuestionIds ? beginner.solvedQuestionIds.length : 0;
        const labels = Array.from({ length: 30 }, (_, i) => `2024-09-${String(i + 1).padStart(2, '0')}`);
        const data = labels.map(() => solvedQuestionsCount / 30);
        res.status(200).json({
            email: beginner.userEmail,
            solvedQuestions: { labels, data }
        });
    } catch (error) {
        console.error('Error fetching solved questions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
