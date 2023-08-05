import styled from 'styled-components/native';

const SignupLayOut = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const DescriptionBox = styled.View``;
const Text = styled.Text`
  color: #ffffff;
`;
const NextButton = styled.Pressable`
  width: 100%;
  height: 48px;
  background: black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {SignupLayOut, DescriptionBox, Text, NextButton};
