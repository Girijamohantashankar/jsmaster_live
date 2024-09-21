"use client";
import { useState, useEffect } from 'react';
import "../../../styles/blog.css";
import HomeNavbar from "../home-navbar/page";
import Image from 'next/image';
import { getUserEmailFromToken } from '../authUtils';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [newAnswer, setNewAnswer] = useState('');
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [answers, setAnswers] = useState({});
    const [showAnswers, setShowAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/allposts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                    setIsLoading(false);
                } else {
                    toast.error('Failed to fetch posts');
                }
            } catch (error) {
                toast.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleAnswerChange = (e) => {
        setNewAnswer(e.target.value);
    };

    const handleSubmit = async (postId) => {
        const userEmail = getUserEmailFromToken();
        if (!userEmail) {
            console.error('User email not found');
            return;
        }
        try {
            const response = await fetch(`/api/postanswer?postId=${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    answer: newAnswer,
                    userEmail
                }),
            });

            if (response.ok) {
                toast.success('Answer submitted successfully');
                setNewAnswer('');
            } else {
                toast.error('Failed to submit answer');
            }
        } catch (error) {
            toast.error('Error submitting answer:', error);
        }
    };
    const handleViewAnswers = async (postId) => {
        try {
            const response = await fetch(`/api/getpostanswers?postId=${postId}`);
            if (response.ok) {
                const data = await response.json();
                setAnswers(prev => ({ ...prev, [postId]: data.answers }));
                setShowAnswers(prev => ({ ...prev, [postId]: !prev[postId] }));
            } else {
                toast.error('Failed to fetch answers');
            }
        } catch (error) {
            toast.error('Error fetching answers:', error);
        }
    };


    return (
        <>
            <HomeNavbar />
            <div className="blog_container">
                <h1>Blog Page</h1>
                <div className="posts_container">
                    <SkeletonTheme baseColor="#202020" highlightColor="#ddd">
                        {isLoading ? (
                            Array(8).fill().map((_, index) => (
                                <div key={index} className="post_card">
                                    <Skeleton height={200} animation="wave" />
                                    <h3><Skeleton width="20vw" animation="wave" /></h3>
                                    <p><Skeleton count={3} animation="wave" /></p>
                                </div>
                            ))
                        ) : (
                            posts.map(post => (
                                <div key={post._id} className="post">
                                    <div className="post_header">
                                        <div className='blog_card_header'>
                                            <h2>{post.title}</h2>
                                            <span>
                                                {post.userEmail.split('@')[0].slice(0, 11)}{'X'.repeat(10)}@{post.userEmail.split('@')[1].slice(-4)}
                                            </span>


                                        </div>
                                        <p className="post_date">
                                            {new Date(post.createdAt).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>

                                    </div>
                                    <div className="post_image">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            width={800}
                                            height={400}
                                            layout="responsive"
                                            objectFit="cover"
                                        />
                                    </div>

                                    <div className="post_content">
                                        <p>{post.description}</p>
                                    </div>
                                    <div className="post_footer">
                                        {selectedPostId === post._id ? (
                                            <>
                                                <textarea
                                                    value={newAnswer}
                                                    onChange={handleAnswerChange}
                                                    placeholder="Write your answer here"
                                                    rows={4}
                                                />
                                                <button onClick={() => handleSubmit(post._id)}>
                                                    Submit
                                                </button>
                                            </>
                                        ) : (
                                            <button className='post_ans_btn' onClick={() => setSelectedPostId(post._id)}>
                                                Post Answer
                                            </button>
                                        )}
                                        <button className='view_answers_btn' onClick={() => handleViewAnswers(post._id)}>
                                            {showAnswers[post._id] ? 'Hide Answers' : 'View Answers'}
                                        </button>

                                    </div>
                                    {showAnswers[post._id] && answers[post._id] && (
                                        <div className="answers_list">
                                            {answers[post._id].map((answer, index) => (
                                                <div key={index} className="answer_item">
                                                    <p className='ans_user'><strong>{answer.userEmail.split('@')[0].slice(0, 11)}{'x'.repeat(10)}@{post.userEmail.split('@')[1].slice(-4)}</strong></p>
                                                    <p className='ans_text'>{answer.text}</p>
                                                    <p className="answer_date">{new Date(answer.createdAt).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'numeric',
                                                        year: 'numeric'
                                                    })}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </SkeletonTheme>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
