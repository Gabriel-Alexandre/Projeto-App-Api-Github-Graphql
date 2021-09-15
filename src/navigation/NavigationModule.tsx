import React from 'react';
import SearchScreen from '../views/SearchScreen/searchScreen';
import ProfileScreen from '../views/ProfileScreen/profileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

interface NavigationModuleProps { }

export type RootStackParamList = {
    SearchScreen: undefined;
    ProfileScreen: {
        user: string
    }
};

const Stack = createStackNavigator<RootStackParamList>();


const NavigationModule: React.FC<NavigationModuleProps> = ({

}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SearchScreen" component={SearchScreen}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationModule;


// Arquivo para definir base da minha navegação
// Arquivo para encapsular as informações de navegação