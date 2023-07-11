import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './app/screens/HomeScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import MyTabs from './app/index'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const Stack = createNativeStackNavigator()

const AppNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName='Profile'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App