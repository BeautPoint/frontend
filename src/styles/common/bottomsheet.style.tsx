import {Animated} from 'react-native';
import styled from 'styled-components/native';

interface PropsType {
  shopInfoLayOut: {height?: number; padding?: boolean};
  animatedView: {bottom: string};
}

const ShopInfoLayOut = styled.ScrollView<PropsType['shopInfoLayOut']>`
  width: 100%;
  height: ${({height}) => height || 180}px;
  /* height: 300px; */
  border-radius: 20px;
  background: #ffffff;
  z-index: 4;
  padding: ${({padding}) => (!padding ? '0px' : '0px 20px')};
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  /* padding-bottom: 40px; */
  background: #f4f5f6;
`;

const HandleSection = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DragHandle = styled.View`
  width: 36px;
  height: 6px;
  background: #e9eaec;
  border-radius: 30px;
`;

const AnimatedView = styled(Animated.View)<PropsType['animatedView']>`
  position: absolute;
  /* bottom: ${({bottom}) => (bottom ? 0 : '-72%')}; */
  /* bottom: ${({bottom}) => (bottom ? '-79%' : '-76%')}; */
  /* bottom: -565px; */
  bottom: ${({bottom}) => bottom};
  left: 0;
  right: 0;
  height: 105%;
  background: #ffffff;
  z-index: 2;
`;

export {ShopInfoLayOut, HandleSection, ScrollView, DragHandle, AnimatedView};
