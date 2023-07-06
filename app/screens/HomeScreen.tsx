import { Button, StyleSheet, Image, View, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { TextInput } from 'react-native-paper';
import { couples, raindrop } from '../assets/assets';
import { Flash } from '../native-modules';



const HomeScreen = (props: any) => {
    

    const offset = useSharedValue(0);

    const disabledRaindrop = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: '12deg' }],
            display: offset.value > 0 ? "flex" : "none",
        };
    });
    const enabledRaindrop = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: offset.value * 20 }, { rotate: '12deg' }],
            display: offset.value > 0 ? "none" : "flex"
        };
    });



    const defaultSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(offset.value * 255) }, { rotate: '10deg' }],
            backgroundColor: `rgba(125,181,237,${offset.value > 0 ? 1 : 0})`,
        };
    });

    useEffect(() => {
        setInterval(() => {
            offset.value = withSpring(offset.value === 0 ? 1.7 : 0)
        }, 200)
        const successCallBack = () => {
            console.log("success")
        }
        const failureCallBack = () => {
            console.log("Failure")
        }
        const allConstants = Flash.hasFlash(successCallBack, failureCallBack);
       console.log("================================",allConstants, Flash)
    }, [])



    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden/>
            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((_, index) => <>
                <View style={{ flexDirection: "row" }}>
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 0, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 40, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 50, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 50, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 60, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 70, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 75, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 80, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 85, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 90, height: 30 - _ }, disabledRaindrop]} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 0, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 40, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 50, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 50, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 60, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 70, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 75, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 80, height: 30 - _ }, enabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 85, height: 30 - _ }, disabledRaindrop]} />
                    <Animated.Image source={raindrop} style={[styles.commonBox, { marginLeft: 90, height: 30 - _ }, enabledRaindrop]} />
                </View>
            </>)}
            <Image style={{ position: "absolute", height: '80%', width: '80%', resizeMode: "contain", bottom: -50, left: 80 }} source={couples} /> */}
        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    commonBox: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 90,
        borderBottomStartRadius: 90,
        resizeMode: "contain"
    },
    commonBox1: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 90,
        borderBottomStartRadius: 90,
        resizeMode: "contain"
    },
    blueBox: {
        width: 30,
        height: 30,
        // borderWidth:1,
        // backgroundColor: 'rgba(0,0,0,1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greenBox: {
        width: 30,
        height: 30,
        // borderWidth:1,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orangeBox: {
        width: 30,
        height: 30,
        // borderWidth:1,
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    redBox: {
        width: 30,
        height: 30,
        // borderWidth:1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    violetBox: {
        width: 30,
        height: 30,
        // borderWidth:1,
        // backgroundColor: 'violet',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pinkBox: {
        width: 30,
        height: 30,
        // borderWidth:1,
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    indigoBox: {
        width: 30,
        height: 30,
        // borderWidth:1,
        // backgroundColor: 'indigo',
        alignItems: 'center',
        justifyContent: 'center',
    },
})