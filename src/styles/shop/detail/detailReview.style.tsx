import styled from 'styled-components/native';

const DetailReviewLayout = styled.View`
  padding: 20px;
  background: #ffffff;
  height: 100%;
`;

const TitleSection = styled.View`
  margin-bottom: 30px;
`;

const ReviewTitle = styled.View`
  margin-bottom: 10px;
`;

const SubTitle = styled.View``;

const ReviewRating = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
`;
const RatingButton = styled.Pressable``;
const RatingIcon = styled.View``;

const Description = styled.View``;
const TextReviewTitle = styled.View`
  margin-bottom: 10px;
`;
const TextForm = styled.TextInput`
  border: 1px solid #e9eaec;
  height: 180px;
  padding: 20px;
`;

export {
  DetailReviewLayout,
  TitleSection,
  ReviewTitle,
  SubTitle,
  ReviewRating,
  RatingButton,
  RatingIcon,
  TextForm,
  TextReviewTitle,
  Description,
};
