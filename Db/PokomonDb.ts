import Dexie from "dexie";
import { PokemonDetailItem } from "~/client/Pokemon";

class PokemonDb extends Dexie {
  pokemon: Dexie.Table<IPokemon, number>;
  pokeMoves: Dexie.Table<IPokeMoves, number>;
  constructor() {
    super("PokemonDb");
    this.version(3)
      .stores({
        pokemons: "pokeName,id,name,weight,height,*types,*abilities,*stats",
        pokeMoves: "owner,*moves",
      })
      .upgrade((tx) => {
        return tx.table("pokemons").clear();
      });
    this.pokemon = this.table("pokemons");
    this.pokeMoves = this.table("pokeMoves");
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

// export { db };
