import { useEffect, useState } from "react";
import {  StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";

const CartButton = (props: { cartTextTimeOut?: number, cartValueTimeIn?: number, style?: StyleProp<ViewStyle>, cartText?: string, textColor?: string, onChangeHandler:(count:number)=>void }) => {
    const { cartTextTimeOut, cartValueTimeIn, style, cartText, textColor, onChangeHandler } = props;
    const offset = useSharedValue(1);
    const moveLeftVal = useSharedValue(1);
    const moveRightVal = useSharedValue(1);
    const moveInVal = useSharedValue(0);
    const scrollDirection = useSharedValue(0);
    const downGradingOpacity = useSharedValue(1);

    const [cartCount, setCartCount] = useState<number>(0)
    const pressBtnStyle = useAnimatedStyle(() => {
        return {
            opacity: offset.value,
            display: offset.value === 0 ? 'none' : "flex",
            transform: [{
                scale: offset.value
            }]
        };
    })
    const afterPressStyle = useAnimatedStyle(() => {
        return {
            display: offset.value >= 0.1 ? 'none' : "flex",
            transform: [{ scale: offset.value ? withSpring(0) : withSpring(1) }]
        };
    }, [offset])
    const movingInStyle = useAnimatedStyle(() => {
        return {
            opacity: offset.value,
            transform: [{ translateX: 0 }]
        };
    }, [offset]);
    const movingLeftStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: moveLeftVal.value }]
        };
    }, [offset]);
    const movingRightStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: moveRightVal.value }]
        };
    }, [offset]);

    const moveUpDownStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -scrollDirection.value }],
            opacity: downGradingOpacity.value
        };
    }, []);

    const onBtnPressed = () => {
        handleCount(1)
        offset.value = withTiming(0, { duration: cartTextTimeOut ?? 400 }, () => {
            moveLeftVal.value = withTiming(-20, { duration: cartValueTimeIn ?? 400 })
            moveRightVal.value = withTiming(20, { duration: cartValueTimeIn ?? 400 })
            moveInVal.value = 1
        })
    }
    const handleCount = (value: number) => {
        if (value > 0) {
            scrollDirection.value = withTiming(40, { duration: cartValueTimeIn ?? 400 }, () => {
            offset.value = withTiming(0, { duration: cartTextTimeOut ?? 400 })
                downGradingOpacity.value = withTiming(1, { duration: cartValueTimeIn?cartValueTimeIn/2 ?? 400 : 200}, () => {
                    scrollDirection.value = 0
                    downGradingOpacity.value = 1
                    runOnJS(setCartCount)(cartCount +value)
                });
            })
        }
        else if (value < 0) {
            scrollDirection.value = withTiming(-40, { duration: cartValueTimeIn ?? 400 }, () => {
            offset.value = withTiming(0, { duration: cartTextTimeOut ?? 400 })
                downGradingOpacity.value = withTiming(1, { duration: cartValueTimeIn?cartValueTimeIn/2 ?? 400 : 200}, () => {
                    runOnJS(setCartCount)(cartCount +value)
                    scrollDirection.value = 0
                    downGradingOpacity.value = 1
                });
            })
        }
    }

    useEffect(() => {
        if (cartCount === 0) {
            offset.value = withTiming(1, { duration: cartTextTimeOut ?? 400 })
            moveLeftVal.value = withTiming(0, { duration: cartValueTimeIn ?? 400 })
            moveRightVal.value = withTiming(0, { duration: cartValueTimeIn ?? 400 })
            moveInVal.value = 0
        }
        onChangeHandler(cartCount)
    }, [cartCount])

    return (
        <View style={[{ width: 100, height: 40, backgroundColor: "green", justifyContent: "center", alignItems: "center", overflow:"hidden" }, style]}>
            <Animated.View style={[pressBtnStyle]}>
                <TouchableOpacity onPressIn={onBtnPressed}><Text style={{ color: textColor ?? "white", padding: 10 }}>{`Add to cart` ?? cartText}</Text></TouchableOpacity>
            </Animated.View>
            <Animated.View style={[afterPressStyle, { flexDirection: "row", justifyContent: "center", alignItems: "center" }]}>
                <Animated.View style={[movingLeftStyle]}>
                    <Feather color={textColor ?? "white"} onPress={() => handleCount(1)} name='plus' />
                </Animated.View>
                <Animated.View style={[movingInStyle, moveUpDownStyle]}>
                    <Text style={{ color: textColor ?? "white" }}>{cartCount}</Text>
                </Animated.View>
                <Animated.View style={[movingRightStyle]}>
                    <Feather color={textColor ?? "white"} onPress={() => handleCount(-1)} name='minus' />
                </Animated.View>
            </Animated.View>
        </View>
    )
}


export default CartButton