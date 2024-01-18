import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useTheme} from '../context/ThemeContextProvider';
import Switch from './Switch';
import {View, Text, StyleSheet} from 'react-native';

export default CustomDrawer = props => {
  const {mode, setMode} = useTheme();
  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1}} {...props}>
      <View style={{flex: 1}}>
        <DrawerItemList {...props} />
      </View>
      <View
        style={{
          borderTopWidth: StyleSheet.hairlineWidth,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center'
        }}>
        <Text style={{color: 'black',fontSize:18}}>Dark Mode</Text>
        <Switch
          open={mode === 'dark' ? true : false}
          setSwitch={bool => {
            setMode(() => (bool ? 'dark' : 'light'));
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};
