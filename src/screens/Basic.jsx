import {View, Text, Pressable, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
//1)need a value 
//2)we will transform that value

//(0,0)->(100,100)
//(0,0)->(1,1)->(2,2)...
//1 second
//60 frames per second(ideal situation)(i.e 60coordinates btw the 2 ends)

const Basic = () => {
  const val = useRef(new Animated.Value(0)).current;
  const flag = useRef(0);

  const animate = bool => {
    if (bool) {
      Animated.timing(val, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true, //the animation is running on the main UI thread and not the js thread
      }).start();
    } else {
      Animated.timing(val, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          flex: 5,
          opacity: val,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.Text
          style={{
            color: 'black',
            transform: [
              {
                scale: val.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 4],
                  //it becomes also true for reverse,i.e,from [1,0]=>[4,0]
                }),
              },
            ],
          }}>
          Basic
        </Animated.Text>
      </Animated.View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Pressable
          onPress={() => {
            if (flag.current === 0) {
              animate(true);
              flag.current = 1;
            } else {
              animate(false);
              flag.current = 0;
            }
          }}
          style={{backgroundColor: '#ffab4b', padding: 20}}>
          <Text style={{color: '#fff', fontSize: 16}}>Start the animation</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Basic;
