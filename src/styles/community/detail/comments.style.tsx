import styled from 'styled-components/native';

const CommentsLayout = styled.View`
  height: 40%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  padding: 20px;
`;

const Label = styled.View`
  margin-right: 10px;
`;

const Count = styled.View``;

const CommentsDetailBox = styled.ScrollView`
  background: #ffffff;
  padding: 20px;
  /* min-height: 100px; */
`;

const UserProfile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImg = styled.View`
  width: 25px;
  height: 25px;
  background: #a5a5a5;
  border-radius: 50px;
  margin-right: 10px;
`;

const CommentBody = styled.View`
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 35px;
`;

const ActionButtonBox = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 35px;
`;

const LikeButton = styled.Pressable`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReplyButton = styled.Pressable``;

const ButtonIcon = styled.View`
  margin-right: 5px;
`;

const WriteCommentBox = styled.View`
  background: #ffffff;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  padding: 20px;
`;

const CommentInput = styled.TextInput`
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  padding: 10px;
`;

export {
  CommentsLayout,
  Header,
  Label,
  Count,
  CommentsDetailBox,
  UserProfile,
  ProfileImg,
  CommentBody,
  ActionButtonBox,
  LikeButton,
  ReplyButton,
  ButtonIcon,
  WriteCommentBox,
  CommentInput,
};
