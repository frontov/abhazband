// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="not-found-page container">
            <div className="not-found-content">
                <h1>404 - Lost the Trail?</h1>
                <p>Oops! Looks like you've taken a wrong turn or this page decided to stage dive into the void.</p>
                <p>Don't worry, even the most hardcore punks get lost sometimes.</p>
                <img src="https://via.placeholder.com/300x200.png?text=Lost+Punk+Cyclist" alt="Lost Punk Cyclist" className="not-found-image" />
                <p>Let's get you back on track:</p>
                <Link to="/" className="back-home-button">Go Back to Homepage</Link>
                <p>Or maybe check out our <Link to="/events">upcoming events</Link>?</p>
            </div>
        </div>
    );
}

export default NotFoundPage;
