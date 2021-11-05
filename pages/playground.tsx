import { Fragment, useState, useEffect, useContext } from "react";
import MyPokemon from "~/Db/MyPokemons";
import { addBall, countBall, subtractBall } from "~/Db";
import { PokemonContex } from "~/helpers/PokemonHelpers";
import type { NextPage } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { upperFirst } from "lodash";
import PlaygorundHeader from "~/components/playground/PlaygorundHeader";
import { CardBackground } from "~/components/Card";
import PokemonIcon from "~/icons/PokemonIcon";
import Modal, {
  Container as ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "~/components/modals";
import BackButton from "~/components/buttons/BackButton";
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
  relative
  z-10
  pt-6
  pb-6
  justify-center
  content-center
  items-center
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
  top-24
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

const GoBackButton = styled.div(tw`
  bg-indigo-800
  text-gray-100
  text-lg
  py-2 px-5
  cursor-pointer
  rounded-full
  ring
  ring-yellow-400
`);

const ButtonBack = styled.div(tw`
  flex absolute left-4 transition-all hover:scale-125
`);

const GiveNameContainer = styled.div(tw`
  flex flex-col justify-center gap-2
`);

const InputInfo = styled.div(tw`
  text-sm font-medium text-center
`);

const InputName = styled.input(tw`
  bg-gray-200
   rounded-full
   border-0
   focus:ring-2
   focus:ring-green-500
`);

interface IFooterButton {
  type: "save" | "leave" | "chase";
}
const FooterButton = styled.div<IFooterButton>(({ type }) => [
  tw`
bg-green-800 
text-gray-200 
font-bold 
py-1 px-6 
rounded-full 
cursor-pointer 
transition-all
hover:bg-green-600
`,
  type == "leave" && tw`bg-yellow-500 text-red-700 hover:bg-yellow-300`,
  type == "chase" && tw`bg-blue-800 hover:bg-blue-600`,
]);

const TextRunAway = styled.div(tw`
  text-lg font-bold text-center text-pink-800
`);

const Home: NextPage = () => {
  const router = useRouter();
  const pokemonContext = useContext(PokemonContex);
  const [pokemon, setPokemon] = useState(pokemonContext.pokemon);
  const [isClicked, setClicked] = useState<boolean>(false);
  const [isPokemonCatched, setPokemonCatched] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [newName, setName] = useState<string>("");
  const [isNameExist, setIsNameExist] = useState(false);
  const [owned, setOwned] = useState<number>(0);
  const [balls, setBalls] = useState<number>(0);
  const [isBallOutOfStock, setIsOutOfStock] = useState(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    countOwned();
    getBall();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const countOwned = async () => {
    if (!pokemon) return;
    const have = await MyPokemon.countByPokemonName(pokemon.name);
    setOwned(have);
  };

  const getBall = () => {
    const ba = countBall();
    setBalls(ba);
  };

  const getType = () =>
    (pokemon?.types.length || []) > 0 ? pokemon?.types[0].type.name : "normal";

  const isCatched = (): boolean => Math.random() > 0.5;

  const Catch = () => {
    if (isClicked) return;
    if (balls < 1) {
      setIsOutOfStock(true);
      return;
    }
    setClicked(true);
    subtractBall();
    getBall();
    timer = setTimeout(() => {
      Cathing();
    }, 3500);
  };

  const Cathing = () => {
    if (isCatched()) {
      setPokemonCatched(true);
    } else {
      setPokemonCatched(false);
    }
    setClicked(false);
    setOpen(true);
  };

  const save = async () => {
    if (!newName || newName.length < 1) return;

    if (!pokemon) {
      setPokemonCatched(false);
      setOpen(true);
      return;
    }

    const isTaken = await MyPokemon.getByName(newName);
    if (isTaken) {
      setIsNameExist(true);
      setOpen(true);
      setPokemonCatched(false);
      return;
    }

    const isCreated = MyPokemon.fromPokemon(
      newName,
      pokemon.dreamworld || "",
      pokemon,
      pokemon.stats
    ).save();
    setOpen(false);
    back();
  };

  const back = () => {
    router.back();
  };

  const renderGiveName = () => {
    return (
      <GiveNameContainer>
        <InputInfo>Please give {pokemon?.name} new name</InputInfo>
        <InputName
          type="text"
          placeholder="New Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </GiveNameContainer>
    );
  };

  return (
    <Fragment>
      <Head>
        <title>{pokemon ? pokemon.name : "No Pokemon Here"}</title>
      </Head>

      <Container>
        <CardBackground type={getType() || "normal"} />
        <Header>
          <PlaygorundHeader owned={owned} ball={balls} />
        </Header>

        <PokemonContainer>
          {pokemon ? (
            <Fragment>
              <Pokename>{upperFirst(pokemon.name)}</Pokename>
              <Image
                src={pokemon.dreamworld || ""}
                alt={pokemon.name || "Pokemon"}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Pokename>NO POKEMON HERE</Pokename>
              <GoBackButton onClick={back}>Go Back</GoBackButton>
            </Fragment>
          )}
        </PokemonContainer>
        {pokemon ? (
          <Footer>
            <ButtonBack>
              <BackButton onClick={back} />
            </ButtonBack>

            <PokeButton onClick={Catch} isClicked={isClicked}>
              <PokemonIcon />
            </PokeButton>
          </Footer>
        ) : null}
      </Container>
      <Modal open={open}>
        <ModalContainer>
          <ModalHeader>
            {isPokemonCatched
              ? `Yahoo! ${pokemon?.name} is now yours.`
              : "Ouch!"}
          </ModalHeader>
          <ModalContent>
            {isPokemonCatched ? (
              renderGiveName()
            ) : (
              <TextRunAway>
                {isNameExist
                  ? `${newName} is already taken. why did you forget? now ${pokemon?.name} run away!`
                  : `${pokemon?.name} run away!!!`}
              </TextRunAway>
            )}
          </ModalContent>
          <ModalFooter>
            {isPokemonCatched ? (
              <FooterButton type="save" onClick={() => save()}>
                Save
              </FooterButton>
            ) : (
              <Fragment>
                <FooterButton type="chase" onClick={() => setOpen(false)}>
                  Chase
                </FooterButton>
                <FooterButton type="leave" onClick={back}>
                  Leave
                </FooterButton>
              </Fragment>
            )}
          </ModalFooter>
        </ModalContainer>
      </Modal>
      <Modal
        open={isBallOutOfStock}
        onClose={() => {
          setIsOutOfStock(false);
        }}
      >
        <ModalContent>
          Ball out of stock, please go explore to catch ball
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Home;
