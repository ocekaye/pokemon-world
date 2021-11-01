import { Component } from "react";
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

interface WitchIconRe {
  IconType: Component;
  color: string;
}
const witchIcon = (value: PokemonTypes): WitchIconRe => {
  switch (value) {
    case PokemonTypes.flying:
      return { IconType: Flaying, color: "#3B82F6" };
    case PokemonTypes.fighting:
      return { IconType: Fighting, color: "#7F1D1D" };
    case PokemonTypes.normal:
      return { IconType: Normal, color: "#D1D5DB" };
    case PokemonTypes.poison:
      return { IconType: Poison, color: "#047857" };
    case PokemonTypes.ground:
      return { IconType: Ground, color: "#92400E" };
    case PokemonTypes.rock:
      return { IconType: Rock, color: "#374151" };
    case PokemonTypes.bug:
      return { IconType: Bug, color: "#DB2777" };
    case PokemonTypes.ghost:
      return { IconType: Ghost, color: "#EEF2FF" };
    case PokemonTypes.steel:
      return { IconType: Steel, color: "#111827" };
    case PokemonTypes.fire:
      return { IconType: Fire, color: "#DC2626" };
    case PokemonTypes.water:
      return { IconType: Water, color: "#60A5FA" };
    case PokemonTypes.grass:
      return { IconType: Grass, color: "#10B981" };
    case PokemonTypes.electric:
      return { IconType: Electric, color: "#FBBF24" };
    case PokemonTypes.psychic:
      return { IconType: Psychic, color: "#111827" };
    case PokemonTypes.ice:
      return { IconType: Ice, color: "#DBEAFE" };
    case PokemonTypes.dragon:
      return { IconType: Dragon, color: "#111827" };
    case PokemonTypes.dark:
      return { IconType: Dark, color: "#111827" };
    case PokemonTypes.fairy:
      return { IconType: Fairy, color: "#1E40AF" };
    case PokemonTypes.unknown:
      return { IconType: Unknown, color: "#8B5CF6" };
    case PokemonTypes.shadow:
      return { IconType: Shadow, color: "#374151" };

    default:
      return { IconType: Normal, color: "#D1D5DB" };
  }
};

const Icon = styled.div(tw`
    bg-gray-600 bg-opacity-50 rounded-full p-2
    `);

interface PokemonIconTypeProps {
  iconProps: IconProps;
  type: PokemonTypes;
}
export default function PokemonIconType(props: PokemonIconTypeProps) {
  const { IconType, color } = witchIcon(props.type);
  return (
    <Icon>
      <IconType color={color} size={props.iconProps.size} />
    </Icon>
  );
}
