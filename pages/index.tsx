import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";

const Container = styled.main`
  ${tw`container min-h-screen`}
`;
const Header = styled.div(tw`flex flex-col h-screen w-screen justify-center`);
const Title = styled.span(tw`text-4xl font-bold text-center`);
const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Pokemon World</title>
        <meta name="description" content="Pokemon World. Show my pokemon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header>
          <Title>Welcome to POKEMON WORLD!</Title>
        </Header>
      </Container>
    </Fragment>
  );
};

export default Home;
