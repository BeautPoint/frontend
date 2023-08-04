import styled, {ThemeProvider} from 'styled-components/native';
import {StyleSheet} from 'react-native';

interface PropsType {
  text: {size?: string; weight?: string; color?: string};
}

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVerical: 8,
    lineHeight: 20,
  },
});

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  position: relative;
`;

/** font
 * neurimboGothicRegular
 * Pretendard
 *  **/

const AppText = styled.Text<PropsType['text']>`
  font-size: ${({size}) => size || '14px'};
  /* font-weight: ${({weight}) => weight || 'normal'}; */
  color: ${({color}) => color || 'black'};
  font-family: ${({weight}) =>
    weight ? 'Pretendard-' + weight : 'Pretendard-Regular'};
`;

export {Container, AppText};
