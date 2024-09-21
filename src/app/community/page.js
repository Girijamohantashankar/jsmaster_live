"use client";
import { useState, useEffect } from 'react';
import "../../../styles/community.css";
import HomeNavbar from "../home-navbar/page";
import Modal from '../communityCard/page';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ImageModal from '../ImageModal/page';
import { getUserEmailFromToken } from '../authUtils';

export default function Community() {
    const [modalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedPost, setExpandedPost] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [expandedPosts, setExpandedPosts] = useState({});

    const toggleModal = () => setModalOpen(prev => !prev);
    const addPost = (newPost) => {
        setPosts(prevPosts => [...prevPosts, newPost]);
        toggleModal();
    };

    const toggleAnswer = (postId) => {
        setExpandedPost(prevPostId => (prevPostId === postId ? null : postId));
    };

    const toggleReadMore = (postId) => {
        setExpandedPosts(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    };

    useEffect(() => {
        const email = getUserEmailFromToken();
        setUserEmail(email);

        const fetchPosts = async () => {
            if (!email) return;

            try {
                const response = await fetch(`/api/showposts?email=${email}`);
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                } else {
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [userEmail]);

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const deletePost = async (postId) => {
        try {
            const response = await fetch(`/api/postdelete?postId=${postId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
            } else {
                console.error('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <>
            <HomeNavbar />
            <div className="community_container">
                <h1>Y<span className='or'>our</span> Qu<span className='or'>ery</span> Po<span className='or'>st</span>s</h1>
                <p className={`community_para`}>
                    In this community, you can share any JavaScript-related problems,
                    issues, or errors that you are facing in your code or project.
                    Whether its a bug, a question about best practices, or a challenge you are stuck on,
                    feel free to post your query here. Our community is here to help you troubleshoot,
                    brainstorm, and collaborate on solutions to your coding problems.
                </p>
                <div className="community_post">
                    <button className="add_post_button" onClick={toggleModal}>
                        <i className="fa-solid fa-plus"></i> Post
                    </button>
                    <div className="post_cards">
                        <SkeletonTheme baseColor="#202020" highlightColor="#ddd">
                            {isLoading ? (
                                Array(8).fill().map((_, index) => (
                                    <div key={index} className="post_card">
                                        <Skeleton className='Skeleton' height={200} animation="wave" />
                                        <h3><Skeleton className='Skeleton' width="20vw" animation="wave" /></h3>
                                        <p><Skeleton className='Skeleton' count={3} animation="wave" /></p>
                                    </div>
                                ))
                            ) : (
                                posts.map(post => (
                                    <div key={post._id} className="post_card">
                                        <div className="image_wrapper">
                                            <Image
                                                src={post.imageUrl}
                                                alt={post.title}
                                                width={300}
                                                height={200}
                                                layout="responsive"
                                                objectFit="cover"
                                                onClick={() => openImageModal(post.imageUrl)}
                                            />
                                        </div>
                                        <h3>{post.title}</h3>
                                        <div className='desc_text'>
                                            <p className={`line_clamp ${expandedPosts[post._id] ? 'expanded' : ''}`}>
                                                {post.description}
                                            </p>
                                            <span onClick={() => toggleReadMore(post._id)} className='readmore_btn_color'>
                                                {expandedPosts[post._id] ? 'Read Less' : 'Read More'}
                                            </span>
                                        </div>
                                        <button onClick={() => toggleAnswer(post._id)}>
                                            {expandedPost === post._id ? 'Hide Answer' : 'Show Answer'}
                                        </button>
                                        <button className="delete_button" onClick={() => deletePost(post._id)}>
                                            Delete Post
                                        </button>
                                        {expandedPost === post._id && (
                                            <div className="answer_section">
                                                {post.answer.length > 0 ? (
                                                    post.answer.map((ans, index) => (
                                                        <p key={index}>{ans}</p>
                                                    ))
                                                ) : (
                                                    <p>Answer is not available</p>
                                                )}
                                            </div>
                                        )}

                                    </div>
                                ))
                            )}
                        </SkeletonTheme>
                    </div>
                </div>
                {modalOpen && <Modal onClose={toggleModal} onAddPost={addPost} />}
                {selectedImage && <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />}
            </div>
        </>
    );
}
