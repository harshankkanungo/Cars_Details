import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cars Deatails - Next Js</title>
        <link
          rel="icon"
          href="https://c8.alamy.com/comp/2G16250/car-logo-2G16250.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
