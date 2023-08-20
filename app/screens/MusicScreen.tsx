import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue, useWorkletCallback, withDecay, withSpring, withTiming } from 'react-native-reanimated';

import Feather from 'react-native-vector-icons/Feather';
import CartButton from '../components/CartButton';
import { home_icon } from '../assets/assets';
import FadingInHOC from '../components/FadingInHOC';


const defaultProps = {
    cartTextTimeOut: 400,
    cartValueTimeIn: 400,
    width: 100,
}
const MusicScreen = (props: any) => {
    const [cartCount, setCartCount] = useState<number>(0)
    useEffect(() =>{
        console.log('setCartCount', cartCount)
    },[cartCount])
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
            <Image source={home_icon} />
        </View>
    )
}




export default FadingInHOC(MusicScreen, 800)
