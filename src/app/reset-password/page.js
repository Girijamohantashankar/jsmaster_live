"use client";
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/auth.css";
import Loader from "../loader/page";

 function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Password validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            toast.error("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                toast.error(data.message);
            } else {
                toast.success('Password reset successful!');
                router.push('/login');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Auth_container">
            {loading && <Loader />}
            <div className="Auth_header">
                <h1>Reset Password</h1>
            </div>
            <form onSubmit={handleSubmit} className="Auth_form">
                <div className="Auth_inputGroup">
                    <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="Auth_inputGroup">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="Auth_button" disabled={loading}>
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <ToastContainer />
        </div>
    );
}
export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<p>Loading reset password form...</p>}>
            <ResetPassword />
        </Suspense>
    );
}
