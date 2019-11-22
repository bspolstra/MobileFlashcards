import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getDeckInfoByName } from "../../util/api";
import { HeaderBackButton } from "react-navigation-stack";
import { HeaderText, SubmitText, Wrapper } from "../../assets/StyledComponents";
import styled from "styled-components";
import AwesomeButton from "react-native-really-awesome-button";

const WrapperDeck = styled(Wrapper).attrs(() => {
  return {
    justifyContent: "center"
  };
})``;

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.getScreenProps().updateDeckList();
            navigation.navigate("DeckList");
          }}
        />
      )
    };
  };

  state = {
    numOfCards: 0,
    title: ""
  };

  updateDeckInfo = () => {
    const { id } = this.props.navigation.state.params;
    getDeckInfoByName(id).then(({ title, numOfCards }) => {
      this.setState({
        title,
        numOfCards
      });
    });
  };

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.updateDeckInfo(id);
  }

  navigateTo = (screenName, obj) => {
    this.props.navigation.navigate(screenName, obj);
  };

  render() {
    const { numOfCards, title } = this.state;
    return (
      <WrapperDeck>
        <View>
          <HeaderText>Number of cards: {numOfCards}</HeaderText>
        </View>
        <View style={{ alignItems: "center" }}>
          <AwesomeButton
            style={{ marginBottom: 25 }}
            onPress={() =>
              this.navigateTo("NewQuestion", {
                id: title,
                onAdd: this.updateDeckInfo
              })
            }
          >
            <SubmitText>Add Card</SubmitText>
          </AwesomeButton>
          <AwesomeButton onPress={() => this.navigateTo("Quiz", { id: title })}>
            <SubmitText>Start Quiz</SubmitText>
          </AwesomeButton>
        </View>
      </WrapperDeck>
    );
  }
}

export default Deck;
