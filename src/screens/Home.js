import { Text, View } from 'react-native'
import React from 'react';
import MyComponent from '../components/ui/theme/MyCompanent';
import { styled } from "nativewind";



const Home = () => {
  const StyledView = styled(View)
  const StyledTest=styled(Text)
  return (
    <StyledView>
      <MyComponent />
      <Text className={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Home Screen</Text>
    </StyledView>
  )
}

export default Home

