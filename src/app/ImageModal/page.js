"use client";
import React from 'react';
import '../../../styles/community.css';
import Image from 'next/image';

const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="image_modal">
            <div className="image_modal_content">
                <span className="close_modal" onClick={onClose}>&times;</span>
                <Image src={imageUrl} alt="Modal Image" width={300}
                    height={200} className="modal_image" />
            </div>
        </div>
    );
};

export default ImageModal;
