"use client";
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import "../../../styles/navbar.css";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userInitial, setUserInitial] = useState(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const fetchUserInitial = async () => {
            let token = localStorage.getItem('token') || sessionStorage.getItem('token');
           
            if (!token) {
                setUserInitial(null);
                
                return;
            }
            try {
                const response = await fetch('/api/user-initial', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (response.status === 401) {
                    if (data.message === 'Token expired. Please log in again.') {
                        localStorage.removeItem('token');
                        sessionStorage.removeItem('token');
                        router.push('/login');
                    } else {
                        setUserInitial(null);
                    }
                } else if (response.ok) {
                    setUserInitial(data.userInitial);
                } else {
                    setUserInitial(null);
                }
            } catch (error) {
                console.error('Error fetching user initial:', error);
                setUserInitial(null);
            }
        };

        fetchUserInitial();
    }, [router]);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const isActiveLink = (path) => {
        return pathname === path ? "active" : "";
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUserInitial(null);
        router.push('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href="/home">JSMaster</Link>
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
                <li><Link href="/home" className={isActiveLink("/home")}>Home</Link></li>
                <li><Link href="/blog" className={isActiveLink("/blog")}>Blog</Link></li>
                <li><Link href="/community" className={isActiveLink("/community")}>Community</Link></li>
                <li><Link href="/contact" className={isActiveLink("/contact")}>Contact Us</Link></li>
                <li className="navbar-user" onClick={toggleDropdown}>
                    <span className="user-initial">{userInitial}</span>
                    <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                        <Link href="/profile">Profile</Link>
                        <Link href="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </li>
            </ul>
            <div className={`navbar-hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar bar2"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}
