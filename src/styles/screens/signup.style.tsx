import styled from 'styled-components/native';

interface PropsType {
  widthprop: {width?: number};
  nextbutton: {background: string};
}

const SignupLayOut = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  background: #ffffff;
`;

const DescriptionBox = styled.View``;
const Text = styled.Text`
  color: #ffffff;
`;

const NextButtonBox = styled.View<PropsType['widthprop']>`
  position: absolute;
  bottom: 50px;
  width: ${({width}) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.Pressable<PropsType['nextbutton']>`
  width: 90%;
  height: 48px;
  background: ${({background}) => background || '#c2d8ff'};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const MoveButtonBox = styled.View`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BackButton = styled.Pressable`
  width: 30px;
`;

const SkipButton = styled.Pressable``;

const ProgressBox = styled.View`
  margin-bottom: 20px;
  position: relative;
`;

const StepProgressBar = styled.View`
  border: 3px solid #d3d3d3;
  /* props 설정할것 */
`;

const ActiveStepBar = styled.View<PropsType['widthprop']>`
  position: absolute;
  border: 3px solid #8fb8ff;
  width: ${({width}) => (width === 1 ? 35 : width === 2 ? 60 : 100)}%;
`;

export {
  SignupLayOut,
  DescriptionBox,
  Text,
  NextButton,
  NextButtonBox,
  MoveButtonBox,
  SkipButton,
  BackButton,
  StepProgressBar,
  ActiveStepBar,
  ProgressBox,
};
