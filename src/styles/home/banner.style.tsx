import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

interface PropsType {
  image: {width: number};
}

const BannerLayout = styled.View<PropsType['image']>`
  border-radius: 10px;
  width: 100%;
  height: 150px;
`;

const Image = styled.Image<PropsType['image']>`
  width: ${({width}) => width || 0}px;
  height: 100%;
  display: flex;
  border-radius: 10px;
`;

const GradientImage = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
`;

export {BannerLayout, Image, GradientImage};
