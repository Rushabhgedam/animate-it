import React, { useEffect, useRef } from 'react';
import { View, Animated, Button, Dimensions } from 'react-native';

const DecayAnimationExample = () => {
  const decayValue = useRef(new Animated.Value(0)).current;
  const springValue = useRef(new Animated.Value(1)).current;

  const startDecayAnimation = () => {
    Animated.decay(decayValue, {
      velocity: 1,
      deceleration: 1,
      useNativeDriver: true
    }).start();
  };

  const startSpringAnimation = () => {
    Animated.timing(springValue, {
      toValue: 0,
      // friction: 1,
      // tension: 1,
      useNativeDriver: true
    }).start((finished) => {
      // springValue.setValue(1)
    });
  };

  useEffect(() => {
    console.log("spring", springValue);
  }, [springValue])

  return (
    <View>
      <Animated.View
        style={{
          opacity: 1,
          transform: [{ translateY: springValue }, { scale: springValue }],
          height: Dimensions.get("window").width,
          width: Dimensions.get("window").width,
          borderWidth: 1,
          backgroundColor: `rgba(0,0,0,${springValue})`,
          justifyContent: "center",
        }}
      >
        <View style={{backgroundColor:"red", width:100, height:100}}></View>
      </Animated.View>
      <Button onPress={startSpringAnimation} title="Start Decay Animation" />
    </View>
  );
};

export default DecayAnimationExample;
