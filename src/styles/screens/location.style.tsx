import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';

const LocationLayOut = styled.View`
  width: 100%;
  height: 100%;
`;

const SearchInputBox = styled.View`
  width: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  top: 10px;
`;

const MyLocation = styled.Pressable`
  position: absolute;
  z-index: 1;
  right: 25px;
  top: 70px;
  width: 36px;
  height: 36px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxShadow = styled(Shadow).attrs({
  startColor: 'rgba(113, 121, 132, 0.20)',
  offset: [2, 4],
})`
  border-radius: 10px;
`;

const IconBox = styled.View`
  margin-right: 10px;
`;

const SearchButton = styled.Pressable`
  width: 320px;
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

export {
  LocationLayOut,
  SearchButton,
  SearchInputBox,
  BoxShadow,
  IconBox,
  MyLocation,
};
