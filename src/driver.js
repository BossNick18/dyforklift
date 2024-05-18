import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getMessaging, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBKrtlWdUW7zO9g9zm9slaguHQmF6kJuV0",
  authDomain: "diyouforklfitapp.firebaseapp.com",
  projectId: "diyouforklfitapp",
  storageBucket: "diyouforklfitapp.appspot.com",
  messagingSenderId: "728063402975",
  appId: "1:728063402975:web:ef09e7cb6df5ef0ddcda6a",
  measurementId: "G-2QJDPH5EGW"
};

initializeApp(firebaseConfig);

function Driver() {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const messaging = getMessaging();
    messaging.requestPermission()
      .then(() => messaging.getToken({ vapidKey: 'qVbu8IcLjOokqpyf2rAFDH9yfm7cW4C131XYO2mTKho' }))
      .then(token => {
        console.log('Token:', token);
        return axios.post('http://your-server-ip:5000/subscribe', { token, topic: `forklift-${id}` });
      })
      .then(response => {
        console.log('Subscribed to topic:', response.data);
      })
      .catch(error => {
        console.error('Error subscribing to topic:', error);
      });

    onMessage(messaging, payload => {
      console.log('Message received:', payload);
      setMessage(payload.notification.body);
      setLocation(payload.data.location); // Assuming location is sent in data
    });
  }, [id]);

  const updateAvailability = (available) => {
    axios.post('http://your-server-ip:5000/update-availability', { forkliftIndex: id - 1, available })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error updating availability:', error);
      });
  };

  const completeTask = () => {
    axios.post('http://your-server-ip:5000/complete-task', { forkliftIndex: id - 1, location })
      .then(response => {
        console.log(response.data);
        setLocation(null);
      })
      .catch(error => {
        console.error('Error completing task:', error);
      });
  };

  return (
    <div>
      <h1>Driver Interface</h1>
      <p>{message}</p>
      {location && (
        <div>
          <button onClick={completeTask}>Complete Task</button>
        </div>
      )}
      <button onClick={() => updateAvailability(true)}>Available</button>
      <button onClick={() => updateAvailability(false)}>Not Available</button>
    </div>
  );
}

export default Driver;