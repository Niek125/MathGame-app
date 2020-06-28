import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

let url = 'http://localhost:4000'
if (process.env.NODE_ENV === 'production') {
  url = 'https://ncos8docker1.sleddens.lan:7001'
}

const link = createHttpLink({
  uri: url + '/api/graphql'
})

const cache = new InMemoryCache()

const apollo = new ApolloClient({
  link,
  cache
})

export default apollo
