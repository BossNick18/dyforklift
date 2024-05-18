// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
     apiKey: "AIzaSyBKrtlWdUW7zO9g9zm9slaguHQmF6kJuV0",
  authDomain: "diyouforklfitapp.firebaseapp.com",
  projectId: "diyouforklfitapp",
  storageBucket: "diyouforklfitapp.appspot.com",
  messagingSenderId: "728063402975",
  appId: "1:728063402975:web:ef09e7cb6df5ef0ddcda6a"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { messaging };
