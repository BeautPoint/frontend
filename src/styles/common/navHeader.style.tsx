import styled from 'styled-components/native';

const HeaderLayout = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
`;

const MainContent = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 10px 20px;
`;

const ScreenTitle = styled.View``;

const BackButton = styled.Pressable`
  position: absolute;
  display: flex;
  left: 0;
  width: 30px;
  height: 100%;
`;

const Title = styled.View``;

export {HeaderLayout, MainContent, ScreenTitle, BackButton, Title};
