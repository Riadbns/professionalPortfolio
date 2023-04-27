import "../styles/globals.css";
import Head from 'next/head';
import { useTheme } from "../components/ThemeProvider";
import { ThemeProvider } from '../components/ThemeProvider';
import Layout from "../components/Layout";
import { LocaleProvider } from '../components/LocaleProvider';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] =useTheme();
  return (
    <>
     <Head>
        <title>Riad benos</title>
        <meta
          name='description'
          content='my name is riad benosmane I’m a front-end web developer specializing in Designing intuitive and state-of-the-art user interfaces with my expertise in front-end development.'
        />
      </Head> 
      <LocaleProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </LocaleProvider>
    </>
  );
}

export default MyApp;
