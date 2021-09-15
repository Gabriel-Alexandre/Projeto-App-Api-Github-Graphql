import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

interface UseProfileProps {
    avatar_url: string;
    login: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
}

const UseProfile: React.FC<UseProfileProps> = ({
    avatar_url,
    login,
    bio,
    followers,
    following,
    public_repos
}) => {

    return(
        <View style={styles.container}>
            
            <Image
                style={styles.image}
                source={{
                    uri: avatar_url

                }}
            />
            <Text style={{fontSize: 22, fontFamily: 'Roboto_700Bold'}}>{login}</Text>
            <Text style={{marginLeft: 10, fontFamily: 'Roboto_400Regular',marginRight: 10, color:'#696969'}}>{bio}</Text>

            <View style={styles.sub_container}>
            
                <View style={styles.followers}>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>Seguidores</Text>
                    <Text style={{fontSize: 16, fontFamily: 'Roboto_700Bold'}}>{followers}</Text>
                </View>

                <View style={styles.public_repos}>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>Repositórios</Text>
                    <Text style={{fontSize: 16, fontFamily: 'Roboto_700Bold'}}>{public_repos}</Text>
                </View>
                
                <View style={styles.following}>

                    <Text style={{fontSize: 18, fontFamily: 'Roboto_700Bold'}}>Seguindo</Text>
                    <Text style={{fontSize: 16, fontFamily: 'Roboto_700Bold'}}>{following}</Text>
                </View>


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DDDD',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
    },
    sub_container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    image:{
        height: 140,
        width: 140,
        borderRadius: 70,
        marginTop: 30,
        marginBottom: 10,
        borderColor: "#363636",
        borderWidth: 4
    }, 
    followers:{
        flex: 1,
        alignItems: 'center',
    },
    following:{
        flex: 1,
        alignItems: 'center',
    },
    public_repos:{
        flex: 1,
        alignItems: 'center',
    }
})

export default UseProfile;

// Dicas:

/**
 * 1- Nos próximos projetos, buscar alinhar todas seções com flexbox (A compatibilidade com os dispositivos fica melhor)
 */