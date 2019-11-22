import React, { Component } from "react";
import {
  HeaderText,
  SubmitText,
  Card,
  Wrapper
} from "../../assets/StyledComponents";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { getCards } from "../../util/api";
import styled from "styled-components";
import AwesomeButton from "react-native-really-awesome-button";
import {
  clearLocalNotification,
  setLocalNotifications
} from "../../util/helpers";

const WrapperQuiz = styled(Wrapper).attrs(() => {
  return {
    justifyContent: "center"
  };
})``;

const GroupButton = styled.View.attrs(() => {
  return {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  };
})`
  margin-bottom: 25;
`;

const Flashcard = styled(Card)`
  margin-bottom: 25px;
  padding: 25px 15px 25px 15px;
`;

class Quiz extends Component {
  state = {
    toggle: "question",
    cards: [],
    cardIndex: 0,
    numCorrect: 0
  };

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    getCards(id).then(cards => {
      this.setState({ cards });
    });

    clearLocalNotification().then(setLocalNotifications);
  }

  toggle = () => {
    if (this.state.toggle === "question") {
      this.setState({ toggle: "answer" });
    } else {
      this.setState({ toggle: "question" });
    }
  };

  nextCard = () => {
    this.setState(prevState => {
      return { cardIndex: prevState.cardIndex + 1 };
    });
  };

  incrementCorrectThenNext = () => {
    this.setState(prevState => {
      return {
        cardIndex: prevState.cardIndex + 1,
        numCorrect: prevState.numCorrect + 1
      };
    });
  };

  resetQuiz = () => {
    this.setState({ cardIndex: 0, numCorrect: 0 });
  };

  AnswerCard = answerText => {
    return (
      <Flashcard>
        <HeaderText>{answerText}</HeaderText>
        <TouchableOpacity onPress={this.toggle}>
          <Text>Question</Text>
        </TouchableOpacity>
      </Flashcard>
    );
  };

  QuestionCard = questionText => {
    return (
      <Flashcard>
        <HeaderText>{questionText}</HeaderText>
        <TouchableOpacity onPress={this.toggle}>
          <Text>Answer</Text>
        </TouchableOpacity>
      </Flashcard>
    );
  };

  StatBoard = numCorrect => {
    const { goBack, state } = this.props.navigation;
    const { id } = state.params;
    return (
      <WrapperQuiz>
        <HeaderText>Total correct answers: {numCorrect}</HeaderText>
        <View style={{ alignItems: "center" }}>
          <AwesomeButton style={{ marginBottom: 25 }} onPress={this.resetQuiz}>
            <SubmitText>Restart quiz</SubmitText>
          </AwesomeButton>
          <AwesomeButton
            onPress={() => {
              goBack();
            }}
          >
            <SubmitText>Back to {id} deck</SubmitText>
          </AwesomeButton>
        </View>
      </WrapperQuiz>
    );
  };

  render() {
    const { cards, numCorrect, cardIndex, toggle } = this.state;

    if (cards.length === 0) {
      return <View></View>;
    }

    if (cardIndex < cards.length) {
      const card = cards[cardIndex];
      return (
        <WrapperQuiz>
          {toggle === "question"
            ? this.QuestionCard(card.question)
            : this.AnswerCard(card.answer)}
          <GroupButton>
            <AwesomeButton onPress={this.incrementCorrectThenNext}>
              <SubmitText>Correct</SubmitText>
            </AwesomeButton>
            <AwesomeButton onPress={this.nextCard}>
              <SubmitText>Incorrect</SubmitText>
            </AwesomeButton>
          </GroupButton>
          <HeaderText>
            {cardIndex + 1} of {cards.length} cards
          </HeaderText>
        </WrapperQuiz>
      );
    } else {
      return this.StatBoard(numCorrect);
    }
  }
}

export default Quiz;
