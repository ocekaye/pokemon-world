import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { MyPokemon, IPokemon } from "~/Db";
import PokemonItem from "~/components/PokemonItem";
import BackButton from "~/components/buttons/BackButton";
import Modal, {
  Container as ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "~/components/modals";
const GridContainter = styled.div(
  tw`
  grid grid-cols-2
  gap-2
  px-2 pt-2
  mt-16
  sm:grid-cols-3 sm:gap-2 sm:px-3 sm:pt-3
  md:grid-cols-4 md:gap-3 md:px-4 md:pt-4
  lg:grid-cols-5 lg:gap-4
  xl:grid-cols-6  
  `
);

const BackpackStyled = styled.div(tw`
flex flex-col justify-center items-center pb-24 min-h-screen bg-gradient-to-b from-gray-500 to-gray-800
`);

const ButtonBack = styled.div(tw`
  flex fixed left-4 bottom-4 transition-all hover:scale-125 z-20
`);

const HeaderContainer = styled.div(tw`
  fixed top-3 z-20 w-full
`);

const Header = styled.div(tw`
  flex justify-around bg-gray-800 bg-opacity-90
  rounded-full py-3 px-4 self-stretch
  mx-4
  md:mx-48
  lg:mx-60
`);

const LocationText = styled.div(tw`
  text-white text-lg font-bold
`);

interface IFooterButton {
  type: "delete" | "cancel";
}
const FooterButton = styled.div<IFooterButton>(({ type }) => [
  tw`
text-gray-200 
font-bold 
py-1 px-6 
rounded-full 
cursor-pointer 
transition-all
`,
  type == "delete" && tw`bg-red-600 text-white hover:bg-red-800`,
  type == "cancel" && tw`bg-blue-800 hover:bg-blue-600`,
]);

const TextDelete = styled.div(tw`
  text-lg font-medium text-center text-yellow-700
`);

const ImageContent = styled.div(tw`
  flex justify-center
`);
const ImageModal = styled.img(tw`w-20`);

export default function Backpack() {
  const router = useRouter();
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [whoDelete, setWhoDelete] = useState<IPokemon | null>(null);

  const back = () => {
    router.back();
  };
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const pokeData = await MyPokemon.getAll();
    setPokemons(pokeData);
  };

  const onDelete = (pkm: IPokemon) => {
    setWhoDelete(pkm);
  };

  const close = () => {
    setWhoDelete(null);
  };

  const yesDelete = async () => {
    if (!!whoDelete) {
      await MyPokemon.deleteByName(whoDelete.pokeName);
      getPokemons();
    }
    close();
  };

  return (
    <BackpackStyled>
      <HeaderContainer>
        <Header>
          <LocationText>My Backpack</LocationText>
        </Header>
      </HeaderContainer>
      <GridContainter>
        {pokemons.map((poke) => (
          <PokemonItem
            key={poke.pokeName}
            pokemonData={poke}
            onDelete={() => onDelete(poke)}
          />
        ))}
      </GridContainter>
      <ButtonBack>
        <BackButton onClick={back} />
      </ButtonBack>
      <Modal open={!!whoDelete} onClose={close}>
        <ModalContainer>
          <ModalHeader>
            {whoDelete?.pokeName || ""}({whoDelete?.name})
          </ModalHeader>
          <ModalContent>
            <TextDelete>
              Are you sure to let go {whoDelete?.pokeName}?
            </TextDelete>
            <ImageContent>
              <ImageModal src={whoDelete?.dreamworld} />
            </ImageContent>
          </ModalContent>
          <ModalFooter>
            <FooterButton type="cancel" onClick={close}>
              Cancel
            </FooterButton>
            <FooterButton type="delete" onClick={yesDelete}>
              DELETE
            </FooterButton>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </BackpackStyled>
  );
}
