import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';
import DropShadow from 'react-native-drop-shadow';

interface PropType {
  dropDown: {width?: string; height?: string | number};
  selectBox: {width?: string; height?: string | number};
}

const DropDownLayOut = styled.View<PropType['dropDown']>`
  width: 100%;
  height: 100%;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
`;

const Text = styled.Text``;

const SelectBox = styled.View<PropType['selectBox']>`
  width: ${({width}) => width || '80px'};
  height: ${({height}) => height || '100px'};
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 1;
`;
const SelectList = styled.View``;
const BoxShadow = styled(Shadow).attrs({
  startColor: '#aaa8a8',
  distance: 3,
  offset: [0, 2],
})<PropType['selectBox']>`
  width: 76px;
  height: ${({height}) => height || '100px'};
  border-radius: 5px;
`;
// const BoxShadow = styled.View``;

export {DropDownLayOut, SelectBox, SelectList, Text, BoxShadow};
