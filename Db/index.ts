import { IPokemon as MyIPokemon, db } from "~/Db/PokomonDb";
import MyPokemon from "~/Db/MyPokemons";
import { toNumber, toString } from "lodash";

export interface IPokemon extends MyIPokemon {}

export { db, MyPokemon };

export function countBall(): number {
  const balls = localStorage.getItem("balls") || "4";
  return toNumber(balls);
}

export function addBall(): number {
  let balls = countBall();
  balls++;
  localStorage.setItem("balls", toString(balls));
  return balls;
}

export function subtractBall(): number {
  let balls = countBall();
  balls--;
  localStorage.setItem("balls", toString(balls));
  return balls;
}
