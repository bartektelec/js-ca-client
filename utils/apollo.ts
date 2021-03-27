import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const link = new HttpLink({
	uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
});

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

export { client, gql };
