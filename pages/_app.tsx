import Head from "next/head";
import { GlobalStyles } from "twin.macro";
import { ApolloProvider } from "@apollo/client";
import client from "~/client";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon World</title>
      </Head>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
