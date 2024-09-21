import dbConnect from "../../app/lib/mongodb";
import User from "../../app/models/User";
import crypto from "crypto";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpires = Date.now() + 3600000;
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = resetTokenExpires;
      await user.save();

      const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`;

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"JS Master Support" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "Password Reset Request - JS Master",
        html: `
                  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                      <div style="text-align: center;">
                          <img src="https://your-logo-url.com/logo.png" alt="JS Master Logo" style="width: 100px; margin-bottom: 20px;">
                      </div>
                      <h2 style="color: #007bff; text-align: center;">Password Reset Request</h2>
                      <p style="font-size: 16px; line-height: 1.6;">
                          Dear ${user.username},
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          We received a request to reset your password for your JS Master account. Please click the button below to reset your password:
                      </p>
                      <div style="text-align: center; margin: 30px 0;">
                          <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;">
                              Reset Password
                          </a>
                      </div>
                      <p style="font-size: 16px; line-height: 1.6;">
                          This link will expire in 1 hour. If you do not reset your password within this time, you will need to request a new password reset link.
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          If you did not request a password reset, you can safely ignore this email. Your password will remain unchanged.
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          For any further assistance, feel free to contact our support team.
                      </p>
                      <p style="font-size: 16px; line-height: 1.6;">
                          Best regards,<br>
                          <strong>JS Master Support Team</strong>
                      </p>
                      <div style="text-align: center; margin-top: 40px;">
                          <p style="font-size: 14px; color: #999;">© 2024 JS Master. All rights reserved.</p>
                      </div>
                  </div>
              `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Password reset link sent" });
    } catch (error) {
      console.error("Error sending reset link:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
