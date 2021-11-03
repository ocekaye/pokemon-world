import tw from "twin.macro";
import styled from "@emotion/styled";
import PokemonIcon from "~/icons/PokemonIcon";

const PokeContainer = styled.div`
  ${tw`flex flex-1 flex-col justify-end pt-2`}
`;

const PokeButton = styled.div(tw`
    cursor-pointer self-end place-self-end justify-self-end transition duration-200 hover:scale-110
`);

interface PokeButtonProps {
  save?: Function;
}
export default function CardPokemonButton(props: PokeButtonProps) {
  return (
    <PokeContainer>
      <PokeButton
        onClick={() => {
          props.save?.();
        }}
      >
        <PokemonIcon size="50px" />
      </PokeButton>
    </PokeContainer>
  );
}
