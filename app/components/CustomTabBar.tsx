
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Fragment } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { IconButton } from 'react-native-paper'
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

const CustomTabBar = (props: BottomTabBarProps) => {
  const rotation = useSharedValue(0);
  const width = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });
  const animatedBorderStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });


  const handleNavigations = (routeName: string) => {
    rotation.value = withRepeat(withTiming(20), 2, true)
    width.value = withRepeat(withTiming(30), 2, true)
    props.navigation.navigate(routeName)
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 20 }}>
      {props.state.routeNames.map((name: string, index: number) => {
        return (
          <Fragment key={index}>
            <TouchableOpacity key={index.toString()} onPress={() => handleNavigations(name)} style={{ flexDirection: "column", alignItems: "center" }}>
              <Animated.View style={[{}, props.state.index === index && animatedStyle]} >
                <Feather style={{ color: props.state.index === index ? "black" : "grey", fontSize: 30 }} name={name.toLowerCase()} />
              </Animated.View>
              <Text>{name}</Text>
              <Animated.View style={[{ height: 2, backgroundColor: "black", },  props.state.index === index && animatedBorderStyle]} />
            </TouchableOpacity>
          </Fragment>
        )
      })}
    </View>
  )
}

export default CustomTabBar

const styles = StyleSheet.create({})