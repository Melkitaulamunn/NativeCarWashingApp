import {StyleSheet} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import screenValue from '../utils/ScreenSize';
import { styled } from "nativewind";


const MyMapView = ({children}) => {
const StyledView = styled(View)
  return (
    <styledView className="width:100 height:Dimensions.get(dim:'screen').height">
    <MapView
      style={styles.mapview}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 41.0805079,
        longitude: 28.8749859,
        latitudeDelta: 1,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation>
      {children}
    </MapView>
  </styledView>
  );
};

const styles = StyleSheet.create({
  mapview: {
    height: screenValue.height,
    width: screenValue.width,
  },
});
export default MyMapView;
