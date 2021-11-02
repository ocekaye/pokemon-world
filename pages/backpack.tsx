import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { MyPokemon, IPokemon } from "~/Db";
import PokemonItem from "~/components/PokemonItem";
const GridContainter = styled.div(
  tw`
  grid grid-cols-2 
  gap-2
  px-2 pt-2
  sm:grid-cols-3 sm:gap-2 sm:px-3 sm:pt-3
  md:grid-cols-4 md:gap-3 md:px-4 md:pt-4
  lg:grid-cols-5 lg:gap-4
  xl:grid-cols-6`
);
export default function Backpack(): NextPage {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const pokeData = await MyPokemon.getAll();
    setPokemons(pokeData);
  };

  return (
    <div>
      <GridContainter>
        {pokemons.map((poke) => (
          <PokemonItem key={poke.pokeName} pokemonData={poke} />
        ))}
      </GridContainter>
    </div>
  );
}
