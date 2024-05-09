import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TelaInicial from './src/Telas/TelaInicial';
import TelaLogin from './src/Telas/TelaLogin';
import AnalyticsScreen from "./src/Telas/AnalyticsScreen";

import {app,db,getFirestore,collection, addDoc, getDocs} from './src/services/firebaseConfig'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='TelaInicial'
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaLogin" 
          component={TelaLogin}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="AnalyticsScreen" 
          component={AnalyticsScreen}
          options={{ headerShown: false }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
