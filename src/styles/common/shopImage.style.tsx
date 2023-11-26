import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const ShopImageLayout = styled.View`
  width: 100%;
  height: 100%;
`;

const GradientImage = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const LikeButton = styled.Pressable`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 5px;
  top: 5px;
  z-index: 3;
`;

export {ShopImageLayout, GradientImage, Image, LikeButton};
