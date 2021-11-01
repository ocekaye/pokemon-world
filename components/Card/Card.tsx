import tw from "twin.macro";
import styled from "@emotion/styled";
const PokemonItemStyled = styled.div(tw`
    flex
    relative
    rounded-xl
    shadow-md
    overflow-hidden
    md:transition
    md:duration-200
    md:hover:shadow-2xl
`);
export default PokemonItemStyled;
