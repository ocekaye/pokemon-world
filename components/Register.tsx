import tw, { styled } from "twin.macro";
import Information from "~/components/Informations";
import { useRouter } from "next/router";
import { useState } from "react";
import cookieCutter from "cookie-cutter";

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
    flex flex-col justify-center items-center
    bg-gray-300 
    bg-opacity-25
    rounded-2xl
    shadow-lg
    p-3
`);

const Wellcome = styled.div(tw`
    font-extrabold
    text-center 
    text-xl
    text-green-800
    sm:text-2xl
    md:text-4xl
`);

const Info = styled.div(tw`
    font-extrabold
    text-center
    text-sm
    text-pokemon-blue
    sm:text-lg
    md:text-xl
`);

const InputName = styled.input(tw`
    bg-yellow-600
    placeholder-white
    placeholder-opacity-50
    text-white
    text-center
    rounded-full
    border 
    border-transparent 
    focus:outline-none 
    focus:ring-1 focus:ring-pokemon-yellow focus:border-transparent
    focus:shadow-lg
    mt-1
`);

const InputInfo = styled.div(tw`
    flex justify-center
`);

const ButtonGo = styled.div(tw`
    bg-pokemon-blue
    text-white
    rounded-full
    px-5
    py-2
    w-auto
    text-center
    cursor-pointer
    shadow-sm
    transition-all
    hover:scale-105
    mt-4
`);

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const go = () => {
    if (name && name.length > 0) {
      cookieCutter.set("account", name);
      router.reload();
    }
  };
  return (
    <RegisterStyled>
      <Header>
        <Wellcome>Welcome to Pokemon World</Wellcome>
        <Info>Let's tell me your name </Info>
      </Header>
      <Container>
        <InputInfo>Please input your name</InputInfo>
        <InputName
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <ButtonGo onClick={go}>Let's Go!</ButtonGo>
      </Container>
      <Information />
    </RegisterStyled>
  );
}
