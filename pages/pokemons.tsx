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
import Modal from "~/components/modals";

interface PokemonsProp {
  pokemons: PokeItem[];
  count: number;
  page: number | null;
}

const GridContainter = styled.div(
  tw`
  grid grid-cols-2 
  gap-2
  px-2 pt-2
  sm:grid-cols-3 sm:gap-2 sm:px-3 sm:pt-3
  md:grid-cols-4 md:gap-3 md:px-4 md:pt-4
  lg:grid-cols-5 lg:gap-4
  xl:grid-cols-6`
);
export default function Pokemons(props: PokemonsProp) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(props.page || 0);
  const [pokemons, setPokemons] = useState(props.pokemons || []);
  const [open, setOpen] = useState(false);
  const [getData, { loading, error, data }] = useLazyQuery(getPokemons, {
    variables: { offset: currentPage * limit, limit },
  });

  const goNextPage = () => {
    const newPage = currentPage + 1;
    router.push(`/pokemons/?page=${newPage}`, `/pokemons/?page=${newPage}`, {
      shallow: true,
      scroll: true,
    });
  };

  useEffect(() => {
    setCurrentPage((prevPage) => {
      const newPage = parseInt(router.query.page || 0);
      if (newPage != props.page) getData();
      return newPage;
    });
  }, [router.query.page]);

  useEffect(() => {
    if (data) setPokemons((prevPokemons) => data.pokemons?.results || []);
  }, [data]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <GridContainter>
        {pokemons.map((d) => (
          <PokemonItem key={d.name} pokemon={d} />
        ))}
      </GridContainter>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div
          onClick={() => {
            goNextPage();
          }}
        >
          Next
        </div>
      )}
      <div>
        <button
          onClick={() => {
            console.log("open");

            setOpen(true);
          }}
        >
          Open Modal
        </button>
      </div>
      <Modal open={open} onClose={onClose}>
        <div>asdasd</div>
      </Modal>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const data: PokemonsResponse = await client.query({
    query: getPokemons,
    variables: { limit, offset: parseInt(query.page || 0) * limit },
  });

  return {
    props: {
      pokemons: data.data.pokemons.results || [],
      count: data.data.pokemons.count,
      page: parseInt(query.page || 0),
    },
  };
};
