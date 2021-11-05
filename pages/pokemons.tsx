import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import {
  getPokemons,
  limit,
  PokemonsResponse,
  PokemonItem as PokeItem,
} from "~/client/Pokemon";
import client from "~/client";
import tw from "twin.macro";
import styled from "@emotion/styled";
import PokemonItem from "~/components/PokemonItem";
import BackpackButton from "~/components/buttons/BackpackButton";
import ProfileButton from "~/components/buttons/ProfileButton";
import NextIcon from "~/icons/NextIcon";
import PrevIcon from "~/icons/PrevIcon";

interface PokemonsProp {
  pokemons: PokeItem[];
  count: number;
  page: number | null;
}

interface ILocationProps {
  page: number;
}
const LocationStyled = styled.div<ILocationProps>(({ page }) => [
  tw`flex flex-col justify-center items-center pb-24
  bg-gradient-to-b from-pokemon-yellow  to-pokemon-red`,
  page % 5 == 0 && tw`from-pokemon-green  to-pokemon-red`,
  page % 5 == 1 && tw`from-blue-500  to-indigo-700`,
  page % 5 == 2 && tw`from-pink-600  to-gray-500`,
  page % 5 == 3 && tw`from-purple-700  to-green-700`,
  page % 5 == 4 && tw`from-green-600  to-yellow-500`,
]);

const GridContainter = styled.div(
  tw`
  grid grid-cols-2 
  gap-2
  mt-16
  px-2 pt-2
  sm:grid-cols-3 sm:gap-2 sm:px-3 sm:pt-3
  md:grid-cols-4 md:gap-3 md:px-4 md:pt-4
  lg:grid-cols-5 lg:gap-4
  xl:grid-cols-6`
);

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

const LocationButton = styled.button(tw`
  p-1 rounded-full bg-transparent transition-all
  hover:bg-yellow-400 hover:shadow-md
`);

export default function Pokemons(props: PokemonsProp) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(props.page || 0);
  const [pokemons, setPokemons] = useState(props.pokemons || []);
  const [getData, { loading, error, data }] = useLazyQuery(getPokemons, {
    variables: { offset: currentPage * limit, limit },
  });

  const goNextPage = () => {
    const newPage = currentPage ? currentPage + 1 : 1;
    changeUrl(newPage);
  };

  const goPrevPage = () => {
    if (!currentPage || currentPage < 1) return;
    const newPage = currentPage - 1;
    changeUrl(newPage);
  };

  const changeUrl = (newPage: number) => {
    router.push(`/pokemons/?page=${newPage}`, `/pokemons/?page=${newPage}`, {
      shallow: true,
      scroll: true,
    });
  };

  useEffect(() => {
    setCurrentPage((prevPage) => {
      const newPage = parseInt(router.query.page + "" || "0");
      if (newPage != props.page) getData();
      return newPage;
    });
  }, [router.query.page]);

  useEffect(() => {
    if (data) setPokemons((prevPokemons) => data.pokemons?.results || []);
  }, [data]);

  return (
    <LocationStyled page={currentPage ? currentPage + 1 : 1}>
      <HeaderContainer>
        <Header>
          <LocationButton onClick={goPrevPage}>
            <PrevIcon size="20px" color="white" />
          </LocationButton>
          <LocationText>
            Location {currentPage ? currentPage + 1 : "1"}
          </LocationText>
          <LocationButton onClick={goNextPage}>
            <NextIcon size="20px" color="white" />
          </LocationButton>
        </Header>
      </HeaderContainer>
      <GridContainter>
        {pokemons.map((d) => (
          <PokemonItem key={d.name} pokemon={d} />
        ))}
      </GridContainter>
      <ProfileButton url="/" />
      <BackpackButton url="/backpack" />
    </LocationStyled>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const data: PokemonsResponse = await client.query({
    query: getPokemons,
    variables: { limit, offset: parseInt(query.page + "" || "0") * limit },
  });

  return {
    props: {
      pokemons: data.data.pokemons.results || [],
      count: data.data.pokemons.count,
      page: parseInt(`${query.page}`),
    },
  };
};
