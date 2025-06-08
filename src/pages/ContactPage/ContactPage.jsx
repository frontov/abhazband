// src/pages/ContactPage/ContactPage.jsx
import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitted(false);

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setError('Name, Email, and Message are required.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Simulate form submission
        console.log('Form data submitted:', formData);
        // In a real app, you would send this data to a backend API
        // For example:
        // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData), headers: {'Content-Type': 'application/json'} })
        //   .then(response => response.json())
        //   .then(data => { setIsSubmitted(true); setFormData({ name: '', email: '', subject: '', message: '' }); })
        //   .catch(err => setError('Failed to send message. Please try again.'));

        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setIsSubmitted(false), 5000); // Reset submission message after 5 seconds
    };

    return (
        <div className="contact-page container">
            <h1>Get In Touch</h1>
            <p className="contact-intro">
                Got questions? Want to join a ride? Know a killer venue for a punk show? Or just want to say hi?
                Drop us a line! We're always stoked to hear from fellow rebels and riders.
            </p>

            <div className="contact-content">
                <div className="contact-form-container">
                    {isSubmitted && <p className="success-message">Thanks for your message! We'll get back to you faster than a stage dive!</p>}
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Other Ways to Connect</h2>
                    <p><strong>Email:</strong> <a href="mailto:info@abhazband.example.com">info@abhazband.example.com</a> (replace with actual email)</p>
                    <p><strong>Meet us:</strong> Check our <a href="/events">events page</a> for upcoming meetups and rides.</p>
                    <p>
                        <strong>Social Media:</strong> (Links to be added)
                        {/*
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">Telegram Channel</a>
            */}
                    </p>
                    <p className="disclaimer">
                        Please note: We are a grassroots club. Response times may vary depending on whether we're out riding or recovering from a gig!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
