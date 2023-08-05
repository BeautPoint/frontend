import {Animated} from 'react-native';
import styled from 'styled-components/native';

interface PropsType {
  shopInfoLayOut: {height?: string};
  animatedView: {bottom: string};
}

const ShopInfoLayOut = styled.View<PropsType['shopInfoLayOut']>`
  width: 100%;
  height: ${({height}) => height || '180px'};
  border-radius: 20px;
  background: #ffffff;
  z-index: 4;
  padding: 0 20px;
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
  bottom: ${({bottom}) => bottom || '-72%'};
  left: 0;
  right: 0;
  height: 100%;
  background: #ffffff;
`;

export {ShopInfoLayOut, HandleSection, DragHandle, AnimatedView};
