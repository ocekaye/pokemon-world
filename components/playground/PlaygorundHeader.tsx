import Head from "next/head";
import tw, { styled } from "twin.macro";
import MainCharHeadIcon from "~/icons/MainCharHeadIcon";
import PokemonIcon from "~/icons/PokemonIcon";

const Container = styled.div(tw`
  flex
  flex-col
  md:flex-row
  md:gap-x-4
  md:items-center
  gap-1
`);

const ProfileContainer = styled.div(tw`
    flex gap-x-2
`);

const ProfileImage = styled.div(tw`
    w-8 h-8 rounded-full 
`);
const ProfileName = styled.div(tw`
    text-white font-bold text-xl
`);

const PokeIcon = styled.div(tw`
    w-5 h-5
`);

const PokeText = styled.div(tw`
text-white text-sm
`);

const PokeOwnedImage = styled.img(tw`
  w-5 h-5
`);

export default function PlaygorundHeader() {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImage>
          <MainCharHeadIcon />
        </ProfileImage>
        <ProfileName>Main Character</ProfileName>
      </ProfileContainer>
      <ProfileContainer>
        <PokeIcon>
          <PokemonIcon />
        </PokeIcon>
        <PokeText>100 balls</PokeText>
      </ProfileContainer>
      <ProfileContainer>
        <PokeOwnedImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
        <PokeText>3 owned</PokeText>
      </ProfileContainer>
    </Container>
  );
}
