// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
// Example: import heroImage from '../../assets/hero-image.jpg';

function HomePage() {
    return (
        <div className="homepage">
            <section className="hero-section" /* style={{ backgroundImage: `url(${heroImage})` }} */>
                <div className="hero-content container">
                    <h1>Катай с душой! Катай от души!</h1>
                    <p className="subtitle">AbhazBand: Лучший способ познать страну души - это проехать по ней на велосипеде.</p>
                    <p>Присоединяйся к движению. Исследуй Абхазию на двух колесах с крутой компанией единомышленников.</p>
                    <Link to="/events" className="cta-button">Предстоящие поездки и мероприятия</Link>
                </div>
            </section>

            <section className="intro-section container">
                <h2>WTF? AbhazBand?</h2>
                <p>
                    Мы — сообщество велосипедистов и поклонников угара,
                    объединенных любовью к свободе, приключениям и дикой энергии Абхазии.
                    Мы организуем групповые поездки, кемпы и социальные мероприятия.
                    Будь вы опытный велосипедист, ярый панк или просто любопытный,
                    вы всегда будете здесь желанным гостем.
                </p>
                <Link to="/about" className="learn-more-link">узнать больше</Link>
            </section>

            <section className="featured-event container">
                <h2>Оьбязательно к посещению</h2>
                <div className="event-card-placeholder">
                    <h3>King of Mamdzyshkha</h3>
                    <p><strong>Когда?</strong>  скоро
                        {/*<strong>Время:</strong> 12:00*/}
                    </p>
                    <p>Анархия на колесах по живописной дороге на высшую точку Абхазии.</p>
                    <Link to="/events" className="details-link">Смотреть все мероприятия</Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
