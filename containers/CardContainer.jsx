import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

import { tailwind } from "../tailwind";

import Card from "../components/Card";
const CardContainer = (props) => {
  console.log("here", props);
  return (
    <ScrollView>
      <View style={tailwind("flex flex-row flex-wrap justify-center")}>
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
      </View>
    </ScrollView>
  );
};

export default CardContainer;
