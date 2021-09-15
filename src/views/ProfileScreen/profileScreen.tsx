import React, {useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import UserProfile from '../../components/userProfile/userProfile';
import UserCard from '../../components/userCard/userCard';
import { ActivityIndicator } from 'react-native-paper';
import { RootStackParamList } from '../../navigation/NavigationModule';
import { RouteProp } from '@react-navigation/native';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../../Graphql/queries';

type profileScreenRouteProp = RouteProp<RootStackParamList, 'ProfileScreen'>;
//Propriedades de rota (Receber os parâmetros de navegação)

interface ProfileScreen { 
    route: profileScreenRouteProp
}

const ProfileScreen: React.FC<ProfileScreen> = ({
    route
}) => {

    const [getUsers, {loading, data, error}] = useLazyQuery(GET_USER);

    useEffect(() => {
        getUsers({
            variables: {
                login: route.params.user,
                numberRepos: 10
            }
        });
    }, []);

    return(
        <View style={styles.container}>
            {loading === true  ? 
                <ActivityIndicator style={styles.activity_indicator} color={'#000'}/> : 
                <FlatList
                    data={data?.user?.repositories?.nodes}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={() => 
                        <UserProfile
                            avatar_url={data?.user?.avatarUrl}
                            login={data?.user?.name}
                            bio={data?.user?.bio}
                            followers={data?.user?.followers.totalCount}
                            following={data?.user?.following.totalCount}
                            public_repos={data?.user?.repositories?.totalCount}
                        />
                    }
                    renderItem={({item}) => 
                        <UserCard
                            name={item?.name}
                            description={item?.description}
                            language={item?.primaryLanguage?.name == null ? '' : item?.primaryLanguage?.name}
                            updated_at={item?.updatedAt}
                            stargazers_count={item?.stargazerCount}
                            fork={item?.isFork}
                            license={item?.licenseInfo}
                        />
                    }
                />
            }
        </View>
    );

    // Sobre receber valores nulos em: (item?.primaryLanguage?.name == null ? '' : item?.primaryLanguage?.name)

    // - Nessa situação é melhor fazer o controle da tipagem com typescript através da criação e definições de tipado.
    // - Outra alternativa seria passar o objeto como parâmetro e fazer o tratamento no próprio componente. (Poŕem
    // isso não é tão bom para que o componente seja genérico).
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#DDDD",
    },
    activity_indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ProfileScreen;
