import { gql } from '@apollo/client'

export const SEARCH_USERS = gql`
    query searchUsers($query: String!, $type: SearchType!, $numOfResults: Int!){
        search(type: $type, query: $query, first: $numOfResults){
            nodes {
                ... on User {
                    id
                    login
                    avatarUrl
                    __typename
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query get_user($login: String!, $numberRepos: Int!){
        user(login: $login){
            name
            bio
            avatarUrl
            followers {
                totalCount
            }
            following {
                totalCount
            }
            repositories(first: $numberRepos) {
                totalCount
                nodes {
                    id
                    name
                    description
                    primaryLanguage {
                        name
                    }
                    updatedAt
                    stargazerCount
                    isFork
                    licenseInfo {
                    name
                    }
                }
            }
        }
    }`;

// type reposObject = {
//     
//    
//     license: licenseObject
// }

// Arquivo de definição das queries
