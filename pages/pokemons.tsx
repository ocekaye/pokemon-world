import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import { getPokemons } from "~/client/Pokemon";

export default function Pokemons() {
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
}
