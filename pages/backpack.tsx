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
  
  `
);

const BackpackStyled = styled.div(tw`
flex flex-col justify-center items-center pb-24 min-h-screen bg-gradient-to-b from-gray-500 to-gray-800
`);

const ButtonBack = styled.div(tw`
  flex absolute left-4 bottom-4 transition-all hover:scale-125
`);

const HeaderContainer = styled.div(tw`
  fixed top-3 z-20 w-full
`);

const Header = styled.div(tw`
  flex justify-around bg-gray-800 bg-opacity-90
  rounded-full py-3 px-4 self-stretch
  mx-4
  md:mx-48
  lg:mx-60
`);

const LocationText = styled.div(tw`
  text-white text-lg font-bold
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
      <HeaderContainer>
        <Header>
          <LocationText>My Backpack</LocationText>
        </Header>
      </HeaderContainer>
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
