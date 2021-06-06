import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { tailwind } from "../tailwind";

const Characters = () => {
  return (
    <View style={styles.characterCard}>
      <View
        style={tailwind(
          "bg-white rounded-2xl sm:w-full md:w-1/2 m-4 p-2 m-1 flex flex-wrap flex-row justify-center items-center"
        )}
      >
        <View>
          <Image
            source={require("../assets/img/64.jpg")}
            style={tailwind(
              "h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto m-2"
            )}
          />
          <View style={tailwind("p-1 pl-2")}>
            <Text style={tailwind("font-bold text-lg text-purple text-center")}>
              Princess Leia
            </Text>
            <Text style={tailwind("text-purple text-center")}>
              Carrie Fisher
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={tailwind(
              "h-24 w-52 break-words overflow-hidden px-2 pb-2 mb-4"
            )}
          >
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
