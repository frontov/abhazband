// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="app-footer">
            <div className="container">
                <p>&copy; {currentYear} AbhazBand. Душевные, но не душные</p>
                <p>
                    Присоединяйся: {/* Add social media links here */}
                    <a href="https://t.me/abhazbandnews" target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>Telegram</a>
                    <a href="https://www.instagram.com/abhazband/" target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>Instagram</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
