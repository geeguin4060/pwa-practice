import Head from "next/head";
import { initializeApp } from "firebase/app";
import {
  Messaging,
  getMessaging,
  getToken,
  onMessage,
} from "firebase/messaging";
import { useCallback, useEffect } from "react";

export default function Home() {
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

    const getMessagingToken = async (messaging: Messaging) =>
      await getToken(messaging, {
        vapidKey:
          "BCwMyFPwrsfNy-ACj0v5RqNV1nVvIpis5FVSJAbB-MgFRCEt5RmQWke9KM0mlVrgmAEJNLRxBLI5aLjNNuN_VWY",
      });

    const messaging = getMessaging(app);

    const permission = await Notification.requestPermission();

    if (permission !== "granted") return;

    const token = await getMessagingToken(messaging);

    console.log(token);

    onMessage(messaging, async (payload) => {
      if (!payload.notification) return;

      const { title = "", body = "", icon } = payload.notification;

      const notification = new Notification(title, { body, icon });
    });
  }, []);

  useEffect(() => {
    initailizeFCM();
  }, [initailizeFCM]);

  return (
    <>
      <Head>
        <title>PWA-PRACTICE</title>
      </Head>
      <div>Hello PWA-PRACTICE</div>
    </>
  );
}
