import dbConnect from '../../app/lib/mongodb';
import Beginner from '../../app/models/Beginner';

export default async function POST(request,response) {
    try {
        
        
        const { userEmail, questionId } = await request.body;

        if (!userEmail || !questionId) {
            return response.json({ success: false, error: 'Invalid request data' });
        }

        await dbConnect();

        const result = await Beginner.findOneAndUpdate(
            { userEmail },
            { $addToSet: { solvedQuestionIds: questionId } },
            { new: true, upsert: true }
        );

        return response.json({ success: true, data: result });
    } catch (error) {
        console.error('Error in API route:', error); 
        return response.json({ success: false, error: 'Internal server error' });
    }
}
