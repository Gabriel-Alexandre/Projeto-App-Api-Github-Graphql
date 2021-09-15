import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List, Colors } from 'react-native-paper'

type licenseObject = {
    name: string,
}

interface UserCard { 
    name: string;
    description: string;
    language: string;
    updated_at: string;
    license: licenseObject;
    stargazers_count: number;
    fork: boolean;
}

const UseCard: React.FC<UserCard> = ({
    name,
    description,
    language,
    license,
    updated_at,
    stargazers_count,
    fork,
}) => {

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 19, fontFamily: 'Roboto_700Bold'}}>{name}</Text>

            <View style={styles.subcontainer}>
                <Text style={{fontSize: 16, color:'#696969', fontFamily: 'Roboto_700Bold' }}>{language}</Text>
                {fork ? <List.Icon icon={"source-fork"} color={Colors.grey600} style={{marginLeft: -5, marginRight: -5}}/> : false}
                <Text style={{fontSize: 16, color:'#696969', fontFamily: 'Roboto_700Bold'}}> {stargazers_count}</Text>
                <List.Icon icon={"star-outline"} color={Colors.grey600} style={{marginLeft: -5, marginRight: -6}}/>
                <Text style={{fontSize: 16, color:'#696969', fontFamily: 'Roboto_700Bold'}}>
                    {license?.name != null ? license.name : false}
                    {/*Pode ser ou nulo ou um objeto, por isso usei o "?" */}
                    </Text>
            </View>

            <Text style={{color:'#696969', fontFamily: 'Roboto_700Bold'}}>Ultima atualização: 
            {updated_at.replace(/-/g,'/').slice(0,10).split('/').reverse().join('/')}
            </Text>

            <Text style={{color:'#696969', fontFamily: 'Roboto_400Regular'}}>
                {description ? description : 'Sem leganda'}
            </Text>
        </View>
    );
}
//star-outline / source-fork

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDD',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
        paddingLeft: 10,
        paddingBottom: 7
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -16,
        marginBottom: -14,
    },
})

export default UseCard;

// Lembrar: 

/**
 * -> Do jeito que eu fiz o Layout depende da renderização do componente, o que não é recomendável, nas próximas vezes
 * devo fazer o componente se adequar ao Layout para não ocorrer risco do meu Layout quebrar.
 */
