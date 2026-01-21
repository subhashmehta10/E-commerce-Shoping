import React, { useState, useEffect, useRef } from 'react';
import './AutoSlider.css';

// Import images directly
import img1 from '../Images/4ee54ee10fcabfc9.webp';
import img2 from '../Images/60cad05c6b5382e8.webp';
import img3 from '../Images/9779aea533001495.webp';
import img4 from '../Images/d7488bff3b5c367b.webp';
import img5 from '../Images/ee5f2dae9cd95227.webp';

const images = [img1, img2, img3, img4, img5];

const AutoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 3000;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    return (
        <div className="autoslider-section">
            <div className="autoslider-container">
                <div
                    className="autoslider-track"
                    style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div className="autoslider-slide" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="autoslider-dots">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`autoslider-dot ${currentIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoSlider;
