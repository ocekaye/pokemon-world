import { Fragment, useState, useEffect, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { MyPokemon, IPokemon } from "~/Db";
import { useLazyQuery } from "@apollo/client";
import {
  getDreamworldById,
  getPokemonByName,
  PokemonDetailData,
} from "~/client/Pokemon";
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
import {
  PokemonContex,
  createStatusObject,
  StatsObject,
} from "~/helpers/PokemonHelpers";

const Container = styled.main(tw`
    flex
    min-h-screen
    max-w-full
    min-w-full
    
`);
const Header = styled.div(tw`flex flex-col h-screen w-screen justify-center`);
const Title = styled.span(tw`text-4xl font-bold text-center`);
const Home: NextPage = () => {
  const pokeContext = useContext(PokemonContex);
  const router = useRouter();
  const [pokemon, setPokemon] = useState<IPokemon | null>(pokeContext.pokemon);
  const [getPokemon, { loading, error, data }] = useLazyQuery<
    PokemonDetailData,
    any
  >(getPokemonByName, {
    variables: { name: router.query.pokeName || "" },
  });
  const [statsObject, setStatsObject] = useState<StatsObject>(
    pokeContext.pokemon
      ? createStatusObject(pokeContext.pokemon.stats)
      : {
          attack: 0,
          defense: 0,
          hp: 0,
          speed: 0,
        }
  );

  useEffect(() => {
    if (!pokemon) getPokemon();
  }, []);

  useEffect(() => {
    if (data?.pokemon) {
      setPokemon({
        pokeName: "",
        dreamworld: getDreamworldById(data.pokemon.id),
        name: data.pokemon.name,
        id: data.pokemon.id,
        height: data.pokemon.height,
        weight: data.pokemon.weight,
        abilities: data.pokemon.abilities,
        moves: data.pokemon.moves,
        stats: data.pokemon.stats,
        types: data.pokemon.types,
      });
      setStatsObject(createStatusObject(data.pokemon.stats));
    }
  }, [data]);

  const getTypes = () => {
    return pokemon?.types && pokemon.types.length > 0
      ? pokemon.types[0].type.name
      : "loading";
  };

  return (
    <Fragment>
      <Head>
        <title>{router.query.pokeName}</title>
      </Head>

      <Container>
        <CardBackground type={getTypes()} />
        <DetailContainer>
          <DetailChar>
            <CardTitle>{upperFirst(router.query.pokeName + "")}</CardTitle>
            <HealthPoint maxHealth={100} curentHealth={100} />
            <CardAvatar imageUrl={pokemon?.dreamworld || ""} half />
            <CardContentType>
              {pokemon?.types ? (
                pokemon.types.map((pkm) => {
                  return (
                    <PokemonIconType
                      type={pkm.type.name}
                      iconProps={{ size: "30px" }}
                    />
                  );
                })
              ) : (
                <PokemonIconType type="normal" iconProps={{ size: "30px" }} />
              )}
            </CardContentType>
          </DetailChar>
          <DetailInfo>
            <DetailStat
              height={pokemon?.height || 0}
              weight={pokemon?.weight || 0}
              stats={statsObject}
            />
            <DetailChips
              title="Abilities"
              chips={
                pokemon?.abilities.map((ability) => ability.ability.name) || []
              }
              chipFor={CHIP.ABILITY}
            />
            <DetailChips
              title="Moves"
              chips={pokemon?.moves.map((move) => move.move.name) || []}
              chipFor={CHIP.MOVE}
            />
          </DetailInfo>
        </DetailContainer>
      </Container>
    </Fragment>
  );
};

export default Home;
