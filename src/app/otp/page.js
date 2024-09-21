"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/auth.css";
import Loader from "../loader/page";

export default function VerifyOtp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [timer, setTimer] = useState(120);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const emailFromQuery = query.get('page');
    if (emailFromQuery) {
      setEmail(decodeURIComponent(emailFromQuery));
    }
    const savedTime = localStorage.getItem('otpTimer');
    if (savedTime) {
      setTimer(parseInt(savedTime, 10));
    }

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(countdown);
          return 0;
        }
        localStorage.setItem('otpTimer', prev - 1);
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
      localStorage.removeItem('otpTimer');
    };
  }, []);

  const handleResendOtp = async () => {
    setLoadingResend(true);
    try {
      const response = await fetch('/api/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('OTP resent to your email.');
        setTimer(120);
        localStorage.setItem('otpTimer', '120');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to resend OTP.');
    } finally {
      setLoadingResend(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingVerify(true);

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        toast.error(data.message);
      } else {
        setSuccess(data.message);
        localStorage.setItem('token', data.token);
        router.push('/home');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoadingVerify(false);
    }
  };

  return (
    <div className="Auth_container">

      {(loadingVerify || loadingResend) && <Loader />}
      <div className="Auth_header">
        <h1>Verify OTP</h1>
      </div>
      <form onSubmit={handleSubmit} className="Auth_form">
        <div className="Auth_inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            readOnly
          />
        </div>
        <div className="Auth_inputGroup">
          <label htmlFor="otp">OTP</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <div className='Auth_actionGroup'>
          <div className='timer_display'>
            {timer > 0 ? (
              <p>Resend OTP available in: {timer}s</p>
            ) : null}
          </div>
          <div className='resend_btn'>
            <button type="submit" className="Auth_button" disabled={loadingVerify}>
              {loadingVerify ? "Verifying..." : "Verify OTP"}
            </button>
            {timer === 0 && (
              <button type="button" onClick={handleResendOtp} className="Auth_button" disabled={loadingResend}>
                {loadingResend ? "Resending..." : "Resend OTP"}
              </button>
            )}
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
      <ToastContainer />
    </div>
  );
}
