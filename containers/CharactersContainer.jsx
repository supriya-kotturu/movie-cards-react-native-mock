import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { tailwind } from "../tailwind";
import Characters from "../components/Characters";

function CharactersContainer() {
  return (
    <View style={tailwind("p-3")}>
      <Characters />
    </View>
  );
}

export default CharactersContainer;
