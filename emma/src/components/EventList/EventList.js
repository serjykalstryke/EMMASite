// src/components/EventList.js

import React from 'react';
import eventData from '../../data/EventData';
import './EventList.css';

const EventList = () => {
    // Function to find the next occurrence of a specific weekday
    const getNextDateForDay = (dayOfWeek) => {
      const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(dayOfWeek);
      if (dayIndex === -1) return null; // Invalid day check
    
      const today = new Date();
      const currentDay = today.getDay();
      const isAfterMeetingTime = currentDay === dayIndex && today.getHours() >= 18; // Check if it's Wednesday after 6 PM
      const isPastDayOfWeek = currentDay > dayIndex || isAfterMeetingTime; // Thursday or later, or after 6 PM on Wednesday
    
      // Calculate days until the next occurrence, considering Thursday as the reset day
      const daysUntilNext = isPastDayOfWeek ? (7 + dayIndex - currentDay) % 7 || 7 : (dayIndex - currentDay);
    
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + daysUntilNext);
      nextDate.setHours(18, 0, 0, 0); // Set time to 6 PM
    
      return nextDate;
    };
  
    // Function to format the event date and time in user's local timezone
    const formatEventDateTime = (event) => {
      const { date, time } = event;
      const eventDate = date === "Wednesday" ? getNextDateForDay("Wednesday") : new Date(date);
  
      if (!eventDate) return 'Date not available';
  
      // Set the time as if in CST (UTC-6)
      const [hours, minutes, seconds] = time.split(':');
      eventDate.setUTCHours(parseInt(hours) + 6, parseInt(minutes), parseInt(seconds) || 0);
  
      // Debugging log to check event date and time before formatting
      console.log("Event Date (UTC):", eventDate.toUTCString());
      console.log("Event Date (Local):", eventDate.toString());
  
      // Format the event date and time in the user's local time zone
      return new Intl.DateTimeFormat('default', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }).format(eventDate);
    };
  
    return (
      <section className="event-list-section centered-content-container">
        <h2 id="upcoming-events" className="event-list-title">Upcoming Events</h2>
        <div className="event-list-container">
          {eventData.map((event) => (
            <div key={event.id} className="event-card">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{formatEventDateTime(event)}</p>
              <p className="event-description">{event.description}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-button">
                Join Event
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default EventList;