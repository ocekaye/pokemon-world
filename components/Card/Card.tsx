import tw from "twin.macro";
import styled from "@emotion/styled";

const PokemonItemStyled = styled.div(tw`
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
transform`);

export default function Card(props) {
  return <PokemonItemStyled>{props.children}</PokemonItemStyled>;
}
