import styled from "styled-components";

export const Card = styled.TouchableOpacity`
  border: 1px solid black;
  margin: 10px 25px 10px 25px;
  border-radius: 5px;
  background-color: white;
  flex-wrap: wrap;
  align-items: center;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: lightgray;
`;

export const Input = styled.TextInput`
  background-color: white;
  height: 50px;
  width: 80%;
  text-align: center;
  margin: auto;
`;

export const HeaderText = styled.Text`
  font-size: 16;
  text-align: center;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const SubmitText = styled.Text`
  padding: 0px 25px 0px 25px;
  margin: auto;
`;
