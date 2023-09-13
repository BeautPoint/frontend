import styled from 'styled-components/native';

interface PropsType {
  text: {size?: string; weight?: string};
  previewLayOut: {paddingHorizontal?: number};
}

const CommonStyle = styled.View`
  margin-bottom: 5px;
`;

const PreviewLayOut = styled.View<PropsType['previewLayOut']>`
  width: 100%;
  padding-left: ${({paddingHorizontal}) => paddingHorizontal || 0}px;
  padding-right: ${({paddingHorizontal}) => paddingHorizontal || 0}px;
`;

const ShopName = styled(CommonStyle)`
  margin-bottom: 10px;
`;
const ShopHours = styled(CommonStyle)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-right: 10px;
`;

const Hours = styled.View``;
const Status = styled.View`
  padding-right: 10px;
`;

const ShopAddress = styled(CommonStyle)`
  margin-bottom: 10px;
`;
const HighlightBadge = styled.View`
  padding: 4px 10px;
  background: #e0f0ff;
  margin-right: 10px;
  border-radius: 4px;
`;

const BadgeBox = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const RatingStars = styled.View`
  width: 40px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export {
  PreviewLayOut,
  ShopName,
  ShopHours,
  Hours,
  Status,
  ShopAddress,
  HighlightBadge,
  BadgeBox,
  RatingStars,
};
