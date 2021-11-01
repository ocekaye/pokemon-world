import tw from "twin.macro";
import styled from "@emotion/styled";
import PokemonIcon from "~/icons/PokemonIcon";

const PokeContainer = styled.div`
  ${tw`flex flex-1 flex-col justify-end py-2`}
`;

const PokeButton = styled.div(tw`
    cursor-pointer self-end place-self-end justify-self-end
`);

export default function CardPokemonButton() {
  return (
    <PokeContainer>
      <PokeButton>
        <PokemonIcon size="50px" />
      </PokeButton>
    </PokeContainer>
  );
}
