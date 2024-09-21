"use client"
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import "../../../styles/community.css";
import Loader from '../loader/page';

export default function Modal({ onClose, onAddPost }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userAnswer, setAnswer] = useState([]);

    useEffect(() => {
        const base64UrlToBase64 = (base64Url) => {
            return base64Url.replace(/-/g, '+').replace(/_/g, '/');
        };
        const parseJwt = (token) => {
            const parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error('Invalid token format');
            }
            const payload = parts[1];
            const decodedPayload = JSON.parse(atob(base64UrlToBase64(payload)));
            return decodedPayload;
        };

        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = parseJwt(token);
                const email = decodedToken.email;
                setUserEmail(email || '');
            } catch (error) {
                console.error('Error decoding token:', error);
                setUserEmail('');
            }
        } else {
            setUserEmail('');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || !image || !userEmail) return;
        setUploading(true);
        try {
            const storageRef = ref(storage, `images/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            const downloadURL = await getDownloadURL(snapshot.ref);

            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    description,
                    imageUrl: downloadURL,
                    userEmail,
                    userAnswer,
                }),
            });

            if (response.ok) {
                const postData = await response.json();
                onAddPost(postData.post);
                onClose();
            } else {
                console.error('Failed to save post data');
            }
            setUploading(false);
            onClose();
        } catch (error) {
            console.error("Error:", error);
            setUploading(false);
        }
    };

    return (
        <div className="modal_overlay">
            <div className="modal_content">
                <button className="modal_close" onClick={onClose}>X</button>
                <h2>Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        placeholder='Enter your issue'
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder='Explain Your issues'
                    ></textarea>

                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />

                    <button type="submit" disabled={uploading}>
                        {uploading ? 'Uploading...' : 'Submit'}
                    </button>
                </form>
            </div>
            {uploading && <Loader />}
        </div>
    );
}
