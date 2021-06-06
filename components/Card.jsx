import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { tailwind } from "../tailwind";

const Card = (props) => {
  console.log("here me : ", props);

  return (
    <View style={tailwind("m-4 p-2 w-64 rounded-xl relative")}>
      <LinearGradient
        start={{ x: 0.0, y: 0.35 }}
        end={{ x: 0.2, y: 0.8 }}
        locations={[0, 0.2, 0.3, 0.8, 0.9]}
        colors={[
          "#9d4eddff",
          "#5a189aff",
          "#3c096cff",
          "#240046ff",
          "#240046ff",
        ]}
        style={tailwind("rounded-xl")}
      >
        <View style={styles.card}>
          {/* <Image style={} source = {{uri : ''}}/>  */}
          <Text style={styles.movieText}>StarWars : Ep 1</Text>
          <View style={tailwind("my-8")}>
            <Text style={styles.date}>Release Date 12-Apr-2010</Text>
            <Text style={styles.director}>Director</Text>
          </View>
          <TouchableOpacity>
            <Button
              title="Know More"
              color="#ff8500ff"
              style={styles.button}
              onPress={() =>
                props.navigation.navigate({ routeName: "Characters" })
              }
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    paddingBottom: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(10, 10, 10, 1)",
    borderRadius: 12,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 8,
  },
  movieText: {
    color: "rgba(243, 244, 246,1)",
    fontWeight: "700",
    fontSize: 42,
    marginBottom: 16,
  },
  date: { color: "rgba(243, 244, 246,1)", fontWeight: "600" },
  director: { color: "rgba(243, 244, 246,1)", fontWeight: "600" },
  button: {
    fontFamily: "Roboto",
    position: "absolute",
  },
  easeGradient: {
    borderRadius: 10,
    flex: 1,
  },
});

export default Card;
