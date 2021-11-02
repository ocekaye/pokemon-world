import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";

const Container = styled.main`
  ${tw`container min-h-screen`}
`;
const Header = styled.div(tw`flex flex-col h-screen w-screen justify-center`);
const Title = styled.span(tw`text-4xl font-bold text-center`);
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>{router.query.pokeName}</title>
      </Head>

      <Container>
        <Header>
          <Title>This is detail of Pokemon {router.query.pokeName}</Title>
        </Header>
      </Container>
    </Fragment>
  );
};

export default Home;
