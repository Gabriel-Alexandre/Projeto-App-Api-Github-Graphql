import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
// yarn add @apollo/client graphql

const httplink = createHttpLink({
    uri: 'https://api.github.com/graphql'
});
// Link base da API graphql

const authLink = setContext((_, { headers }) => {
    const token = "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";
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        }
    }
});
// Headers: Informações que não são passadas pelo link
// Foi utilizado para autentização
// (_) -> Não vou utilizar o parâmetro

const client = new ApolloClient({
    link: authLink.concat(httplink),
    cache: new InMemoryCache()
});
// Criação do client da requisição (Link base) + (Headers)

export default client;
