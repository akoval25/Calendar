import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Event.css';

const localizer = momentLocalizer(moment);

const Event = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', notes: '', color: '#000' });
  const [showForm, setShowForm] = useState(false);
  const [formPosition, setFormPosition] = useState({ top: '0', left: '0' });

  // Функція для додавання події
  const handleAddEvent = () => {
    const eventDateTime = new Date(`${newEvent.date}T${newEvent.time}`);
    if (newEvent.title.length <= 30) {
      setEvents([...events, { ...newEvent, start: eventDateTime, end: eventDateTime }]);
      setNewEvent({ title: '', date: '', time: '', notes: '', color: '#000' });
      setShowForm(false);
    }
  };

  // Функція для скасування додавання події
  const handleCancel = () => {
    setNewEvent({ title: '', date: '', time: '', notes: '', color: '#000' });
    setShowForm(false);
  };

  // Перевірка, чи дата сьогоднішня або майбутня
  const isFutureOrToday = (date) => {
    const now = moment().startOf('day');
    return moment(date).isSameOrAfter(now);
  };

  // Функція для обробки кліку по календарю
  const handleCalendarClick = (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    // Відкриваємо форму на позиції кліка
    setFormPosition({ top: `${clickY}px`, left: `${clickX}px` });
    setShowForm(true);
  };

  return (
    <div style={{ position: 'relative' }} className='Event'>
      {/* Календар */}
      <div onClick={handleCalendarClick} style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          selectable={true}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={event => ({
            style: {
              backgroundColor: event.color,
            },
          })}
          style={{ height: '100%' }}
        />
      </div>

      {/* Форма для додавання події поверх календаря */}
      {showForm && (
        <div style={{
          position: 'absolute',
          top: formPosition.top,
          left: formPosition.left,
          transform: 'translate(-50%, 0)',
          zIndex: 10,
          backgroundColor: 'white',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          width: '300px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}>
          {/* Хрестик для закриття форми */}
          <button onClick={handleCancel} style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#ff5f5f',
            borderRadius: '50%',
            border: 'none',
            width: '24px',
            height: '24px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
            lineHeight: '20px'
          }}>×</button>

          <h3>Add New Event</h3>

          <label>
            Event Name:
            <input
              type="text"
              value={newEvent.title}
              onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
              maxLength={30}
              required
              style={{ width: '100%', padding: '5px', margin: '5px 0' }}
            />
          </label>

          <label>
            Event Date:
            <input
              type="date"
              value={newEvent.date}
              onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
              min={moment().format('YYYY-MM-DD')}
              required
              style={{ width: '100%', padding: '5px', margin: '5px 0' }}
            />
          </label>

          <label>
            Event Time:
            <input
              type="time"
              value={newEvent.time}
              onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
              required
              style={{ width: '100%', padding: '5px', margin: '5px 0' }}
            />
          </label>

          <label>
            Notes:
            <textarea
              value={newEvent.notes}
              onChange={e => setNewEvent({ ...newEvent, notes: e.target.value })}
              style={{ width: '100%', padding: '5px', margin: '5px 0' }}
            />
          </label>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button onClick={handleCancel} style={{ backgroundColor: '#ccc', padding: '5px 10px' }}>Cancel</button>
            <button onClick={handleAddEvent} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '5px 10px' }}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
