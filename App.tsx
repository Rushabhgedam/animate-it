import { View, Text, UIManager, StatusBar } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './app/screens/HomeScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import MyTabs from './app/index'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SplashScreen from './app/screens/SplashScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const Stack = createNativeStackNavigator()

const AppNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="tabs" component={MyTabs} />
    </Stack.Navigator>
  )
}
// @ts-ignore
console.ignoredYellowBox = true
// @ts-ignore
console.disableYellowBox = true
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar hidden />
            <AppNavigations />
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App