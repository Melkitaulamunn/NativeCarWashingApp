import {StyleSheet, Text, View,Alert} from 'react-native';
import React from 'react';

import locations from '../utils/LocationList';
import MyMarker from '../components/MyMarker';
import MyMapView from '../components/MyMapView';


const MapScreen = () => {


  //console.log({data,loading,error})
  return (
    <View>
      <MyMapView
        children={locations.map((location, index) => {
          return(
            <MyMarker
            
       
            locationInfo={location} key={index} />
          );
        })}
      />
    </View>
  );
};

export default MapScreen;
