import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CardsContainer from "../containers/CardContainer";
import CharactersContainer from "../containers/CharactersContainer";

const PageNavigator = createStackNavigator({
  Movies: {
    screen: CardsContainer,
  },
  Characters: CharactersContainer,
});

export default createAppContainer(PageNavigator);
