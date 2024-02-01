import {View, Text, FlatList, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useIsFocused} from '@react-navigation/native';

const List = () => {
  const [data, setData] = useState(null);
  const focussed = useIsFocused();
  const scrollY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (focussed) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          return res.json();
        })
        .then(Data => {
          setData(Data);
        })
        .catch(err => {
          console.log('Error:', err?.message);
        });
    } else {
      setData(null);
    }
  }, [focussed]);
  return (
    <View style={{flex: 1}}>
      {data === null ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 24}}>...Loading</Text>
        </View>
      ) : (
        <Animated.FlatList
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{marginTop: 15}}
          data={data}
          renderItem={({item, index}) => {
            const scaleInputRange = [-1, 0,105*index,105*(index+2)];
            const scaleOutputRange = [1, 1,1,0];
            const opacityInputRange=[-1,0,105*index,105*(index+2)];
            const opacityOutputRange=[1,1,1,0];
            return (
              <Animated.View
                style={{
                  padding: 25,
                  marginHorizontal: 15,
                  marginBottom: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderWidth: StyleSheet.hairlineWidth,
                  borderColor: '#aeaeae',
                  shadowColor: '#c5c4c4',
                  elevation: 3,
                  opacity:scrollY.interpolate({
                    inputRange:opacityInputRange,
                    outputRange:opacityOutputRange
                  }),
                  transform: [
                    {
                      scale: scrollY.interpolate({
                        inputRange: scaleInputRange,
                        outputRange: scaleOutputRange,
                      }),
                      
                    },
                  ],
                }}>
                <View>
                  <Text>{item?.name}</Text>
                  <Text>{item?.address?.city}</Text>
                </View>
                <Text>{item?.address?.suite}</Text>
              </Animated.View>
            );
          }}
        />
      )}
    </View>
  );
};

export default List;
