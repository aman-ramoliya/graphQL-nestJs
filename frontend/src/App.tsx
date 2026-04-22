import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_HELLO = gql`
  query {
    hello
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{data.hello}</h1>;
}

export default App;