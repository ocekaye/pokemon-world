import tw from "twin.macro";
import styled from "@emotion/styled";
const PokemonAvatarStyled = styled.div`
  ${tw`
bg-white
bg-opacity-80
rounded-full
shadow-md
w-full
aspect-w-6
aspect-h-3
mt-2
`}
  ${({ half }) => half && tw`w-1/2`}
`;

const Image = styled.img(tw`
w-full h-full`);

interface AvatarProps {
  imageUrl: string;
  half: boolean;
}
export default function PokemonCardAvatar(props: AvatarProps) {
  return (
    <PokemonAvatarStyled half={props.half}>
      <Image src={props.imageUrl} />
    </PokemonAvatarStyled>
  );
}
