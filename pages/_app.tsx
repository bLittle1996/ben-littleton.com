import "../styles/tailwind.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";

const Analytics = dynamic(() => import("../components/Analytics"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ben Littleton</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=block"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=block"
          rel="stylesheet"
        />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
