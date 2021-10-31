import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { gql, useLazyQuery } from "@apollo/client";

import {
  getPokemons,
  limit,
  PokemonsResponse,
  PokemontItem,
} from "~/client/Pokemon";
import client from "~/client";

interface PokemonsProp {
  pokemons: PokemontItem[];
  count: number;
  page: number | null;
}
export default function Pokemons(props: PokemonsProp) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(props.page || 0);
  const [pokemons, setPokemons] = useState(props.pokemons || []);
  const [getData, { loading, error, called, data }] = useLazyQuery(
    getPokemons,
    { variables: { offset: currentPage * limit, limit } }
  );

  const goNextPage = () => {
    const newPage = currentPage + 1;
    router.push(`/pokemons/?page=${newPage}`, `/pokemons/?page=${newPage}`, {
      shallow: true,
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

  return (
    <div>
      {pokemons.map((d) => (
        <div key={d.name}>{d.name}</div>
      ))}
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div
          onClick={() => {
            goNextPage();
          }}
        >
          load more
        </div>
      )}
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
