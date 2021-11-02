import { FC } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

const PokemonItemStyled = styled.div`
  ${tw`
flex
relative
rounded-xl
shadow-md
overflow-hidden
transition
duration-300
md:hover:shadow-2xl
hover:rotate-0
hover:z-10
transform`}
  ${({ canClick }) => canClick && tw`cursor-pointer`}
`;

interface CardProps {
  onCardClick?: Function;
}
const Card: FC<CardProps> = ({ children, onCardClick }) => {
  return (
    <PokemonItemStyled onClick={onCardClick} canClick={!!onCardClick}>
      {children}
    </PokemonItemStyled>
  );
};

export default Card;
