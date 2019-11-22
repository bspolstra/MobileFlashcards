import React, { Component } from "react";
import { Alert, View, Keyboard, KeyboardAvoidingView } from "react-native";
import { addDeck } from "../../util/api";
import {
  Wrapper,
  Input,
  HeaderText,
  SubmitText
} from "../../assets/StyledComponents";
import styled from "styled-components";
import { Header } from "react-navigation-stack";
import AwesomeButton from "react-native-really-awesome-button";

const WrapperForm = styled(Wrapper).attrs(() => {
  return {
    justifyContent: "center"
  };
})``;

const DeckNameInput = styled(Input)`
  margin-bottom: 25px;
`;

class NewDeck extends Component {
  state = {
    deckTitle: "",
    value: ""
  };

  createDeck = () => {
    const { deckTitle } = this.state;
    const { navigate } = this.props.navigation;

    if (deckTitle !== "") {
      addDeck(deckTitle);
      Keyboard.dismiss();

      Alert.alert(deckTitle + " deck is created!", "", [
        {
          text: "OK",
          onPress: () => {
            navigate("Deck", { id: deckTitle });
            this.setState({ deckTitle: "" });
          }
        }
      ]);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Header.HEIGHT + 20}
        style={{ flex: 1 }}
      >
        <WrapperForm>
          <HeaderText>Name of New Deck</HeaderText>
          <DeckNameInput
            onChangeText={text =>
              this.setState({
                deckTitle: text
              })
            }
            value={this.state.deckTitle}
            placeholder="Deck Title"
          />

          <View style={{ alignItems: "center" }}>
            <AwesomeButton onPress={this.createDeck}>
              <SubmitText>Create Deck</SubmitText>
            </AwesomeButton>
          </View>
        </WrapperForm>
      </KeyboardAvoidingView>
    );
  }
}

export default NewDeck;
