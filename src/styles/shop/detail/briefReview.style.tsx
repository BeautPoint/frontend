import styled from 'styled-components/native';

const BriefReviewLayout = styled.View`
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

const SelectedList = styled.View``;

const CheckBoxButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

const ButtonIcon = styled.View`
  margin-right: 15px;
`;

export {
  BriefReviewLayout,
  TitleSection,
  ReviewTitle,
  SubTitle,
  SelectedList,
  CheckBoxButton,
  ButtonIcon,
};
