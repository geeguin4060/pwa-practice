import Head from "next/head";
import Notifications from "../components/Notifications/Notifications";

const Home = () => {
  return (
    <>
      <Head>
        <title>PWA-PRACTICE</title>
      </Head>
      <div>Hello PWA-PRACTICE</div>
      <Notifications />
    </>
  );
};

export default Home;
