"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import "../../../styles/profile.css";
import HomeNavbar from "../home-navbar/page";
import { getUserEmailFromToken } from '../authUtils';

export default function ProfilePage() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        profilePicture: '/assets/default_profile.jfif',
        phone: '',
    });
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    useEffect(() => {
        const fetchUserData = async () => {
            const email = getUserEmailFromToken();
            if (!email) {
                console.error('User email not found');
                return;
            }

            try {
                const response = await fetch(`/api/profile?email=${email}`);
                const fetchedUser = await response.json();

                if (response.ok) {
                    setUser({
                        ...user,
                        ...fetchedUser,
                        profilePicture: fetchedUser.profilePicture || '/assets/default_profile.jfif',
                    });
                    setFormData({
                        ...formData,
                        ...fetchedUser,
                        profilePicture: fetchedUser.profilePicture || '/assets/default_profile.jfif',
                    });
                } else {
                    console.error(fetchedUser.message);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleEdit = () => {
        setEditing(!editing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        setUser(formData);
        setEditing(false);
    };

    return (
        <>
            <HomeNavbar />
            <div className="profile_container">
                <div className="profile_header">
                    <div className="profile_picture">
                        <Image
                            src={user.profilePicture}
                            alt="Profile Picture"
                            width={150}
                            height={150}
                            className="profile_img"
                            unoptimized={true}
                        />
                    </div>
                    <div className="profile_info">
                        {editing ? (
                            <>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="profile_input"
                                />
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="profile_input"
                                />
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="profile_input"
                                />
                            </>
                        ) : (
                            <>
                                <h2>{user.username}</h2>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                                <p>{user.gender}</p>
                            </>
                        )}
                        <button onClick={editing ? handleSave : handleEdit} className="profile_button">
                            {editing ? 'Save' : 'Edit Profile'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
