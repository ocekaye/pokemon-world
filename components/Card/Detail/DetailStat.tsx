import { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { StatsObject } from "~/helpers/PokemonHelpers";
import SwordIcon from "~/icons/SwordIcon";
import ShieldIcon from "~/icons/ShieldIcon";
import AgilityIcon from "~/icons/AgilityIcon";
import HeightIcon from "~/icons/HeightIcon";
import WeightIcon from "~/icons/WeightIcon";
import {
  DetailInfoItemTitle,
  DetailInfoContainer,
} from "~/components/Card/Detail";

interface CarsStatsProps {
  stats: StatsObject;
  height: number;
  weight: number;
}

const CardStatsItemContainer = styled.div(
  tw`grid grid-cols-2 w-full p-4 pt-0 gap-x-3`
);
const StatItem = styled.div(
  tw`flex flex-row items-center justify-start gap-0.5`
);

const StatsIcon = styled.div(tw`rounded-md px-1 py-0.5 bg-gray-800`);

const StatName = styled.div`
  ${tw`text-base text-white`}
`;

const StatValue = styled.div`
  ${tw`text-base text-white flex-grow text-right`}
`;

export default function DetailStats(props: CarsStatsProps) {
  const { stats, height, weight } = props;
  return (
    <DetailInfoContainer>
      <DetailInfoItemTitle title="Stats" />
      <CardStatsItemContainer>
        <StatItem>
          <StatsIcon>
            <SwordIcon size="14px" color="#DC2626" />
          </StatsIcon>
          <StatName>Attack</StatName>
          <StatValue>{stats.attack}</StatValue>
        </StatItem>
        <StatItem>
          <StatsIcon>
            <HeightIcon size="12px" color="#2563EB" />
          </StatsIcon>
          <StatName>Height</StatName>
          <StatValue>{height}</StatValue>
        </StatItem>
        <StatItem>
          <StatsIcon>
            <ShieldIcon size="12px" color="#059669" />
          </StatsIcon>
          <StatName>Defense</StatName>
          <StatValue>{stats.defense}</StatValue>
        </StatItem>
        <StatItem>
          <StatsIcon>
            <WeightIcon size="12px" color="#2563EB" />
          </StatsIcon>
          <StatName>Weight</StatName>
          <StatValue>{weight}</StatValue>
        </StatItem>
        <StatItem>
          <StatsIcon>
            <AgilityIcon size="12px" color="#2563EB" />
          </StatsIcon>
          <StatName>Speed</StatName>
          <StatValue>{stats.speed}</StatValue>
        </StatItem>
      </CardStatsItemContainer>
    </DetailInfoContainer>
  );
}
