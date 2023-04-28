import "@/styles/globals.css";
import { getToken } from "firebase/messaging";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const registerServiceWorker = async () => {
    if (!("serviceWorker" in navigator)) return;

    let registration = await navigator.serviceWorker.getRegistration();
    console.log(registration);
    if (!registration) {
      registration = await navigator.serviceWorker.register("/sw.js");
    }
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      registerServiceWorker();
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
