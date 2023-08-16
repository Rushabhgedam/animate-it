import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { home_icon } from '../assets/assets';
import FadingInHOC from '../components/FadingInHOC';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';


const SplashScreen = ({navigation}:any) => {
    const [cartCount, setCartCount] = useState<number>(0)

    useEffect(() =>{
        setTimeout(() => {
            navigation.replace("tabs")
        }, 1900);
    },[cartCount])

    return (
        <View style={{ justifyContent:"center", height:responsiveHeight(100), alignItems:"center"}}>
            <LinearGradient
            style={{
                height: responsiveHeight(200),
                width: responsiveWidth(200),
                transform:[{
                    rotateZ: '-30deg'
                }]
            }} colors={["#1D103A", "#351676"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}>
            </LinearGradient>
            <Text style={{fontSize:responsiveFontSize(4), color:"white", position:"absolute"}}>Welcome back</Text>
        </View>
    )
}




export default FadingInHOC(SplashScreen,1400, 0.7)
