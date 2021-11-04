import { Fragment, useState, useEffect, useContext } from "react";
import MyPokemon from "~/Db/MyPokemons";
import { PokemonContex } from "~/helpers/PokemonHelpers";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { upperFirst } from "lodash";
import PlaygorundHeader from "~/components/playground/PlaygorundHeader";
import { CardBackground } from "~/components/Card";
import PokemonIcon from "~/icons/PokemonIcon";
import { ModalContainer } from "~/components/modals";

const Container = styled.main(tw`
    flex flex-col
    relative
    min-h-screen
    max-w-full
    min-w-full
`);

const Header = styled.div(tw`
  absolute
  top-0
  left-0
  p-3
  w-full
  z-10
`);

const Footer = styled.div(tw`
  flex
  flex-none
  z-10
  pt-6
  pb-6
  justify-center
`);

const PokemonContainer = styled.div(tw`
  flex
  flex-grow
  relative
  z-10
  justify-center
  content-center
  items-center

`);

const Image = styled.img(tw`
  w-1/3
  md:w-3/12
  lg:w-1/5
`);

const Pokename = styled.span(tw`
  absolute
  top-32
  md:top-16
  z-10
  text-xl
  md:text-3xl
  whitespace-normal
  break-all
  font-bold
`);

interface IPokeButton {
  isClicked: boolean;
}
const PokeButton = styled.div<IPokeButton>(({ isClicked }) => [
  tw`
h-20
w-20
md:h-24
md:w-24
lg:h-28
lg:w-28

transition-all
duration-500

`,
  !isClicked &&
    tw`cursor-pointer hover:scale-110 hover:rotate-360 animate-bounce`,
  isClicked && tw`animate-ping rotate-360 `,
]);

const Home: NextPage = () => {
  const router = useRouter();
  const pokemonContext = useContext(PokemonContex);
  const [isClicked, setClicked] = useState<boolean>(false);
  const [isPokemonCatched, setPokemonCatched] = useState<boolean>(false);

  const isCatched = (): boolean => Math.random() > 0.5;

  const Catch = () => {
    if (isClicked) return;
    setClicked(true);
    setTimeout(() => {
      Cathing();
    }, 5000);
  };

  const Cathing = () => {
    if (isCatched()) {
      setPokemonCatched(true);
    } else {
      setClicked(false);
    }
  };

  const save = () => {
    // if (!data?.pokemon) return;
    // const a = MyPokemon.fromPokemon(
    //   "POKEMONKUUU" + Math.random() * 10000,
    //   props.pokemon?.dreamworld || "",
    //   data.pokemon,
    //   getDataStats()
    // );
    // a.save();
  };

  return (
    <Fragment>
      <Head>
        <title>{router.query.pokeName}</title>
      </Head>

      <Container>
        <CardBackground type="normal" />
        <Header>
          <PlaygorundHeader />
        </Header>

        <PokemonContainer>
          <Pokename>POKEMON</Pokename>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
        </PokemonContainer>
        <Footer>
          <PokeButton onClick={Catch} isClicked={isClicked}>
            <PokemonIcon />
          </PokeButton>
        </Footer>
      </Container>
      <ModalContainer
        onClose={() => {
          setPokemonCatched(false);
        }}
        open={isPokemonCatched}
      ></ModalContainer>
    </Fragment>
  );
};

export default Home;
