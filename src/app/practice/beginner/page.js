"use client";
import { useState, useEffect } from 'react';
import "../../../../styles/beginner.css";
import HomeNavbar from "../../home-navbar/page";
import MonacoEditor from '../../CodeEditor/page';
import { getUserEmailFromToken } from '../../authUtils';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Beginner() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [output, setOutput] = useState('');
    const [completedQuestions, setCompletedQuestions] = useState({});
    const [showSolution, setShowSolution] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [questionCount, setQuestionCount] = useState(0);

    const questions = [
        {
            id: 1,
            heading: "Array Sort",
            statement: "Write a function to sort an array of numbers.",
            solution: `function sortArray(arr) {
                return arr.sort((a, b) => a - b);
            }`,
            testCases: [
                { input: [3, 1, 4, 2], expected: [1, 2, 3, 4] },
                { input: [10, 5, 8], expected: [5, 8, 10] }
            ]
        },
        {
            id: 2,
            heading: "Sum of Numbers",
            statement: "Write a function to sum all numbers in an array.",
            solution: `function sumArray(arr) {
                return arr.reduce((a, b) => a + b, 0);
            }`,
            testCases: [
                { input: [1, 2, 3], expected: 6 },
                { input: [5, 10, 15], expected: 30 }
            ]
        },

    ];

    useEffect(() => {
        const email = getUserEmailFromToken();
        setUserEmail(email);
    }, []);

    useEffect(() => {
        if (userEmail) {
            viewSolvedQuestions(userEmail);
        }
    }, [userEmail]);

    const handleRunCode = () => {
        if (!selectedQuestion) return;

        try {
            const userFunction = new Function('return ' + userCode);
            const func = userFunction();

            let allTestsPassed = true;
            for (const testCase of selectedQuestion.testCases) {
                const result = func(testCase.input);

                if (result.toString() !== testCase.expected.toString()) {
                    setOutput(`Incorrect for input ${testCase.input}. Your Output: ${result}, Expected: ${testCase.expected}`);
                    allTestsPassed = false;
                    break;
                }
            }

            if (allTestsPassed) {
                setOutput("Correct! Problem solved.");
                saveSolvedQuestion(selectedQuestion.id);
            }
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    const handleViewSolution = () => {
        setUserCode(showSolution ? '' : selectedQuestion.solution);
        setShowSolution(!showSolution);
    };

    const handleQuestionClick = (question) => {
        setSelectedQuestion(question);
        setUserCode('');
        setShowSolution(false);
        setOutput('');
    };

    const saveSolvedQuestion = async (questionId) => {
        if (!userEmail) return;

        try {
            const response = await fetch('/api/beginnerQuestions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail, questionId })
            });

            if (!response.ok) {
                console.error('Network response was not ok:', response.statusText);
                return;
            }

            const data = await response.json();

            if (data.success) {
                setCompletedQuestions(prev => ({ ...prev, [questionId]: true }));
            } else {
                console.error('Failed to save question:', data.error);
            }
        } catch (error) {
            console.error('Error saving question:', error);
        }
    };

    const viewSolvedQuestions = async (userEmail) => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/ViewQuestions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.data && Array.isArray(data.data)) {
                const solvedQuestions = data.data.reduce((acc, id) => ({ ...acc, [id]: true }), {});
                setCompletedQuestions(solvedQuestions);
                setQuestionCount(data.data.length);
            } else {
                console.error('No solved questions data found:', data.error);
            }
        } catch (error) {
            console.error('Error fetching solved questions:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <HomeNavbar />
            <div className="beginner_container">
                <div className="questions_list">
                    <ul>
                        {isLoading ? (
                            <SkeletonTheme color="#cfcfcf" highlightColor="#e0e0e0">
                                {[...Array(questionCount || 3)].map((_, i) => ( 
                                    <li key={i}>
                                        <Skeleton height={24} width={`80%`} />
                                    </li>
                                ))}
                            </SkeletonTheme>
                        ) : (
                            questions.map((question) => (
                                <li
                                    key={question.id}
                                    onClick={() => handleQuestionClick(question)}
                                    className={`${completedQuestions[question.id] ? 'completed' : ''}`}
                                >
                                    {question.heading}
                                    {completedQuestions[question.id] && <span className="check-icon">✔</span>}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div className="question_details">
                    {isLoading ? (
                        <SkeletonTheme color="#cfcfcf" highlightColor="#e0e0e0">
                            <Skeleton height={30} width={`80%`} style={{ marginBottom: '10px' }} />
                            <Skeleton height={20} width={`60%`} style={{ marginBottom: '10px' }} />
                            <Skeleton height={200} />
                        </SkeletonTheme>
                    ) : selectedQuestion ? (
                        <>
                            <div className="question_header">
                                <h2>{selectedQuestion.heading}</h2>
                                <button className="button view_solution_btn" onClick={handleViewSolution}>
                                    {showSolution ? 'Hide Solution' : 'View Solution'}
                                </button>
                            </div>
                            <p>{selectedQuestion.statement}</p>
                            <MonacoEditor code={userCode} setCode={setUserCode} onRunCode={handleRunCode} />
                            <div className="output">{output}</div>
                        </>
                    ) : (
                        <p className='select_para'>Select a question to start coding</p>
                    )}
                </div>
            </div>
        </>
    );
}
