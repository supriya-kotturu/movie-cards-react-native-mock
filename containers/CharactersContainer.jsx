import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { tailwind } from "../tailwind";
import Characters from "../components/Characters";

function CharactersContainer() {
  return (
    <View style={tailwind("p-2 m-4 flex flex-row flex-wrap justify-center")}>
      <Characters />
      <Characters />
      <Characters />
      <Characters />
      <Characters />
      <Characters />
    </View>
  );
}

export default CharactersContainer;
