import {ApolloClient, InMemoryCache, gql }from '@apollo/client'

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
    cache: new InMemoryCache()
})

export {client, gql};