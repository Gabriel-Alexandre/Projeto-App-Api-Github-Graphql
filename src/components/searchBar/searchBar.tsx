import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';

interface SearchBarProps {
    userName: string,
    setUserName: Function,
    getUsers: Function,
    loading: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({
    userName, setUserName, getUsers, loading
}) => {

    return(
        <View style={styles.container}>
            {loading == true ?
            <ActivityIndicator style={{flex: 1}} color={'#000'}/> :
            <IconButton icon={"magnify"} style={{flex: 1}}
                onPress={() => {getUsers({
                    variables: {
                        query: userName,
                        type: "USER",
                        numOfResults: 30
                    }
                });}}
            />}

            <TextInput style={{flex: 5, fontSize: 18}} 
            value={userName}
            onChangeText={
                (userName) => setUserName(userName)
            }
            placeholder={"Search User"}
            />

            <IconButton icon={"close"} style={{flex: 1}}
                onPress={() => setUserName("")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchBar;