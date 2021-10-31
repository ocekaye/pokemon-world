import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import client from "~/client";
import { getPokemons } from "~/client/Pokemon";

const Poke = () => {
  const { loading, error, data } = useQuery(getPokemons);
  if (loading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <div>
      {data.pokemons.results.map((d) => (
        <div key={d.name}>{d.name}</div>
      ))}
    </div>
  );
};

export default function Pokemons() {
  return (
    <ApolloProvider client={client}>
      <Poke />
    </ApolloProvider>
  );
}
