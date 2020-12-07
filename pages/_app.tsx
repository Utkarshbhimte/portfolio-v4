import "../assets/styles/main.css";
import "../assets/styles/prism.css";
import "react-notion/src/styles.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Devtools } from "@ui-devtools/tailwind";


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Devtools>
        <Component {...pageProps} />
      </Devtools>
    </>
  );
}

export default App;
