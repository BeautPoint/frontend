import styled from 'styled-components/native';

const CommonStyle = styled.View`
  background: #ffffff;
  padding: 20px;
  width: 100%;
  min-height: 100px;
`;

const ShopInfoLayout = styled.View`
  background: #f5f5f5;
  width: 100%;
`;

const IntroSection = styled(CommonStyle)`
  margin-bottom: 8px;
`;

const Services = styled(CommonStyle)``;

const TitleText = styled.View``;

export {ShopInfoLayout, IntroSection, Services, TitleText};
