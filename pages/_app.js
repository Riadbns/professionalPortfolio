import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Riad benos</title>
        <meta
          name='description'
          content='my name is riad benosmane I’m a front-end web developer specializing in Designing intuitive and state-of-the-art user interfaces with my expertise in front-end development.'
        />
      </Head> 
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
