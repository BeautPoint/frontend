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

const ProfileImage = styled.View`
  background: #bebebe;
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

export {
  UserInfoLayout,
  InfoBox,
  ProfileImage,
  PostStats,
  UserName,
  CreatedAt,
  Views,
};
