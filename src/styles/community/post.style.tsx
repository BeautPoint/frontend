import styled from 'styled-components/native';

const PostLayout = styled.View`
  width: 100%;
  /* border-bottom-width: 1px;
  border-bottom-color: #bdbdbd; */
  margin-bottom: 10px;
  padding: 0 20px;
  background: #ffffff;
`;

/** POST 윗단 */

const TopBox = styled.View`
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const ProfileImage = styled.View`
  background: #bebebe;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
const UserInfo = styled.View`
  padding: 5px 10px;
`;

const PostStats = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  padding-top: 5px;
`;

const UserName = styled.View``;
const CreatedAt = styled.View``;
const Views = styled.View``;

const PostSetButton = styled.Pressable`
  position: absolute;
  right: 0;
  bottom: 30px;
`;

/** POST 중간단 */

const MainBox = styled.View`
  height: 120px;
`;

const PostTitle = styled.View`
  margin-bottom: 10px;
`;

const PostBody = styled.View`
  margin-bottom: 20px;
`;

const TagBox = styled.View`
  display: flex;
  flex-direction: row;
`;
const PostTag = styled.View`
  margin-right: 10px;
`;

/** POST 아랫단 */

const BottomBox = styled.View`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ActionButton = styled.Pressable`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DividerLine = styled.View`
  border-right-width: 1px;
  border-right-color: #bdbdbd;
  height: 20px;
`;

export {
  PostLayout,
  TopBox,
  MainBox,
  BottomBox,
  ProfileImage,
  UserInfo,
  PostStats,
  UserName,
  CreatedAt,
  Views,
  PostSetButton,
  PostTitle,
  PostBody,
  TagBox,
  PostTag,
  ActionButton,
  DividerLine,
};
