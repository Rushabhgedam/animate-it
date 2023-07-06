import { View, Text } from 'react-native'
import React from 'react'
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
interface Props 
    {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
}
const CustomDrawer = (props: Props) => {
  return (
    <View>
      <Text>CustomDrawer</Text>
    </View>
  )
}

export default CustomDrawer