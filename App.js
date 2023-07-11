import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
 <SafeAreaView style={{flex:1}}>
     <NavigationContainer>
     <RootNavigator/>
    </NavigationContainer>
 </SafeAreaView>
  );
};

export default App;