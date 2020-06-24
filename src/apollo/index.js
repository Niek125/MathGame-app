import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const link = createHttpLink({
  uri: 'http://localhost:4000/api/graphql'
})

const cache = new InMemoryCache()

const apollo = new ApolloClient({
  link,
  cache
})

export default apollo
