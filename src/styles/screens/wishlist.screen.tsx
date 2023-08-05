import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
const WishListLayOut = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background: gray;
`;

const TitleText = styled.Text`
  font-size: 18px;
`;

export {WishListLayOut, TitleText};
