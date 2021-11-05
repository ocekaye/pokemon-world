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
  getPokemonMoves,
  PokemonDetailData,
  PokemonDetailMoves,
  PokemonMoves,
} from "~/client/Pokemon";
import { upperFirst } from "lodash";
import {
  CardBackground,
  CardTitle,
  HealthPoint,
  CardAvatar,
  CardContentType,
  PokemonIconType,
  CardPokemonButton,
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
import BackButton from "~/components/buttons/BackButton";

const Container = styled.main(tw`
    flex
    relative
    min-h-screen
    max-w-full
    min-w-full
    pb-16
    
`);
const Header = styled.div(tw`flex flex-col h-screen w-screen justify-center`);
const Title = styled.span(tw`text-4xl font-bold text-center`);
const Footer = styled.div(tw`fixed w-full flex justify-center bottom-4`);
const ButtonBack = styled.div(tw`
  flex absolute left-4 transition-all hover:scale-125 self-center
`);
const Home: NextPage = () => {
  const pokeContext = useContext(PokemonContex);
  const router = useRouter();
  const [pokemon, setPokemon] = useState<IPokemon | null>(pokeContext.pokemon);
  const [moves, setMove] = useState<PokemonMoves[] | null>(null);

  const [getPokemon, { loading, error, data }] = useLazyQuery<
    PokemonDetailData,
    any
  >(getPokemonByName, {
    variables: { name: router.query.pokeName || "" },
  });

  const [getMoves, eventMove] = useLazyQuery<PokemonDetailMoves, any>(
    getPokemonMoves,
    {
      variables: { name: router.query.pokeName || "" },
    }
  );

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
    if (!moves) getMoves();
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
        stats: data.pokemon.stats,
        types: data.pokemon.types,
      });
      setStatsObject(createStatusObject(data.pokemon.stats));
    }
  }, [data]);

  useEffect(() => {
    if (eventMove.data?.pokemon.moves)
      setMove(eventMove?.data?.pokemon.moves || null);
  }, [eventMove]);

  const getTypes = () => {
    return pokemon?.types && pokemon.types.length > 0
      ? pokemon.types[0].type.name
      : "loading";
  };

  const goPlaygroundPage = () => {
    if (pokemon) {
      changePokemonContextValue();
      router.push(`/playground`, `/playground`, { scroll: true });
    }
  };

  const changePokemonContextValue = () => {
    if (pokeContext.pokemon == null) pokeContext.change(pokemon);
  };

  const back = () => {
    router.back();
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
            <CardTitle>
              {upperFirst(router.query.pokeName)}
              {` (${0} owned)`}
            </CardTitle>
            <HealthPoint maxHealth={100} curentHealth={100} />
            <CardAvatar
              imageUrl={pokemon?.dreamworld || ""}
              half
              name={pokemon?.name || "Pokemon"}
            />
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
              chips={moves ? moves.map((move) => move.move.name) || [] : []}
              chipFor={CHIP.MOVE}
            />
          </DetailInfo>
        </DetailContainer>
      </Container>
      <Footer>
        <ButtonBack>
          <BackButton onClick={back} />
        </ButtonBack>
        <CardPokemonButton onButtonClick={goPlaygroundPage} />
      </Footer>
    </Fragment>
  );
};

export default Home;
