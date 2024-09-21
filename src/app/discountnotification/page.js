"use client"
import { useState } from 'react';
import "../../../styles/discount.css";

export default function DiscountNotification() {
    const [isVisible, setIsVisible] = useState(true);

    const closeNotification = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="notification" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
                <div className="discount_notification">
                    <p>🎉 Get 20% off on all courses! Use code: <strong>JSMASTER20</strong></p>
                    <button className="close_button" onClick={closeNotification}>✖</button>
                </div>
            </div>

        )
    );
}
