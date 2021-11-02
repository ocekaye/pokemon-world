import { gql } from "@apollo/client";
const limit = 20;

interface PokemonsResponse {
  data: PokemonsData;
}

interface PokemonsData {
  pokemons: PokemonsType;
}

interface PokemonsType {
  count: number;
  results: PokemonItem[];
}
interface PokemonItem {
  url: string;
  name: string;
  image: string;
  dreamworld: string;
}

interface PokemonDetailResponse {
  data: PokemonDetailData;
}

interface PokemonDetailData {
  pokemon: PokemonDetailItem;
}

interface PokemonDetailItem {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: PokemonDetailTypes[];
  abilities: PokemonDetailAbilities[];
  stats: PokemonDetailStats[];
}

interface PokemonDetailTypes {
  interface: PokemonDetailType;
}

interface PokemonDetailType {
  name: string;
}

interface PokemonDetailAbilities {
  ability: PokemonDetailAbilitiy;
}

interface PokemonDetailAbilitiy {
  name: string;
}

interface PokemonDetailStats {
  base_stat: number;
  stat: PokemonDetailStat;
}

interface PokemonDetailStat {
  name: string;
}

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
  PokemonDetailTypes,
  PokemonDetailStats,
  PokemonDetailAbilities,
  PokemonDetailItem,
};
