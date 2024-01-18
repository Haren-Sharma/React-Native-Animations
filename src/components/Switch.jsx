import {Animated} from 'react-native';
import React, {useRef} from 'react';

const Switch = ({
  open,
  setSwitch,
  color = '#aeaeae',
  openBackColor = '#69a7f2',
  closeBackColor = '#ded8cb',
}) => {
  const val = useRef(new Animated.Value(0)).current;
  return (
    <Animated.View
      onTouchEnd={e => {
        Animated.timing(val, {
          toValue: open ? 0 : 20,
          duration: 600,
          useNativeDriver: false,
        }).start();
        setSwitch(!open);
      }}>
      <Animated.View
        style={{
          height: 18,
          borderRadius: 15,
          borderWidth: 1,
          width: 40,
          backgroundColor: val.interpolate({
            inputRange: [0, 20],
            outputRange: [closeBackColor, openBackColor],
          }),
        }}></Animated.View>
      <Animated.View
        style={{
          height: 18,
          borderRadius: 10,
          width: 18,
          backgroundColor: color,
          position: 'absolute',
          borderWidth: 1,
          left:1,
          transform: [
            {
              translateX: val,
            },
          ],
        }}></Animated.View>
    </Animated.View>
  );
};

export default Switch;
