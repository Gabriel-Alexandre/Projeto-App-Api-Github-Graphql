import React from 'react';
import NavigationModule from './src/navigation/NavigationModule';
import { Roboto_700Bold, Roboto_400Regular}  from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ApolloProvider } from '@apollo/client';
import client from './src/services/apollo';
// yarn add install @expo-google-fonts/(nome da font)
// expo install expo-app-loading

export default function App() {

  const [FontsLoaded, error] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })
  // Carregar fonts

  if(!FontsLoaded)
    return  <AppLoading/>
  // Tratar carregamento

  return (
    <ApolloProvider client={client}>
      <NavigationModule />
    </ApolloProvider>
  );
  // ApolloProvider: Uso esse componente aqui para poder utilizar o graphl ao longo de toda minha aplicação
}

