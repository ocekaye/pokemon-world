import { useEffect, useState } from "react";
import {
  PokemonItem as PokeItem,
  getPokemonByName,
  PokemonDetailData,
} from "~/client/Pokemon";
import { useQuery } from "@apollo/client";
import tw from "twin.macro";
import styled from "@emotion/styled";
import Background from "~/components/Card/CardBgSpecies";
import { upperFirst } from "lodash";
import {
  getStatsValue,
  STATUS,
  createStatusObject,
  StatsObject,
} from "~/helpers/PokemonHelpers";
import {
  Card,
  CardContent,
  CardContentType,
  CardTitle,
  CardBackground,
  CardAvatar,
  PokemonIconType,
  HealthPoint,
} from "~/components/Card";

interface PokemonItemProps {
  pokemon: PokeItem;
}
export default function PokemonItem(props: PokemonItemProps) {
  const iconTypeSize = "16px";
  const [stats, setStat] = useState<StatsObject>({
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
  });
  const { loading, error, data } = useQuery<PokemonDetailData, any>(
    getPokemonByName,
    {
      variables: { name: props.pokemon.name },
    }
  );

  useEffect(() => {
    if (data) {
      const statusObject = createStatusObject(data.pokemon.stats);
      setStat(statusObject);
    }
  }, [data]);

  return (
    <Card>
      <CardBackground
        type={
          !loading && data?.pokemon?.types?.length > 0
            ? data?.pokemon.types[0].type.name
            : null
        }
      />
      <CardContent>
        <CardTitle>{upperFirst(props.pokemon.name)}</CardTitle>
        <HealthPoint maxHealth={stats.hp} curentHealth={stats.hp} />
        <CardAvatar imageUrl={props.pokemon.dreamworld} half />
        <CardContentType>
          {loading ? (
            <PokemonIconType type="normal" iconProps={{ size: iconTypeSize }} />
          ) : data?.pokemon?.types?.length > 0 ? (
            data?.pokemon.types.map((poke) => (
              <PokemonIconType
                key={poke.type.name}
                type={poke.type.name}
                iconProps={{ size: iconTypeSize }}
              />
            ))
          ) : (
            <PokemonIconType type="normal" iconProps={{ size: iconTypeSize }} />
          )}
        </CardContentType>
      </CardContent>
    </Card>
  );
}
