import '../styles/globals.css'
import {ThemeProvider} from 'next-themes';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Crypto currency</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <ThemeProvider attribute='class' enableSystem={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  ) 
}

export default MyApp
