import React from "react";

import { tailwind } from "../tailwind";
import { View, Text, Image, ImageBackground } from "react-native";

const Characters = () => {
  return (
    <View style={tailwind("bg-red-300")}>
      <Text>Characters</Text>
      <Image
        source={require("../assets/img/64.jpg")}
        style={{
          width: "25%",
          height: 64,
        }}
      />
    </View>
  );
};

export default Characters;
