import { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { StatsObject } from "~/helpers/PokemonHelpers";
import SwordIcon from "~/icons/SwordIcon";
import ShieldIcon from "~/icons/ShieldIcon";
import AgilityIcon from "~/icons/AgilityIcon";
import HeightIcon from "~/icons/HeightIcon";
import WeightIcon from "~/icons/WeightIcon";

interface CarsStatsProps {
  stats: StatsObject;
  height: number;
  weight: number;
}

const CardStatsContainer = styled.div(
  tw`flex flex-wrap items-center justify-center gap-2`
);
const StatItem = styled.div(
  tw`flex items-center gap-0.5 rounded-md px-1 py-0.5 bg-gray-800`
);
const StatValue = styled.span`
  ${tw`text-xs text-white font-bold`}
`;

export default function CardStats(props: CarsStatsProps) {
  const { stats, height, weight } = props;
  return (
    <CardStatsContainer>
      <StatItem>
        <SwordIcon size="12px" color="#DC2626" />
        <StatValue>{stats.attack}</StatValue>
      </StatItem>
      <StatItem>
        <ShieldIcon size="12px" color="#059669" />
        <StatValue>{stats.defense}</StatValue>
      </StatItem>
      <StatItem>
        <AgilityIcon size="12px" color="#2563EB" />
        <StatValue>{stats.speed}</StatValue>
      </StatItem>
      <StatItem>
        <HeightIcon size="12px" color="#2563EB" />
        <StatValue>{height}</StatValue>
      </StatItem>
      <StatItem>
        <WeightIcon size="12px" color="#2563EB" />
        <StatValue>{weight}</StatValue>
      </StatItem>
    </CardStatsContainer>
  );
}
