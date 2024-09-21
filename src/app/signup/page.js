"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/auth.css";
import Loader from "../loader/page";
import Link from "next/link";
import Navbar from "../navbar";


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
};

export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (e.target.name === 'email') {
            setEmailError("");
        } if (e.target.name === 'phone') {
            setPhoneError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        if (!validatePhone(formData.phone)) {
            setPhoneError("Please enter a valid phone number.");
            return;
        }
        setLoading(true);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                toast.error(data.message);
            } else {
                setSuccess(data.message);
                toast.success(data.message);
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                    phone: "",
                    gender: "",
                });
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };




    return (
        <>
            <Navbar />
            <div className="Auth_container">
                {loading && <Loader />}

                <div className="Auth_header">
                    <h1>Signup</h1>
                </div>
                <form onSubmit={handleSubmit} className="Auth_form">
                    <div className="Auth_inputGroup">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="Auth_inputGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>
                    <div className="Auth_inputGroup">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="Auth_inputGroup">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}

                    </div>
                    <div className="Auth_inputGroup">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="Auth_button" disabled={loading}>
                        {loading ? "Signing up..." : "Signup"}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    <p>
                        I have an account{' '}
                        <Link href="/login" className="Auth_link">Login here</Link>

                    </p>

                </form>
                <ToastContainer />
            </div>
        </>

    );
}
