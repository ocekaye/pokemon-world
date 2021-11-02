import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";

const Container = styled.main`
  ${tw`container min-h-screen`}
`;
const Header = styled.div(tw`flex flex-col h-screen w-screen justify-center`);
const Title = styled.span(tw`text-4xl font-bold text-center`);

export default function Backpack(): NextPage {
  return (
    <Fragment>
      <Head>
        <title>Backpack</title>
      </Head>

      <Container>
        <Header>
          <Title>My Backpack!</Title>
        </Header>
      </Container>
    </Fragment>
  );
}
