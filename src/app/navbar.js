"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import "../../styles/navbar.css";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();



    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    const isActiveLink = (path) => {
        return pathname === path ? "active" : "";
    };



    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href="/">JSMaster</Link>
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
                <li><Link href="/courses" className={isActiveLink("/courses")}>Courses</Link></li>
                <li><Link href="/about" className={isActiveLink("/about")}>About Us</Link></li>
                <li><Link href="/login" className="navbar-login login_btn">Login</Link></li>
            </ul>
            <div className={`navbar-hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar bar2"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}
