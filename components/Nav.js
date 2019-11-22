import React, { Component } from "react";
import { View } from "react-native";
import DeckList from "./Views/DeckList";
import Deck from "./Views/Deck";
import Quiz from "./Views/Quiz";
import NewDeck from "./Views/NewDeck";
import NewQuestion from "./Views/NewQuestion";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { getAllDecks } from "../util/api";
import { Entypo } from "@expo/vector-icons";

const tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Decks",
      tabBarIcon: <Entypo name="list" size={30} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "New Deck",
      tabBarIcon: <Entypo name="add-to-list" size={30} />
    }
  }
});

const Stack = createStackNavigator({
  DeckList: {
    screen: tabs,
    navigationOptions: {
      title: "Mobile Flashcards"
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.id
    })
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.id
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.id
    })
  }
});

class AppNav extends Component {
  state = {
    decks: null
  };

  componentDidMount() {
    getAllDecks().then(decks => {
      this.setState({ decks });
    });
  }

  updateDeckList = () => {
    getAllDecks().then(decks => {
      this.setState({ decks });
    });
  };

  render() {
    const Nav = createAppContainer(Stack);
    const { decks } = this.state;
    if (decks) {
      return (
        <Nav
          screenProps={{
            decks,
            updateDeckList: this.updateDeckList
          }}
        />
      );
    } else {
      return <View></View>;
    }
  }
}

export default AppNav;
