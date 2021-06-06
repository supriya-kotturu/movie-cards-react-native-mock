import React from "react";
import { View, ScrollView } from "react-native";

import { tailwind } from "../tailwind";
import Characters from "../components/Characters";

function CharactersContainer() {
  return (
    <ScrollView>
      <View style={tailwind("p-2 m-4 flex flex-row flex-wrap justify-center")}>
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
        <Characters />
      </View>
    </ScrollView>
  );
}

export default CharactersContainer;
