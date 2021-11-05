import { useEffect, useState, useContext } from "react";
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
  PokemonContex,
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
import { dummyAbilities } from "~/helpers/dummy";

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

  const pokemonContext = useContext(PokemonContex);
  useEffect(() => {
    if (props.pokemon?.name != "__") {
      if (!hasData) getPokemon();
      else {
        const sts = createStatusObject(props.pokemonData?.stats);
        setStats(sts);
      }
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

  const goPlaygroundPage = () => {
    if (loading) return;
    changePokemonContextValue();
    router.push(`/playground`, `/playground`);
  };

  const onAvatarClick = () => {
    if (loading) return;
    changePokemonContextValue();
    router.push(`/pokemon/${getName()}`, `/pokemon/${getName()}`);
  };

  const changePokemonContextValue = () => {
    pokemonContext.change(
      props.pokemonData || {
        name: props.pokemon?.name || "",
        dreamworld: props.pokemon?.dreamworld || "",
        id: data?.pokemon.id || 0,
        height: data?.pokemon.height || 0,
        weight: data?.pokemon.weight || 0,
        pokeName: "",
        abilities: data?.pokemon.abilities || [],
        stats: data?.pokemon.stats || [],
        types: data?.pokemon.types || [],
      }
    );
  };

  const getTypeName = () => {
    if (props.pokemon?.name == "__") return PokemonTypes.loading;

    const td = data?.pokemon.types[0].type.name;
    const pd = props.pokemonData?.types[0]?.type.name;
    return loading ? PokemonTypes.loading : td || pd || PokemonTypes.unknown;
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
          name={props.pokemon?.name || props.pokemonData?.name || "Pokemon"}
        />
        <CardContentType>
          {loading || props.pokemon?.name == "__" ? (
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
          abilities={
            data?.pokemon?.abilities ||
            props.pokemonData?.abilities ||
            dummyAbilities
          }
        />
        {hasData ? null : (
          <CardPokemonButton onButtonClick={goPlaygroundPage} />
        )}
      </CardContent>
    </Card>
  );
}
