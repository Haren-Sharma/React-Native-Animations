import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Basic from '../screens/Basic';
import CustomDrawer from '../components/CustomDrawer';
import Screen2 from '../screens/Screen2';

const Drawer = createDrawerNavigator();

const Route = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Basic" component={Basic} />
      <Drawer.Screen name="Screen2" component={Screen2} />
    </Drawer.Navigator>
  );
};

export default Route;
