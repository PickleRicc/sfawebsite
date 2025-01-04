import { Montserrat, Open_Sans } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable} ${openSans.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
