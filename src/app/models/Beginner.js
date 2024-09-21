import mongoose from 'mongoose';

const BeginnerSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    solvedQuestionIds: [{ type: String }],

});

export default mongoose.models.Beginner || mongoose.model('Beginner', BeginnerSchema);
