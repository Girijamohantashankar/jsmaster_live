"use client";

import { useState, useEffect } from 'react';
import "../../../styles/dashboard.css";
import HomeNavbar from "../home-navbar/page";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getUserEmailFromToken } from '../authUtils';

export default function Home() {
    const [solvedQuestionsCount, setSolvedQuestionsCount] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(100);
    const [error, setError] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    // const userEmail = getUserEmailFromToken();
    useEffect(() => {
        
        if (typeof window !== 'undefined') {
            const email = getUserEmailFromToken(); 
            setUserEmail(email);
        }
    }, []);

    useEffect(() => {
        const fetchSolvedQuestions = async () => {
            try {
                const year = 2024;
                const month = 9;

                const response = await fetch(`/api/solved-questions-monthly?email=${userEmail}&year=${year}&month=${month}`);
                const data = await response.json();

                if (response.ok) {
                    if (data.solvedQuestions && Array.isArray(data.solvedQuestions.data)) {
                        const count = data.solvedQuestions.data.reduce((acc, val) => acc + val, 0);
                        setSolvedQuestionsCount(Math.round(count));
                    } else {
                        setError('Unexpected data format');
                    }
                } else {
    
                    setError(data.message);
                }
            } catch (error) {

                setError('Error fetching data');
            }
        };

        if (userEmail) {
            fetchSolvedQuestions();
        }
    }, [userEmail]);
    const percentage = Math.round((solvedQuestionsCount / totalQuestions) * 100);

    return (
        <>
            <HomeNavbar />
            <div className="home_container">
                <h1>Dashboard Page</h1>
                <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Beginner Level Questions Solved</h5>
                            {error ? (
                                <p>{error}</p>
                            ) : (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${solvedQuestionsCount} / ${totalQuestions}`}
                                    styles={{
                                        path: {
                                            stroke: `rgba(75, 192, 192, 1)`,
                                        },
                                        text: {
                                            fill: '#333',
                                            fontSize: '24px',
                                        },
                                        trail: {
                                            stroke: '#d6d6d6',
                                        },
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
