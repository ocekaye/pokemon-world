import { IPokemon, db } from "~/Db";
import {
  PokemonDetailItem,
  PokemonDetailTypes,
  PokemonDetailAbilities,
  PokemonDetailStats,
} from "~/client/Pokemon";
export default class MyPokemon implements IPokemon {
  pokeName: string;
  dreamworld: string;
  id: number;
  name: string;
  weight: number;
  height: number;
  types: PokemonDetailTypes[];
  abilities: PokemonDetailAbilities[];
  stats: PokemonDetailStats[];
  constructor(
    pokeName: string,
    dreamworld: string,
    id: string,
    name: string,
    weight: string,
    height: string,
    types: PokemonDetailTypes[],
    abilities: PokemonDetailAbilities[],
    stats: PokemonDetailStats[]
  ) {
    this.pokeName = pokeName;
    this.dreamworld = dreamworld;
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
  }

  static fromPokemon(
    pokeName: string,
    dreamworld: string,
    pokemon: PokemonDetailItem
  ): MyPokemon {
    return new MyPokemon(
      pokeName,
      dreamworld,
      pokemon.id,
      pokemon.name,
      pokemon.weight,
      pokemon.height,
      pokemon.types,
      pokemon.abilities,
      pokemon.stats
    );
  }

  static fromSelf(self: MyPokemon): MyPokemon {
    return new MyPokemon(
      self.pokeName,
      self.dreamworld,
      self.id,
      self.name,
      self.weight,
      self.height,
      self.types,
      self.abilities,
      self.stats
    );
  }

  static async getAll(): IPokemon[] {
    const poke = await db.pokemon.toArray();
    return poke;
  }

  async save() {
    await db.transaction("rw", db.pokemon, async () => {
      await db.pokemon.add(MyPokemon.fromSelf(this));
    });
  }
}
