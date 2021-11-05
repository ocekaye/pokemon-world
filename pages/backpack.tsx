import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { MyPokemon, IPokemon } from "~/Db";
import PokemonItem from "~/components/PokemonItem";
import BackButton from "~/components/buttons/BackButton";
const GridContainter = styled.div(
  tw`
  grid grid-cols-2
  gap-2
  px-2 pt-2
  sm:grid-cols-3 sm:gap-2 sm:px-3 sm:pt-3
  md:grid-cols-4 md:gap-3 md:px-4 md:pt-4
  lg:grid-cols-5 lg:gap-4
  xl:grid-cols-6  
  grid-flow-row-dense
  `
);

const BackpackStyled = styled.div(tw`
  flex
`);

const ButtonBack = styled.div(tw`
  flex absolute left-4 bottom-4 transition-all hover:scale-125
`);
export default function Backpack() {
  const router = useRouter();
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const back = () => {
    router.back();
  };
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const pokeData = await MyPokemon.getAll();
    setPokemons(pokeData);
  };

  return (
    <BackpackStyled>
      <GridContainter>
        {pokemons.map((poke) => (
          <PokemonItem key={poke.pokeName} pokemonData={poke} />
        ))}
      </GridContainter>
      <ButtonBack>
        <BackButton onClick={back} />
      </ButtonBack>
    </BackpackStyled>
  );
}
