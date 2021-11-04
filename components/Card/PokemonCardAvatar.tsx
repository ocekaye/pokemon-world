import tw from "twin.macro";
import styled from "@emotion/styled";
const PokemonAvatarStyled = styled.div<PokemonAvatarProps>`
  ${tw`
bg-white
bg-opacity-80
rounded-full
shadow-md
w-full
aspect-w-6
aspect-h-3
mt-2
self-center
`}
  ${({ half }) => half && tw`w-1/2`}
`;

const Image = styled.img<ImageProps>`
  ${tw`w-full h-full`}
  ${({ hasLink }) =>
    hasLink && tw`md:transition md:hover:scale-125 md:cursor-pointer`}
`;

interface PokemonAvatarProps {
  half: boolean;
}

interface ImageProps {
  hasLink: boolean;
}

interface AvatarProps {
  imageUrl: string;
  name: string;
  half: boolean;
  onAvatarClick?: Function;
}
export default function PokemonCardAvatar(props: AvatarProps) {
  return (
    <PokemonAvatarStyled half={props.half}>
      <Image
        src={props.imageUrl}
        onClick={() => {
          props.onAvatarClick?.();
        }}
        hasLink={!!props.onAvatarClick}
        alt={props.name}
      />
    </PokemonAvatarStyled>
  );
}
