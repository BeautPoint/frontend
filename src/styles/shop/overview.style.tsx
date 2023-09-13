import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

interface PropsType {
  actionbtn: {width?: string};
  image: {width: number};
  dots: {background: string};
}

const OverViewLayOut = styled.View`
  width: 100%;
  background: #ffdbdb;
`;
const Slider = styled.View`
  width: 100%;
  height: 340px;
  /* border: 0.5px solid #979797; */
`;

const Image = styled.Image<PropsType['image']>`
  width: ${({width}) => `${width}px` || '0px'};
  height: 100%;
  display: flex;
`;

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const GradientImage = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const SlideDotsBox = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SlideDots = styled.View<PropsType['dots']>`
  width: 10px;
  height: 10px;
  background: ${({background}) => background || '#FFFFFF'};
  z-index: 6;
  border-radius: 8px;
  margin: 0 10px;
`;

const ShopInfoBox = styled.View`
  width: 100%;
  height: 300px;
  background: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const ViewCounter = styled.View`
  margin: 15px 0;
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonIcon = styled.View`
  position: absolute;
  left: 35px;
`;

const ActionButton = styled.Pressable<PropsType['actionbtn']>`
  width: ${({width}) => width || '48%'};
  height: 48px;
  background: #f0f6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard-Regular';
`;

export {
  OverViewLayOut,
  Slider,
  Image,
  ImageBackground,
  GradientImage,
  SlideDotsBox,
  SlideDots,
  ShopInfoBox,
  ViewCounter,
  ButtonBox,
  ButtonIcon,
  ActionButton,
};
