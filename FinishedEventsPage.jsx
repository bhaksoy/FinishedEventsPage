import React, { useState, useEffect } from 'react';

const FinishedEventsPage = () => {
  const [finishedEvents, setFinishedEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // veri çekme işlemleri buraya gelecek, örn: const response = await fetch('API_URL');
      // daha sonra state güncellenecek
      // örn: setFinishedEvents(response.json());
      
const fakeEventData = [
        { id: 1, title: 'Etkinlik 1', date: '2023-11-22', finished: true },
        { id: 2, title: 'Etkinlik 2', date: '2023-11-23', finished: true },
        { id: 3, title: 'Etkinlik 3', date: '2023-11-24', finished: true },
      ];
      setFinishedEvents(fakeEventData);
    };

    fetchData();
  }, []); // sadece bir kere çalışıyor

  return (
    <div>
      <h1>Bitmiş Etkinlikler</h1>
      <ul>
        {finishedEvents.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinishedEventsPage;
