import {View, Text, Pressable, Animated, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

const Screen2 = ({navigation}) => {
  const colors=['red','yellow','blue','green','#000','#aeaeae','#aeae']
  const focussed = useIsFocused();
  let height = useRef(new Animated.Value(0)).current;
  let width = useRef(new Animated.Value(0)).current;
  const [text, displayText] = useState(true);
  const animate = () => {
    displayText(false);
    Animated.parallel([
      Animated.timing(height, {
        toValue: -(Dimensions.get('window').height / 2) + 40,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(width, {
        delay: 1200,
        toValue: Dimensions.get('window').width,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(()=>{
      //after the animation is done fallback to the main screen
      navigation?.navigate("Basic");
    });
  };
  useEffect(() => {
    if (!focussed) {
      Animated.parallel([
        Animated.timing(height, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          delay: 1200,
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
      ]).start();
      displayText(true);
    }
  }, [focussed]);
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          backgroundColor: '#ed840d',
          width,
          height: 5,
        }}></Animated.View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Pressable
          onPress={animate}
          style={({pressed}) => [pressed && {opacity: 0.8}]}>
          <Animated.View
            style={{
              height: 100,
              aspectRatio: 1,
              backgroundColor:colors[Math.trunc(Math.random()*colors.length)],
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              transform: [
                {
                  translateY: height,
                },
                {
                  scale: height.interpolate({
                    inputRange: [
                      -(Dimensions.get('window').height / 2) + 40,
                      0,
                    ],
                    outputRange: [0, 1],
                  }),
                },
              ],
            }}>
            <Text style={{color: 'white'}}>{text && 'Click Me'}</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen2;
