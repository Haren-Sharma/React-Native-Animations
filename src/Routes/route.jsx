import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Basic from '../screens/Basic';
import CustomDrawer from '../components/CustomDrawer';
import Screen2 from '../screens/Screen2';
import List from '../screens/List';

const Drawer = createDrawerNavigator();

const Route = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Basic" component={Basic} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="List" component={List} />
    </Drawer.Navigator>
  );
};

export default Route;
