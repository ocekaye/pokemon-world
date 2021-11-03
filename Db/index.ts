import { IPokemon as MyIPokemon, db } from "~/Db/PokomonDb";
import MyPokemon from "~/Db/MyPokemons";

export interface IPokemon extends MyIPokemon {}

export { db, MyPokemon };
