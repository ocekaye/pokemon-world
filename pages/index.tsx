import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Pokemon World</title>
        <meta name="description" content="Pokemon World. Show my pokemon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container min-h-screen ">
        <div className="flex flex-col h-screen w-screen justify-center">
          <span className="text-4xl font-bold text-center">
            Welcome to POKEMON WORLD!
          </span>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
