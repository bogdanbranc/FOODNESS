import Layout from '../components/Layout'
import '../styles/globals.css'
import Script from 'next/dist/client/script';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Script src="https://kit.fontawesome.com/845a2c9539.js" />
    <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
    <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>
     <Component {...pageProps} />
  </Layout>
  
  );
}

export default MyApp
