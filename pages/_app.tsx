import Head from "next/head";
import { GlobalStyles } from "twin.macro";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon World</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
