import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './app/screens/HomeScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import MyTabs from './app/index'


const Stack = createNativeStackNavigator()

const AppNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Profile'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  )
}

export default App