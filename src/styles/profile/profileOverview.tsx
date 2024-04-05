import styled from 'styled-components/native';

const CommontStyled = styled.View`
  display: flex;
`;

const UserProfileLayout = styled.View`
  width: 100%;
  padding: 20px;
  height: 40%;
  justify-content: space-between;
  background: #ffffff;
`;

const ProfileHeader = styled(CommontStyled)`
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const PageTitle = styled.View``;

const SettingsButton = styled.Pressable`
  position: absolute;
  right: 0;
`;

const NotificationsButton = styled.Pressable``;

//

const ProfileBox = styled(CommontStyled)`
  flex-direction: row;
  align-items: center;
`;

const UserPhoto = styled.View`
  border-radius: 50px;
  width: 65px;
  height: 65px;
  margin-right: 20px;
  border: 1px solid #ececec;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

const UserName = styled.View``;

const EditButtonBox = styled.View``;

const EditButton = styled.Pressable`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export {
  UserProfileLayout,
  ProfileHeader,
  PageTitle,
  SettingsButton,
  NotificationsButton,
  Image,
  ProfileBox,
  UserPhoto,
  UserName,
  EditButtonBox,
  EditButton,
};
