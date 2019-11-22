import React, { Component } from "react";
import { Alert, View, KeyboardAvoidingView } from "react-native";
import { Header } from "react-navigation-stack";
import { addQuestion } from "../../util/api";
import { HeaderBackButton } from "react-navigation-stack";
import {
  Input,
  Wrapper,
  HeaderText,
  SubmitText
} from "../../assets/StyledComponents";
import styled from "styled-components";
import AwesomeButton from "react-native-really-awesome-button";

const FormView = styled.View`
  margin-bottom: 25px;
  flex: 1;
`;
const WrapperForm = styled(Wrapper).attrs(() => {
  return {
    justifyContent: "center"
  };
})``;

class NewQuestion extends Component {
  state = {
    question: "",
    answer: ""
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.state.params.onAdd();
            navigation.goBack();
          }}
        />
      )
    };
  };

  submitCard = () => {
    const { question, answer } = this.state;
    const { id } = this.props.navigation.state.params;

    if (question !== "" && answer !== "") {
      addQuestion(id, {
        question,
        answer
      });

      Alert.alert(`New card has been added to ${id} deck!`, "", [
        {
          text: "OK",
          onPress: () => {
            this.setState({ question: "", answer: "" });
          }
        }
      ]);
    }
  };

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Header.HEIGHT + 20}
        style={{ flex: 1 }}
      >
        <WrapperForm>
          <HeaderText>Create New Question</HeaderText>
          <FormView>
            <Input
              placeholder="Question"
              value={question}
              onChangeText={question => {
                this.setState({ question });
              }}
            />
            <Input
              placeholder="Answer"
              value={answer}
              onChangeText={answer => {
                this.setState({ answer });
              }}
            />
          </FormView>
          <View style={{ alignItems: "center" }}>
            <AwesomeButton onPress={this.submitCard}>
              <SubmitText>Create Question</SubmitText>
            </AwesomeButton>
          </View>
        </WrapperForm>
      </KeyboardAvoidingView>
    );
  }
}

export default NewQuestion;
