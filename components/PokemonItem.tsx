import { useEffect, useState } from "react";
import {
  PokemonItem as PokeItem,
  getPokemonByName,
  PokemonDetailData,
  PokemonTypes,
  PokemonDetailTypes,
} from "~/client/Pokemon";
import { useLazyQuery } from "@apollo/client";
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
  CardStats,
  CardAbility,
  CardPokemonButton,
} from "~/components/Card";
import { MyPokemon, IPokemon } from "~/Db";

interface PokemonItemProps {
  pokemon?: PokeItem;
  pokemonData?: IPokemon;
  onItemClick?: Function;
}
export default function PokemonItem(props: PokemonItemProps) {
  const iconTypeSize = "16px";
  const [hasData, setUseData] = useState<Boolean>(!!props.pokemonData);
  const [stats, setStats] = useState<StatsObject>(
    props.pokemonData?.stats || {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    }
  );

  const [getPokemon, { loading, error, data }] = useLazyQuery<
    PokemonDetailData,
    any
  >(getPokemonByName, {
    variables: { name: props.pokemon?.name || "" },
  });

  useEffect(() => {
    if (!hasData) getPokemon();
  }, []);

  useEffect(() => {
    if (data) {
      const statusObject = createStatusObject(data.pokemon.stats);
      setStats(statusObject);
    }
  }, [data]);

  const hasDataTypes = (): Boolean => {
    return (
      data?.pokemon?.types?.length > 0 || props.pokemonData?.types.length > 0
    );
  };

  const getDataTypes = (): PokemonDetailTypes[] => {
    return data?.pokemon?.types || props.pokemonData?.types || [];
  };

  const save = () => {
    if (!data?.pokemon) return;
    console.log("save");
    const a = MyPokemon.fromPokemon(
      "POKEMONKUUU" + Math.random() * 10000,
      props.pokemon.dreamworld,
      data.pokemon,
      stats
    );
    a.save();
  };

  return (
    <Card onCardClick={props.onItemClick}>
      <CardBackground
        type={
          !loading && (data?.pokemon?.types?.length > 0 || hasData)
            ? data?.pokemon?.types[0]?.type.name ||
              props.pokemonData?.types[0]?.type.name ||
              PokemonTypes.unknown
            : null
        }
      />
      <CardContent>
        <CardTitle>
          {upperFirst(props.pokemon?.name || props.pokemonData?.name)}
        </CardTitle>
        <HealthPoint maxHealth={stats.hp} curentHealth={stats.hp} />
        <CardAvatar
          imageUrl={props.pokemon?.dreamworld || props.pokemonData?.dreamworld}
          half
        />
        <CardContentType>
          {loading ? (
            <PokemonIconType type="normal" iconProps={{ size: iconTypeSize }} />
          ) : hasDataTypes() ? (
            getDataTypes().map((poke) => (
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
        <CardStats
          stats={stats}
          height={data?.pokemon?.height || props.pokemonData?.height || 0}
          weight={data?.pokemon?.weight || props.pokemonData?.weight || 0}
        />
        <CardAbility
          abilities={data?.pokemon?.abilities || props.pokemonData?.abilities}
        />
        {hasData ? null : <CardPokemonButton save={save} />}
      </CardContent>
    </Card>
  );
}
