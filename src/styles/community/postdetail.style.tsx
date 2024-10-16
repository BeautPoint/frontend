import styled from 'styled-components/native';

const DetailLayout = styled.View`
  height: 100%;
`;

const PostMainSection = styled.ScrollView`
  padding: 20px;
  background: #ffffff;
  margin-bottom: 2px;
  height: 60%;
`;

const MainBox = styled.View`
  padding: 10px 0;
  /* min-height: 200px; */
`;
const PostTitle = styled.View`
  margin-bottom: 15px;
`;
const PostBody = styled.View``;

const CommentSection = styled.View`
  padding: 20px;
  background: #ffffff;
`;

const CommentHeader = styled.View`
  display: flex;
  flex-direction: row;
`;

const Label = styled.View`
  margin-right: 10px;
`;

const Count = styled.View``;

export {
  DetailLayout,
  PostMainSection,
  MainBox,
  PostTitle,
  PostBody,
  CommentSection,
  CommentHeader,
  Label,
  Count,
};
