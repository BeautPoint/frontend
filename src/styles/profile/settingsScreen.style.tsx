import styled from 'styled-components/native';

const SettingsLayout = styled.View`
  background: #ffffff;
  height: 100%;
  width: 100%;
`;

const MainContent = styled.View`
  padding: 20px;
`;

const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const ScreenTitle = styled.View``;

const BackButton = styled.Pressable`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  width: 30px;
  height: 100%;
`;

const SettingsItems = styled.View`
  margin-top: 50px;
`;

const ItemButton = styled.Pressable`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #e9eaec;
`;

const Label = styled.View`
  width: 100%;
  height: 20px;
`;

export {
  SettingsLayout,
  MainContent,
  Header,
  ScreenTitle,
  BackButton,
  SettingsItems,
  ItemButton,
  Label,
};
