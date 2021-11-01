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

type PokemonDetailResponse = {
  data: PokemonDetailData;
};

type PokemonDetailData = {
  pokemon: PokemonDetailItem;
};

type PokemonDetailItem = {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: PokemonDetailTypes[];
  abilities: PokemonDetailAbilities[];
  stats: PokemonDetailStats[];
};

type PokemonDetailTypes = {
  type: PokemonDetailType;
};

type PokemonDetailType = {
  name: string;
};

type PokemonDetailAbilities = {
  ability: PokemonDetailAbilitiy;
};

type PokemonDetailAbilitiy = {
  name: string;
};

type PokemonDetailStats = {
  base_stat: number;
  stat: PokemonDetailStat;
};

type PokemonDetailStat = {
  name: string;
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

const getPokemonByName = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types {
        type {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      weight
      height
    }
  }
`;

export {
  getPokemons,
  getPokemonByName,
  limit,
  PokemonsType,
  PokemonsData,
  PokemonsResponse,
  PokemonItem,
  PokemonTypes,
  PokemonDetailData,
  PokemonDetailStats,
  PokemonDetailAbilities,
};
