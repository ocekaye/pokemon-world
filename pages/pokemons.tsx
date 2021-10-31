import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import client from "~/client/client";

const POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const Poke = () => {
  const { loading, error, data } = useQuery(POKEMONS);
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
