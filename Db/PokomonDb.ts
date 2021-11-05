import Dexie from "dexie";
import { PokemonDetailItem } from "~/client/Pokemon";

class PokemonDb extends Dexie {
  pokemons: Dexie.Table<IPokemon, number>;
  constructor() {
    super("PokemonDb");
    this.version(4)
      .stores({
        pokemons: "pokeName,id,name,weight,height,*types,*abilities,*stats",
      })
      .upgrade((tx) => {
        return tx.table("pokemons").clear();
      });
    this.pokemons = this.table("pokemons");
  }
}

export interface IPokemon extends PokemonDetailItem {
  pokeName: string;
  dreamworld: string;
}

export interface IPokeMoves {
  owner?: string;
  moves: string[];
}

export const db = new PokemonDb();
