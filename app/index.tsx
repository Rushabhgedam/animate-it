import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomTabBar from './components/CustomTabBar';
import { Text } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './components/CustomDrawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }} tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Music" component={SettingsScreen} />
      <Tab.Screen name="Search" component={SettingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="User" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerType: "slide"
      }}>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="music" component={HomeScreen} />
      <Drawer.Screen name="tabs" component={MyTabs} />
    </Drawer.Navigator>)
}

export default MyDrawer;