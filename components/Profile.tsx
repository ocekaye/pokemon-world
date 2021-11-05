import tw, { styled } from "twin.macro";
import Information from "~/components/Informations";
import { useRouter } from "next/router";
import { useState } from "react";
import { addBall } from "~/Db";
import { IHome } from "~/pages";
import MainCharIcon from "~/icons/MainCharIcon";
import MapIcon from "~/icons/MapIcon";
import BackpackIcon from "~/icons/BackpackIcon";

const RegisterStyled = styled.div(tw`
    flex flex-col gap-2
    justify-around 
    bg-gradient-to-b from-pokemon-yellow  to-pokemon-red
    min-h-screen 
    w-screen 
    items-center
    
`);

const Header = styled.div(tw`
    flex flex-col justify-center gap-4
`);

const Container = styled.div(tw`
    flex 
    justify-center 
    items-center
`);

const Wellcome = styled.div(tw`
    font-extrabold
    text-center 
    text-xl
    text-green-800
    sm:text-2xl
    md:text-4xl
`);

const Avatar = styled.div(tw`
    h-40
`);

const ActionContainer = styled.div(tw`
    flex flex-col gap-2
`);

const Explore = styled.button(tw`
    flex gap-1
    text-white
    cursor-pointer
    bg-blue-700
    py-1
    px-4
    rounded-full
    shadow-lg
    transition-all
    hover:scale-110
`);

const Pocket = styled.button(tw`
    flex gap-1
    text-white
    cursor-pointer
    bg-yellow-500
    py-1
    px-4
    rounded-full
    shadow-lg
    transition-all
    hover:scale-110
`);

export default function Profile(props: IHome) {
  const router = useRouter();

  const goExplore = () => {
    addBall();
    router.push("/pokemons", "/pokemons");
  };

  const goBackpack = () => {
    router.push("/backpack", "/backpack");
  };

  return (
    <RegisterStyled>
      <Header>
        <Wellcome>Hello {props.account}</Wellcome>
      </Header>
      <Container>
        <Avatar>
          <MainCharIcon />
        </Avatar>
        <ActionContainer>
          <Explore onClick={goExplore}>
            <MapIcon size="30px" />
            <div>Explore</div>
          </Explore>
          <Pocket onClick={goBackpack}>
            <BackpackIcon size="30px" />
            <div>My Backpack</div>
          </Pocket>
        </ActionContainer>
      </Container>
      <Information />
    </RegisterStyled>
  );
}
