// src/pages/EventsPage/EventsPage.jsx
import React, { useState, useEffect } from 'react';
import './EventsPage.css';

// Mock data - replace with API call in a real app
const mockEvents = [
    // { id: 1, name: "Sukhumi Night Riot Ride", date: "2024-08-15", time: "20:00", location: "Sukhumi Central Square", description: "Anarchy on wheels through the streets of Sukhumi, followed by a DIY punk gig at 'The Bunker'." },
    // { id: 2, name: "Gagra Coastal Cruise & Punk Picnic", date: "2024-09-05", time: "14:00", location: "Gagra Colonnade", description: "Scenic coastal ride from Gagra to Pitsunda, ending with a beach picnic and acoustic punk sets." },
    // { id: 3, name: "Ritsa Lake Uphill Challenge", date: "2024-09-20", time: "10:00", location: "Road to Lake Ritsa", description: "Test your endurance with a challenging climb to the stunning Lake Ritsa. Punk rock playlist essential!" },
    // { id: 4, name: "Old Town Tkuarchal Exploration", date: "2024-10-10", time: "11:00", location: "Tkuarchal", description: "Explore the haunting beauty of Tkuarchal's abandoned districts by bike. Post-ride discussion on urban exploration and punk ethos." },
];

function EventCard({ event }) {
    return (
        <div className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()} | <strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
            <button className="details-button">More Info / Sign Up</button>
        </div>
    );
}

function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // In a real app, fetch events from an API
        setEvents(mockEvents);
    }, []);

    return (
        <div className="events-page container">
            <h1>Предстоящие мероприятия и кемпы</h1>
            {events.length > 0 ? (
                <div className="events-list">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            ) : (
                <p>Нет предстоящих мероприятий. Заходите позже или предложите свое!</p>
            )}
        </div>
    );
}

export default EventsPage;
