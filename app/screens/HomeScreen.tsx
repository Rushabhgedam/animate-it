import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated, { SharedValue, runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue, useWorkletCallback, withDecay, withSpring, withTiming } from 'react-native-reanimated';

import Feather from 'react-native-vector-icons/Feather';
import CartButton from '../components/CartButton';
import { home_icon, main_img, ribbon, second_image } from '../assets/assets';
import FadingInHOC from '../components/FadingInHOC';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const defaultProps = {
    cartTextTimeOut: 400,
    cartValueTimeIn: 400,
    width: 100,
}
const HomeScreen = (props: any) => {
    const verticalFadeArr: SharedValue<number>[] = [useSharedValue(0),useSharedValue(0),useSharedValue(0), ]
    const verticalFade = useSharedValue(0)

    const verticalFadeStyle1 = useAnimatedStyle(()=> {
        return{ opacity: verticalFadeArr[0].value}
     })

     const verticalFadeStyle2 = useAnimatedStyle(()=> {
        return{ opacity: verticalFadeArr[1].value}
     })

     const verticalFadeStyle3 = useAnimatedStyle(()=> {
        return{ opacity: verticalFadeArr[2].value}
     })
   
    React.useEffect(()=>{
        setTimeout(() => {
            verticalFadeArr[0].value = withTiming(1,{duration: 1000},()=>{
                verticalFadeArr[1].value = withTiming(1,{duration: 1000},()=>{
                    verticalFadeArr[2].value = withTiming(1,{duration: 1000})
                })
            })
        }, 1000);
    },[])

    return (
        <View style={{ justifyContent: "center", alignItems: "center", }}>
            <LinearGradient
                style={{
                    height: responsiveHeight(100),
                    width: responsiveWidth(100),
                }} colors={["#1D103A", "#351676"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}>
                <Animated.Image style={[{
                    width: responsiveWidth(90),
                    alignSelf: "center",
                    marginBottom: responsiveHeight(3),
                    resizeMode: "contain",
                    marginTop: responsiveHeight(5)
                }, verticalFadeStyle1]} source={ribbon} />
                <Animated.Image style={[{
                    width: responsiveWidth(90),
                    alignSelf: "center",
                    height: responsiveHeight(25),
                    // marginTop: responsiveHeight(5),
                    resizeMode: "contain",
                }, verticalFadeStyle2]} source={main_img} />
                <Animated.Image style={[{
                    width: responsiveWidth(90),
                    alignSelf: "center",
                    height: responsiveHeight(50),
                    resizeMode: "contain",
                }, verticalFadeStyle3]} source={second_image} />
            </LinearGradient>
        </View>
    )
}

export default FadingInHOC(HomeScreen, 1000, 0.7)
