import Dexie from "dexie";
import { PokemonDetailItem } from "~/client/Pokemon";

class PokemonDb extends Dexie {
  pokemon: Dexie.Table<IPokemon, number>;
  constructor() {
    super("PokemonDb");
    this.version(1).stores({
      pokemons: "pokeName,id,name,weight,height,*types,*abilities,*stats",
    });
    this.pokemon = this.table("pokemons");
  }
}

interface IPokemon extends PokemonDetailItem {
  pokeName: string;
  dreamworld: string;
}

const db = new PokemonDb();

export { db, IPokemon };
