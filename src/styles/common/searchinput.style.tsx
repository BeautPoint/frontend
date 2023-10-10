import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';

interface PropsType {
  input: {placeholderColor?: string; background?: string};
  boxshadow: {color?: string};
}

const InputLayout = styled.View`
  width: 100%;
  /* display: flex; */
  /* align-items: center; */
`;

const InputIcon = styled.View`
  position: absolute;
  bottom: 15px;
  left: 12px;
  z-index: 3;
`;

const BoxShadow = styled(Shadow).attrs({
  startColor: 'rgba(113, 121, 132, 0.20)',
  offset: [2, 4],
})`
  border-radius: 10px;
`;

const SearchButton = styled.Pressable`
  width: 100%;
  height: 48px;
  z-index: 2;
  height: 48px;
  border-radius: 12px;
  background: #f4f5f6;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 15px;
`;

const Input = styled.TextInput.attrs<PropsType['input']>(
  ({placeholderColor}) => ({
    placeholderTextColor: placeholderColor || '#a09d9d',
  }),
)`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background: ${({background}) => background || '#ffffff'};
  /* box-shadow: 1px 21px 12px #a09d9d; */
  padding-left: 40px;
`;

const IconBox = styled.View`
  margin-right: 10px;
`;

export {InputLayout, InputIcon, BoxShadow, SearchButton, IconBox};
