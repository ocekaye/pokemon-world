import { createContext } from "react";
import { PokemonDetailStats } from "~/client/Pokemon";

enum STATUS {
  HP = "hp",
  ATTACK = "attack",
  DEFENCE = "defense",
  SPEED = "speed",
}

export interface StatsObject {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}
const getStatsValue = (
  stats: PokemonDetailStats[] = [],
  what: STATUS
): number => {
  const a = stats.find((value) => value.stat.name == what);
  return a?.base_stat || 0;
};

const createStatusObject = (stats: PokemonDetailStats[] = []): StatsObject => {
  const hp = getStatsValue(stats, STATUS.HP);
  const attack = getStatsValue(stats, STATUS.ATTACK);
  const defense = getStatsValue(stats, STATUS.DEFENCE);
  const speed = getStatsValue(stats, STATUS.SPEED);

  return {
    hp,
    attack,
    defense,
    speed,
  };
};

export { getStatsValue, STATUS, createStatusObject };
