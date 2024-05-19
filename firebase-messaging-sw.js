importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBKrtlWdUW7zO9g9zm9slaguHQmF6kJuV0",
  authDomain: "diyouforklfitapp.firebaseapp.com",
  projectId: "diyouforklfitapp",
  storageBucket: "diyouforklfitapp.appspot.com",
  messagingSenderId: "728063402975",
  appId: "1:728063402975:web:ef09e7cb6df5ef0ddcda6a",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
