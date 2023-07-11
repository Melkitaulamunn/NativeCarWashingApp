import React from 'react';
import Lottie from 'lottie-react-native';

export default function Loading() {
  return (
    <Lottie
      source={require('../../assets/animations/loading.json')}
      autoPlay
      loop
    />
  );
}