import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Home from "../screens/Home";
import { AppScreens } from "../constants/appScreens";


const Stack = createNativeStackNavigator();


export const AuthNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={AppScreens.Login} component={Login} />
        <Stack.Screen name={AppScreens.Home} component={Home} />

      </Stack.Navigator>
    );
  };