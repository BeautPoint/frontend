import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const CommonStyle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RecommendedShopLayout = styled.View`
  margin: 10px 0;
  width: 110%;
  height: 250px;
`;

const LikeButton = styled.Pressable`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 5px;
  top: 5px;
  z-index: 3;
`;

const SectionTitle = styled.View`
  margin-bottom: 10px;
`;

const SlideList = styled.FlatList``;

const ShopContainer = styled.Pressable`
  width: 140px;
  height: 200px;
  margin-right: 20px;
`;

const ImageBox = styled.View`
  width: 100%;
  height: 120px;
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

const InfoSection = styled(CommonStyle)`
  margin-top: 10px;
  flex-direction: column;
`;

const InfoTop = styled.View``;
const InfoBottom = styled(CommonStyle)`
  align-items: center;
`;

const ShopName = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;

const ShopRating = styled(CommonStyle)`
  width: 50px;
  height: 100%;
  align-items: center;
`;

const ShopDistance = styled(CommonStyle)`
  width: 40px;
  height: 100%;
  align-items: center;
`;

export {
  RecommendedShopLayout,
  SlideList,
  ShopContainer,
  LikeButton,
  SectionTitle,
  ImageBox,
  GradientImage,
  Image,
  InfoSection,
  InfoTop,
  InfoBottom,
  ShopName,
  ShopRating,
  ShopDistance,
};
