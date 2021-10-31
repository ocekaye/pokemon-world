import { gql } from "@apollo/client";
const limit = 20;

type PokemonsResponse = {
  data: PokemonsData;
};

type PokemonsData = {
  pokemons: PokemonsType;
};

type PokemonsType = {
  count: number;
  results: PokemontItem[];
};
type PokemontItem = {
  url: string;
  name: string;
  image: string;
};

const getPokemons = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        url
        name
        image
      }
    }
  }
`;

export { getPokemons, limit, PokemonsType, PokemonsData, PokemonsResponse };
