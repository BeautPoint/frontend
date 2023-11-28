import styled from 'styled-components/native';

const CommonStyled = styled.View`
  width: 100%;
  min-height: 200px;
  background: #ffffff;
  padding: 20px;
`;

const ReviewLayout = styled.View`
  background: #f5f5f5;
`;

const BriefReview = styled(CommonStyled)`
  margin-bottom: 8px;
`;

const DetailReview = styled(CommonStyled)``;

const TitleBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ActionButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ReviewGaugeBox = styled.View`
  background: #ebf2ff;
  border-radius: 5px;
  height: 50px;
  display: flex;
  margin-bottom: 5px;
`;

const TextBox = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const Gauge = styled.View`
  background: #b0cdff;
  width: 30%;
  height: 100%;
  border-radius: 5px;
`;

const IconBox = styled.View`
  margin-right: 8px;
`;

const ReviewList = styled.View`
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const defaultText = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  ReviewLayout,
  BriefReview,
  DetailReview,
  TitleBox,
  ActionButton,
  ReviewGaugeBox,
  TextBox,
  Gauge,
  IconBox,
  ReviewList,
  defaultText,
};
