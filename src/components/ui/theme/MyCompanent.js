import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BottomSheet from "@gorhom/bottom-sheet"
import tailwindConfig from '../tailwind.config';


const MyComponent = () => {
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  return (
    <View>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        closeOnDragDown
        dragFromTopOnly
        animationType="slide"
        height={300}
        openDuration={250}
        closeDuration={250}
        closeOnPressBack
        closeOnPressMask
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <View className="flex justify-center items-center">
          <Text>This is the content of the bottom sheet</Text>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Text>Close Bottom Sheet</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default MyComponent;
