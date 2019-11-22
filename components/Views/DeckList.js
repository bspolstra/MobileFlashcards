import React, { Component } from "react";
import { View, Animated } from "react-native";
import { Wrapper, Card } from "../../assets/StyledComponents";
import styled from "styled-components";

const DeckName = styled.Text`
  font-size: 24;
  padding-top: 25px;
`;
const WrapperDeckList = styled(Wrapper)`
  padding-top: 25px;
`;
const CardCount = styled.Text`
  font-size: 16;
  color: darkgray;
  padding-top: 10px;
  padding-bottom: 25px;
`;

class DeckList extends Component {
  state = {
    scaleCard: new Animated.Value(1)
  };
  navigateTo = id => {
    this.props.navigation.navigate("Deck", {
      id
    });
  };

  render() {
    const { decks } = this.props.navigation.getScreenProps();
    const { scaleCard } = this.state;

    if (decks === null) {
      return <View></View>;
    }

    return (
      <WrapperDeckList>
        {Object.keys(decks).map(key => {
          return (
            <Card
              key={key}
              onPress={() => {
                console.log("Pressed!");

                this.navigateTo(key);
              }}
            >
              <DeckName>{decks[key].title}</DeckName>
              <CardCount>
                {decks[key].questions.length > 1
                  ? decks[key].questions.length + " cards"
                  : decks[key].questions.length + " card"}
              </CardCount>
            </Card>
          );
        })}
      </WrapperDeckList>
    );
  }
}

export default DeckList;
