import { useEffect, useState } from "react";
import {
  PokemonItem as PokeItem,
  getPokemonByName,
  PokemonDetailData,
  PokemonTypes,
  PokemonDetailTypes,
  PokemonDetailStats,
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
import { useRouter } from "next/router";

interface PokemonItemProps {
  pokemon?: PokeItem;
  pokemonData?: IPokemon;
  onItemClick?: Function;
}
export default function PokemonItem(props: PokemonItemProps) {
  const iconTypeSize = "16px";
  const router = useRouter();
  const [hasData, setUseData] = useState<Boolean>(!!props.pokemonData);
  const [stats, setStats] = useState<StatsObject>({
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
  });

  const [getPokemon, { loading, error, data }] = useLazyQuery<
    PokemonDetailData,
    any
  >(getPokemonByName, {
    variables: { name: props.pokemon?.name || "" },
  });

  useEffect(() => {
    if (!hasData) getPokemon();
    else {
      const sts = createStatusObject(props.pokemonData?.stats);
      setStats(sts);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const statusObject = createStatusObject(data.pokemon.stats);
      setStats(statusObject);
    }
  }, [data]);

  const hasDataTypes = (): Boolean => {
    return !!data?.pokemon || !!props.pokemonData;
  };

  const getDataTypes = (): PokemonDetailTypes[] => {
    return data?.pokemon?.types || props.pokemonData?.types || [];
  };

  const getDataStats = (): PokemonDetailStats[] => {
    return data?.pokemon?.stats || props.pokemonData?.stats || [];
  };

  const getName = () => props.pokemon?.name || props.pokemonData?.name;

  const onAvatarClick = () => {
    router.push(`/pokemon/${getName()}`, `/pokemon/${getName()}`, {
      scroll: true,
    });
  };

  const getTypeName = () => {
    const td = data?.pokemon.types[0].type.name;
    const pd = props.pokemonData?.types[0]?.type.name;
    return loading ? PokemonTypes.loading : td || pd || PokemonTypes.unknown;
  };

  const save = () => {
    if (!data?.pokemon) return;

    const a = MyPokemon.fromPokemon(
      "POKEMONKUUU" + Math.random() * 10000,
      props.pokemon?.dreamworld || "",
      data.pokemon,
      getDataStats()
    );
    a.save();
  };

  return (
    <Card onCardClick={props.onItemClick}>
      <CardBackground type={getTypeName()} />
      <CardContent>
        <CardTitle>{upperFirst(getName())}</CardTitle>
        <HealthPoint maxHealth={stats.hp} curentHealth={stats.hp} />
        <CardAvatar
          imageUrl={
            props.pokemon?.dreamworld || props.pokemonData?.dreamworld || ""
          }
          half
          onAvatarClick={onAvatarClick}
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
