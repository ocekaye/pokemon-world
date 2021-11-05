import { PokemonTypes } from "~/client/Pokemon";
import tw from "twin.macro";
import styled from "@emotion/styled";

import { IconProps } from "~/icons";
import Flaying from "~/icons/types/Flaying";
import Fighting from "~/icons/types/Fighting";
import Normal from "~/icons/types/Normal";
import Poison from "~/icons/types/Poison";
import Ground from "~/icons/types/Ground";
import Rock from "~/icons/types/Rock";
import Bug from "~/icons/types/Bug";
import Ghost from "~/icons/types/Ghost";
import Steel from "~/icons/types/Steel";
import Fire from "~/icons/types/Fire";
import Water from "~/icons/types/Water";
import Grass from "~/icons/types/Grass";
import Electric from "~/icons/types/Electric";
import Psychic from "~/icons/types/Psychic";
import Ice from "~/icons/types/Ice";
import Dragon from "~/icons/types/Dragon";
import Dark from "~/icons/types/Dark";
import Fairy from "~/icons/types/Fairy";
import Unknown from "~/icons/types/Unknown";
import Shadow from "~/icons/types/Shadow";

const witchIcon = (
  value: PokemonTypes | string,
  size?: string | undefined | null
): JSX.Element => {
  switch (value) {
    case PokemonTypes.flying:
      return <Flaying color="#3B82F6" size={size} />;
    case PokemonTypes.fighting:
      return <Fighting color="#7F1D1D" size={size} />;
    case PokemonTypes.normal:
      return <Normal color="#D1D5DB" size={size} />;
    case PokemonTypes.poison:
      return <Poison color="#047857" size={size} />;
    case PokemonTypes.ground:
      return <Ground color="#92400E" size={size} />;
    case PokemonTypes.rock:
      return <Rock color="#374151" size={size} />;
    case PokemonTypes.bug:
      return <Bug color="#DB2777" size={size} />;
    case PokemonTypes.ghost:
      return <Ghost color="#EEF2FF" size={size} />;
    case PokemonTypes.steel:
      return <Steel color="#111827" size={size} />;
    case PokemonTypes.fire:
      return <Steel color="#DC2626" size={size} />;
    case PokemonTypes.water:
      return <Water color="#60A5FA" size={size} />;
    case PokemonTypes.grass:
      return <Grass color="#10B981" size={size} />;
    case PokemonTypes.electric:
      return <Electric color="#FBBF24" size={size} />;
    case PokemonTypes.psychic:
      return <Psychic color="#111827" size={size} />;
    case PokemonTypes.ice:
      return <Ice color="#DBEAFE" size={size} />;
    case PokemonTypes.dragon:
      return <Dragon color="#111827" size={size} />;
    case PokemonTypes.dark:
      return <Dark color="#111827" size={size} />;
    case PokemonTypes.fairy:
      return <Fairy color="#1E40AF" size={size} />;
    case PokemonTypes.unknown:
      return <Unknown color="#8B5CF6" size={size} />;
    case PokemonTypes.shadow:
      return <Shadow color="#D1D5DB" size={size} />;
    default:
      return <Normal color="#D1D5DB" size={size} />;
  }
};

const Icon = styled.div(tw`
    bg-gray-600  rounded-full p-2
    `);

interface PokemonIconTypeProps {
  iconProps?: IconProps;
  type: PokemonTypes | string;
}
export default function PokemonIconType(props: PokemonIconTypeProps) {
  return <Icon>{witchIcon(props.type, props.iconProps?.size)}</Icon>;
}
