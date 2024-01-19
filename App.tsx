import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import IntroScreen from './screens/IntroScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Intro" component={IntroScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
