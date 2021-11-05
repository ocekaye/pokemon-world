import { useState } from "react";
import Head from "next/head";
import { GlobalStyles } from "twin.macro";
import { ApolloProvider } from "@apollo/client";
import client from "~/client";
import type { AppProps /*, AppContext */ } from "next/app";
import { PokemonContex } from "~/helpers/PokemonHelpers";
import { IPokemon } from "~/Db";
function App({ Component, pageProps }: AppProps) {
  const [pokemonDetail, setPokemonDetail] = useState<IPokemon | null>(null);
  const [fromBackpack, setFromBackpack] = useState<boolean | undefined>(false);
  const changePokemon = (pokemon: IPokemon, fromBackpack?: boolean) => {
    setPokemonDetail(pokemon);
    setFromBackpack(fromBackpack);
  };
  return (
    <>
      <Head>
        <title>Pokemon World</title>
      </Head>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <PokemonContex.Provider
          value={{
            pokemon: pokemonDetail,
            change: changePokemon,
            fromBackpack: fromBackpack,
          }}
        >
          <Component {...pageProps} />
        </PokemonContex.Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
