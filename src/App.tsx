import React from 'react';
import './i18n/i18n';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './views/home';
import Secondary from './views/secondary';
const Stack = createNativeStackNavigator<navigationParams>();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Secondary' component={Secondary}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type navigationParams = {
  Home: undefined;
  Secondary: { color: string };
}

export default App;
