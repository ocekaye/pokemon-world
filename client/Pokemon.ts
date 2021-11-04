import { gql } from "@apollo/client";
import { StatsObject } from "~/helpers/PokemonHelpers";
const limit = 20;
export const getDreamworldById = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};
export interface PokemonsResponse {
  data: PokemonsData;
}

export interface PokemonsData {
  pokemons: PokemonsType;
}

export interface PokemonsType {
  count: number;
  results: PokemonItem[];
}
export interface PokemonItem {
  url: string;
  name: string;
  image: string;
  dreamworld: string;
}

export interface PokemonDetailResponse {
  data: PokemonDetailData;
}

export interface PokemonDetailData {
  pokemon: PokemonDetailItem;
}

export interface PokemonDetailItem {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: PokemonDetailTypes[];
  abilities: PokemonDetailAbilities[];
  stats: PokemonDetailStats[];
}

export interface PokemonDetailTypes {
  type: PokemonDetailType;
}

export interface PokemonDetailType {
  name: string;
}

export interface PokemonDetailAbilities {
  ability: PokemonDetailAbilitiy;
}

export interface PokemonDetailAbilitiy {
  name: string;
}

export interface PokemonDetailStats {
  base_stat: number;
  stat: PokemonDetailStat;
}

export interface PokemonDetailStat {
  name: string;
}

export interface PokemonDetailMoves {
  pokemon: { name: string; moves: PokemonMoves[] };
}

export interface PokemonMoves {
  move: PokemonMove;
}

export interface PokemonMove {
  name: string;
}

export enum PokemonTypes {
  loading = "loading",
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

const getPokemonMoves = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      moves {
        move {
          name
        }
      }
    }
  }
`;

export { getPokemons, getPokemonByName, getPokemonMoves, limit };
