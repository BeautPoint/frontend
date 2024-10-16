import styled from 'styled-components/native';

const UserInfoLayout = styled.View`
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const InfoBox = styled.View`
  padding: 5px 10px;
`;

const ProfilePhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
// const UserInfo = styled.View`
//   padding: 5px 10px;
// `;

const PostStats = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  padding-top: 5px;
`;

const UserName = styled.View``;
const CreatedAt = styled.View`
  margin-right: 10px;
`;
const Views = styled.View``;

const EditPostButton = styled.Pressable`
  width: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
`;

const ReportDropdown = styled.View`
  position: absolute;
  right: 0;
  bottom: -10px;
  z-index: 2;
`;

export {
  UserInfoLayout,
  InfoBox,
  ProfilePhoto,
  PostStats,
  UserName,
  CreatedAt,
  Views,
  EditPostButton,
  ReportDropdown,
};
