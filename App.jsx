import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/Routes/route';
import ThemeContextProvider from './src/context/ThemeContextProvider';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <Route />
      </ThemeContextProvider>
    </NavigationContainer>
  );
};

export default App;
