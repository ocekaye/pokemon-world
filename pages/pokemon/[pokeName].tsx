import { Fragment, useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { MyPokemon, IPokemon } from "~/Db";
import { useLazyQuery } from "@apollo/client";
import { getPokemonByName, PokemonDetailData } from "~/client/Pokemon";
import { upperFirst } from "lodash";
import {
  CardBackground,
  CardTitle,
  HealthPoint,
  CardAvatar,
  CardContentType,
  PokemonIconType,
} from "~/components/Card";
import {
  DetailContainer,
  DetailChar,
  DetailInfo,
  DetailStat,
  DetailChips,
  DetailMoves,
  CHIP,
} from "~/components/Card/Detail";

const Container = styled.main(tw`
    flex
    min-h-screen
    max-w-full
    min-w-full
    
`);
const Header = styled.div(tw`flex flex-col h-screen w-screen justify-center`);
const Title = styled.span(tw`text-4xl font-bold text-center`);
const Home: NextPage = () => {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [getPokemon, { loading, error, data }] = useLazyQuery<
    PokemonDetailData,
    any
  >(getPokemonByName, {
    variables: { name: router.query.pokeName || "" },
  });

  return (
    <Fragment>
      <Head>
        <title>{router.query.pokeName}</title>
      </Head>

      <Container>
        <CardBackground type="grass" />
        <DetailContainer>
          <DetailChar>
            <CardTitle>{upperFirst(router.query.pokeName + "")}</CardTitle>
            <HealthPoint maxHealth={100} curentHealth={100} />
            <CardAvatar
              imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
              half
            />
            <CardContentType>
              <PokemonIconType type="normal" iconProps={{ size: "30px" }} />
              <PokemonIconType type="normal" iconProps={{ size: "30px" }} />
              <PokemonIconType type="normal" iconProps={{ size: "30px" }} />
              <PokemonIconType type="normal" iconProps={{ size: "30px" }} />
            </CardContentType>
          </DetailChar>
          <DetailInfo>
            <DetailStat
              height={240}
              weight={400}
              stats={{ attack: 50, defense: 87, hp: 92, speed: 39 }}
            />
            <DetailChips
              title="Abilities"
              chips={[
                "Abilities",
                "Abilities",
                "Abilities",
                "Abilities",
                "Abilities",
              ]}
              chipFor={CHIP.ABILITY}
            />
            <DetailChips
              title="Moves"
              chips={[
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
                "Move",
              ]}
              chipFor={CHIP.MOVE}
            />
          </DetailInfo>
        </DetailContainer>
      </Container>
    </Fragment>
  );
};

export default Home;
