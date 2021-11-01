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
  results: PokemonItem[];
};
type PokemonItem = {
  url: string;
  name: string;
  image: string;
  dreamworld: string;
};

enum PokemonTypes {
  normal = "normal",
  fighting = "fighting",
  flying = "flying",
  poison = "poison",
  ground = "ground",
  rock = "rock",
  bug = "bug",
  ghost = "ghost",
  steel = "steel",
  fire = "fire",
  water = "water",
  grass = "grass",
  electric = "electric",
  psychic = "psychic",
  ice = "ice",
  dragon = "dragon",
  dark = "dark",
  fairy = "fairy",
  unknown = "unknown",
  shadow = "shadow",
}

const getPokemons = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        url
        name
        image
        dreamworld
      }
    }
  }
`;

export {
  getPokemons,
  limit,
  PokemonsType,
  PokemonsData,
  PokemonsResponse,
  PokemonItem,
  PokemonTypes,
};
