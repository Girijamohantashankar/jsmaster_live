import dbConnect from "../../app/lib/mongodb";
import User from "../../app/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === "POST") {
        const { token, password } = req.body;
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }
        try {
            const user = await User.findOne({
                resetPasswordToken: token,
                resetPasswordExpires: { $gt: Date.now() },
            });
            if (!user) {
                console.error("Token validation failed. Token may be invalid or expired.");
                return res.status(400).json({ message: "Invalid or expired token" });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            await user.save();
            res.status(200).json({ message: "Password has been updated successfully" });
        } catch (error) {
            console.error("Error resetting password:", error);
            res.status(500).json({ message: "Server error" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
