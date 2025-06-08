// src/pages/GalleryPage/GalleryPage.jsx
import React from 'react';
import './GalleryPage.css';

// Mock data - replace with actual image paths or API data
const galleryImages = [
    { id: 1, src: "src/assets/kostya.jpg", alt: "+100500 ватт", caption: "Мощь" },
    { id: 2, src: "src/assets/love.jpg", alt: "+10 ватт", caption: "Поддержка" },
    { id: 3, src: "src/assets/ritsa.jpg", alt: "", caption: "Команда" },
    { id: 4, src: "src/assets/vodopad.jpg", alt: "", caption: "Виды" },
    { id: 5, src: "src/assets/zhopy.jpg", alt: "", caption: "другие Виды" },
    { id: 6, src: "src/assets/shults.jpg", alt: "", caption: "подменный велосипед" },
    { id: 7, src: "src/assets/trio.jpg", alt: "", caption: "Виды + другие Виды" },
    { id: 8, src: "src/assets/hadsup.jpg", alt: "", caption: "ты не пройдешь" },
];

function GalleryItem({ image }) {
    return (
        <div className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <div className="caption">{image.caption}</div>
        </div>
    );
}

function GalleryPage() {
    return (
        <div className="gallery-page container">
            <h1>МЫ: заезды, жопы, Абхазия</h1>
            <p className="gallery-intro">Снимки из наших приключений. Дороги, кайф, байки, банда.</p>
            <div className="gallery-grid">
                {galleryImages.map(image => (
                    <GalleryItem key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
}

export default GalleryPage;
