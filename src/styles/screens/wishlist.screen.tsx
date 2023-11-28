import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface PropsType {
  tab: {background: boolean};
}

const CommonStyled = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ViewFlexRow = styled.View`
  display: flex;
  flex-direction: row;
`;

const WishListLayout = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #ffffff;
`;

const ScreenHeader = styled.View``;
const HeaderTop = styled.View``;
const TabBox = styled(CommonStyled)`
  flex-direction: row;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: #f4f5f6;
`;
const Tab = styled.Pressable<PropsType['tab']>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 80%;
  border-radius: 5px;
  background: ${({background}) => (background ? '#ffffff' : '#f4f5f6')};
`;
const HeadrBottom = styled.View``;

const ScreenTitle = styled(CommonStyled)`
  padding: 10px;
`;

const ShopList = styled.FlatList``;

const ShopInfoSection = styled.View`
  width: 60%;
  padding: 10px;
`;

const ShopContainer = styled(ViewFlexRow)`
  width: 100%;

  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #e9eaec;
`;

const ImageSection = styled.View`
  width: 40%;
  height: 130px;
`;

const ShopInfoTop = styled(ViewFlexRow)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ShopName = styled.View`
  width: 70%;
`;

const ShopRating = styled(ViewFlexRow)`
  width: 40px;
  justify-content: space-between;
`;

const OpeningHours = styled(ViewFlexRow)`
  margin-bottom: 5px;
`;
const OpenClosed = styled.View`
  margin-right: 10px;
`;
const Hours = styled.View``;
const ShopAdress = styled.View``;

export {
  WishListLayout,
  ScreenHeader,
  HeaderTop,
  TabBox,
  Tab,
  HeadrBottom,
  ScreenTitle,
  ShopList,
  ShopName,
  ShopContainer,
  ShopInfoSection,
  ImageSection,
  OpeningHours,
  OpenClosed,
  Hours,
  ShopInfoTop,
  ShopRating,
  ShopAdress,
};
