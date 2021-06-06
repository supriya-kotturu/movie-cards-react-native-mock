import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

import { tailwind } from "../tailwind";

const Characters = () => {
  return (
    <View style={styles.characterCard}>
      <View
        style={tailwind(
          "bg-white rounded-2xl md:w-1/2 m-4 p-2 m-1 flex flex-row flex-wrap justify-center items-center"
        )}
      >
        <View>
          <Image
            source={require("../assets/img/64.jpg")}
            style={tailwind("h-32 w-32 rounded-full mx-auto m-2")}
          />
        </View>
        <View>
          <View style={tailwind("p-1 pl-2")}>
            <Text style={tailwind("font-bold text-lg text-purple text-left")}>
              Princess Leia
            </Text>
            <Text style={tailwind("text-purple text-left")}>Carrie Fisher</Text>
          </View>
          <Text style={tailwind("w-64 p-2")}>
            Instead of being dismissed as another “damsel in distress,” Leia is
            a fighter, more than capable of taking care of herself, which she
            amply demonstrates by strangling Jabba the Hutt to death in Return
            of the Jedi.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterCard: {
    shadowColor: "rgba(157, 78, 221, 1)",
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
    margin: 20,
  },
});

export default Characters;
