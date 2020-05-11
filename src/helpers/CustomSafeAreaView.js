import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";

const CustomSafeAreaView = (props) => {
  const safeAreaInsets = useSafeArea();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: safeAreaInsets.top,
        paddingBottom: safeAreaInsets.bottom,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
      }}
    >
      {props.children}
    </View>
  );
};

export default CustomSafeAreaView;
