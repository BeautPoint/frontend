import styled from 'styled-components/native';

const CommonStyle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLayout = styled.View`
  width: 100%;
  margin-bottom: 20px;
  /* border: 1px solid; */
`;

const TopBox = styled(CommonStyle)`
  margin-bottom: 20px;
`;
const BottomBox = styled(CommonStyle)``;

const LogoIcon = styled.View``;

const NotificationButton = styled.Pressable``;

export {HeaderLayout, LogoIcon, NotificationButton, TopBox, BottomBox};
