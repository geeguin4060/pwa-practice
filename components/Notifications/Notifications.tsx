import { initializeApp } from "firebase/app";
import {
  Messaging,
  NotificationPayload,
  getMessaging,
  getToken,
  onMessage,
} from "firebase/messaging";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);

  const getMessagingToken = async (messaging: Messaging) =>
    await getToken(messaging, {
      vapidKey:
        "BCwMyFPwrsfNy-ACj0v5RqNV1nVvIpis5FVSJAbB-MgFRCEt5RmQWke9KM0mlVrgmAEJNLRxBLI5aLjNNuN_VWY",
    });

  const initailizeFCM = useCallback(async () => {
    const firebaseConfig = {
      apiKey: "AIzaSyCdWScLY-8ktiDLHHWN9tkKCyu-v0fV7wc",
      authDomain: "pwa-practice-e073f.firebaseapp.com",
      projectId: "pwa-practice-e073f",
      storageBucket: "pwa-practice-e073f.appspot.com",
      messagingSenderId: "64892272764",
      appId: "1:64892272764:web:956641227135064d4cc9f9",
    };

    const app = initializeApp(firebaseConfig);

    const messaging = getMessaging(app);

    if (process.env.NODE_ENV === "development") {
      const token = await getMessagingToken(messaging);

      console.log(token);
    }

    onMessage(messaging, async ({ notification }) => {
      if (!notification) return;

      setNotifications((prev) => [...prev, notification]);
    });
  }, []);

  useEffect(() => {
    initailizeFCM();
  }, [initailizeFCM]);

  return (
    <div>
      <div>Notification List</div>
      {notifications.map(({ title, body, icon, image }, index) => (
        <div key={index}>
          <div>{title}</div>
          <div>{body}</div>
          {icon && <Image src={icon} alt="icon" />}
          {image && <Image src={image} alt="image" />}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
