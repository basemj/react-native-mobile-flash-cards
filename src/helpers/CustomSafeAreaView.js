import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { View, Platform } from "react-native";

const CustomSafeAreaView = (props) => {
  const safeAreaInsets = useSafeArea();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : safeAreaInsets.top,
        paddingBottom: Platform.OS === "ios" ? 0 : safeAreaInsets.bottom,
        paddingLeft: Platform.OS === "ios" ? 0 : safeAreaInsets.left,
        paddingRight: Platform.OS === "ios" ? 0 : safeAreaInsets.right,
      }}
    >
      {props.children}
    </View>
  );
};

export default CustomSafeAreaView;
