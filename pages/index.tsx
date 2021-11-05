import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import cookieCutter from "cookie-cutter";
import Cookies from "cookies";

import Register from "~/components/Register";

const Container = styled.main`
  ${tw`container min-h-screen`}
`;
const Header = styled.div(tw`flex flex-col h-screen w-screen justify-center`);
const Title = styled.span(tw`text-4xl font-bold text-center`);

interface IHome {
  account: string | null;
}

const Home: NextPage<IHome> = ({ account }) => {
  console.log(account);

  return (
    <Fragment>
      <Head>
        <title>Pokemon World</title>
        <meta name="description" content="Pokemon World. Show my pokemon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>{!account ? <Register /> : <span>YEAHOO</span>}</Container>
    </Fragment>
  );
};

Home.getInitialProps = async ({ req, res }) => {
  const isServer = !!req;
  if (isServer) {
    const cks = new Cookies(req, res);
    return {
      account: cks.get("account"),
    };
  } else
    return {
      account: cookieCutter.get("account"),
    };
};

export default Home;
