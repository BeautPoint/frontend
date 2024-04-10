import styled from 'styled-components/native';

const SettingsDetailsLayout = styled.View`
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

// 앱 버전 화면
const VerisionViewLayout = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VersionContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;

const VersionInfo = styled.View`
  padding: 3px;
`;

export {
  SettingsDetailsLayout,
  MainContent,
  Header,
  ScreenTitle,
  BackButton,
  VerisionViewLayout,
  VersionContent,
  VersionInfo,
};
