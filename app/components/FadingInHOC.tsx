import { StatusBar, Text } from 'react-native'
import React from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const FadingInHOC = (OriginalComponent: any, duration = 1400, fromValue=0) => {
  function NewComponent() {
    const navigation = useNavigation();
    const fadingIn = useSharedValue(fromValue)
    const fadingInStyle = useAnimatedStyle(() => ({
      opacity: fadingIn.value,
    }))
    const fadeInDescription = () => {
      fadingIn.value = withTiming(1, {
        duration: duration
      })
    }

    React.useEffect(() => {
      fadeInDescription()
    }, [])

    return (
      <Animated.View style={[fadingInStyle,{flex:1, marginTop: StatusBar.currentHeight}]}>
        <OriginalComponent navigation={navigation}  />
      </Animated.View>
    )
  }
  return NewComponent
}

export default FadingInHOC