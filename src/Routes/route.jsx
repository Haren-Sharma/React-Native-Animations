import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Basic from '../screens/Basic';

const Drawer = createDrawerNavigator();

const Route = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Basic" component={Basic} />
    </Drawer.Navigator>
  );
};

export default Route;
