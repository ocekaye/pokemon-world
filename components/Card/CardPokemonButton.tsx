import tw from "twin.macro";
import styled from "@emotion/styled";
import PokemonIcon from "~/icons/PokemonIcon";

const PokeContainer = styled.div`
  ${tw`flex flex-1  justify-center pt-2`}
`;

const PokeButton = styled.div(tw`
    cursor-pointer self-end place-self-end justify-self-end transition duration-200 hover:scale-110
`);

interface PokeButtonProps {
  onButtonClick?: Function;
}
export default function CardPokemonButton(props: PokeButtonProps) {
  return (
    <PokeContainer>
      <PokeButton
        onClick={() => {
          props.onButtonClick?.();
        }}
      >
        <PokemonIcon size="50px" />
      </PokeButton>
    </PokeContainer>
  );
}
