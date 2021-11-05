import tw from "twin.macro";
import styled from "@emotion/styled";
import { PokemonDetailAbilities } from "~/client/Pokemon";

const CardAbilityContainer = styled.div(tw`
    flex flex-wrap items-center justify-center gap-2 bg-gray-600 bg-opacity-40 w-11/12 mt-1 p-1 sm:p-2 md:p-3 rounded-md
`);

const AbilityItem = styled.span`
  ${tw`bg-green-400 rounded-md text-xs text-gray-900 px-2 py-0.5`}
`;

interface AbilityProps {
  abilities?: PokemonDetailAbilities[];
}
export default function CardAbility(props: AbilityProps) {
  const { abilities = [] } = props;
  return (
    <CardAbilityContainer>
      {abilities.map((ability, i) => (
        <AbilityItem key={ability.ability.name + i}>
          {ability.ability.name}
        </AbilityItem>
      ))}
    </CardAbilityContainer>
  );
}
