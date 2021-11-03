import tw from "twin.macro";
import styled from "@emotion/styled";

const TitleStyled = styled.div(tw`
  flex flex-wrap justify-center self-center font-bold
`);

interface TitpeProps {
  title: string;
}
export default function Title(param: TitpeProps) {
  return <TitleStyled>{param.title}</TitleStyled>;
}
