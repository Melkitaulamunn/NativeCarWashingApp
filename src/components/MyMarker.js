import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Marker} from 'react-native-maps';

const MyMarker = ({locationInfo, onPress = () => {}}) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: locationInfo.coordinate.latitude,
        longitude: locationInfo.coordinate.longitude,
      }}
      title={locationInfo.title}
      description={`Truck Model : ${locationInfo.description.truckModel} \n Truck Situation : ${locationInfo.description.truckSituation} `}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: locationInfo.truckimage}} />
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {},

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode:'contain'
  },
});

export default MyMarker;
