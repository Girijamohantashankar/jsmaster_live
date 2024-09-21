"use client";
import { useState } from "react";
import "../../../styles/contact.css";
import HomeNavbar from "../home-navbar/page";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../loader/page";



export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                toast.error(data.message || 'Failed to send message');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <HomeNavbar />
            <div className="contact_container">

                <section className="contact_intro">
                    <h1>Con<span className="or">tac</span>t <span className="or">U</span>s</h1>
                    <p>
                        We would love to hear from you! Whether you have a <span className="or">question</span>, feedback, or just want to get in <span className="or">touch</span>, you can reach us through the form below or use the <span className="or">contact</span> details provided.
                    </p>
                </section>

                <section className="contact_details">
                    <h2>O<span className="or">ur</span> Con<span className="or">tact</span> Infor<span className="or">mat</span>ion</h2>
                    <div className="contact_info">
                        <div className="contact_item">
                            <i class="fa-regular fa-envelope"></i>
                            <h3>E<span className="or">ma</span>il</h3>
                            <p><a href="mailto:info@jsmaster.com">info@jsmaster.com</a></p>
                        </div>
                        <div className="contact_item">
                            <i class="fa-solid fa-phone"></i>
                            <h3>Ph<span className="or">one</span></h3>
                            <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                        </div>
                        <div className="contact_item">
                            <i class="fa-solid fa-address-book"></i>
                            <h3>Ad<span className="or">dres</span>s</h3>
                            <p>123 JavaScript St, Code City, JS 12345, USA</p>
                        </div>
                    </div>
                </section>

                <section className="contact_form_container">
                    <div className="contact_form">
                        <h2><span className="or">S</span>end <span className="or">Us</span> a <span className="or">Mess</span>age</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>

                            <button type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {status && (
                            <div className={`status_message ${status.type}`}>
                                {status.message}
                            </div>
                        )}
                    </div>
                </section>
            </div>
            {loading && <Loader />}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
