import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/native-stack'

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    function BottomTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home"></Tab.Screen>
            </Tab.Navigator>
        )
    }
  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})