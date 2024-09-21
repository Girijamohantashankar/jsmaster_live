"use client"
import { useRef } from 'react';
import "../../../styles/scrollButton.css";

export default function ScrollButton() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <section ref={sectionRef} className="target_section">
            </section>

            {/* Scroll Down Button */}
            <button className="scroll_button" onClick={scrollToSection}>
                ⬇
            </button>
        </div>
    );
}
