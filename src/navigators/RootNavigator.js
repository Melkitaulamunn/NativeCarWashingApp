import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import MapScreen from '../screens/MapScreen'

const RootNavigator = () => {

const[user,setUser]=useState(true)

const RootStack=createNativeStackNavigator()

  return (
<RootStack.Navigator>
    {user==true ?( <RootStack.Screen name='MapScreen' component={MapScreen}/>):<RootStack.Screen name='SignIn' component={Login}/>}
   
</RootStack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})