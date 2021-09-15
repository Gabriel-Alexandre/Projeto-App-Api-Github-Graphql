import React, { useState } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import SearchBar from '../../components/searchBar/searchBar';
import UserIcon from '../../components/userIcon/userIcon';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/NavigationModule';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_USERS } from '../../Graphql/queries';

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SearchScreen'>;
//Parâmetros de navegação da tela
//Meu objetivo é passar a navegação da tela para o componente


interface SearchScreenProps {
    navigation: SearchScreenNavigationProp,
 }

const SearchScreen: React.FC<SearchScreenProps> = ({
    navigation,
}) => {
    /*const {loading, data, error} = useQuery(GET_USERS, {
        variables: {
            query: "ufpb",
            type: "USER",
            numOfResults: 10
        }
    });

    - Dessa forma ele é chamado sempre que renderiza o componente
    */

    const [getUsers, {loading, data, error}] = useLazyQuery(SEARCH_USERS);

    // Dessa forma ele renderiza sempre que getUsers é alterado


    const [userName, setUserName] = useState<string>("");

    return(
        <View style={styles.container}>
            <SearchBar userName={userName} setUserName={setUserName} getUsers={getUsers} loading={loading}/>

            <FlatList
                data={data?.search?.nodes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <UserIcon
                        avatar_url={item.avatarUrl}
                        login={item.login}
                        type={item.__typename} 
                        navigation={navigation}
                    />
                }
            />
        </View>
    );

    /**
     * (data?.search?.nodes): Preciso utilizar assim porque o typescript é fortemente tipado, então dessa maneira
     * eu forço ele a receber o valores.
     */

    /**
     * O certo seria criar um tipo para controlar tudo aquilo que estou recendo no app.
     */

    /**
     * Acontece um warning quando eu pesquiso por uma corporação com UFPB, então em um app em produção esse erro deveria
     * ser tratado.
     */
    
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#E3E3E3",
        paddingTop: 15,
    },
});

export default SearchScreen;
