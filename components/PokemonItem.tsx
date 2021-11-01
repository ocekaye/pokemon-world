import { PokemonItem as PokeItem } from "~/client/Pokemon";
import tw from "twin.macro";
import styled from "@emotion/styled";
import Background from "~/components/CardBgSpecies";
import PokemonCardAvatar from "~/components/PokemonCardAvatar";
import PokemonIconType from "~/components/PokemonIconType";
import { upperFirst } from "lodash";
const PokemonItemStyled = styled.div(tw`
    aspect-h-6
    aspect-w-4
    rounded-xl
    shadow-md
    overflow-hidden
`);

const Title = styled.div(tw`
    font-bold text-lg text-gray-50 px-3 self-start mb-3
`);

const Contents = styled.div(tw`
flex flex-col items-center
`);

const TypeIconList = styled.div(tw`
  flex gap-0.5 p-1
`);

const TypeIcon = styled.img(
  tw`h-3 w-3 fill-current stroke-current text-red-500 `
);

interface PokemonItemProps {
  pokemon: PokeItem;
}
export default function PokemonItem(props: PokemonItemProps) {
  const iconTypeSize = "16px";
  return (
    <PokemonItemStyled>
      <Background />
      <Contents>
        <Title>{upperFirst(props.pokemon.name)}</Title>
        <PokemonCardAvatar imageUrl={props.pokemon.dreamworld} half />
        <TypeIconList>
          <PokemonIconType type="water" iconProps={{ size: iconTypeSize }} />
          <PokemonIconType type="fairy" iconProps={{ size: iconTypeSize }} />
          <PokemonIconType type="unknown" iconProps={{ size: iconTypeSize }} />
          <PokemonIconType type="shadow" iconProps={{ size: iconTypeSize }} />
          <PokemonIconType type="dragon" iconProps={{ size: iconTypeSize }} />
          <PokemonIconType type="dark" iconProps={{ size: iconTypeSize }} />
        </TypeIconList>
      </Contents>
    </PokemonItemStyled>
  );
}
