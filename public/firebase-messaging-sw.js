importScripts(
  "https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCdWScLY-8ktiDLHHWN9tkKCyu-v0fV7wc",
  authDomain: "pwa-practice-e073f.firebaseapp.com",
  projectId: "pwa-practice-e073f",
  storageBucket: "pwa-practice-e073f.appspot.com",
  messagingSenderId: "64892272764",
  appId: "1:64892272764:web:956641227135064d4cc9f9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  if (!payload.notification) return;
  const { title, body, icon } = payload.notification;

  return self.registration.showNotification(title, { body, icon });
});
