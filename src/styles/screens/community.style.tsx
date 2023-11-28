import styled from 'styled-components/native';

const CommunityLayOut = styled.View`
  width: 100%;
  height: 100%;
  /* display: flex; */
`;

const ScrollViewBox = styled.View``;

const NewPostButton = styled.Pressable`
  position: absolute;
  padding: 10px;
  background: #619bff;
  bottom: 20px;
  right: 20px;
  border-radius: 50px;
`;

const ReportDropdownBackground = styled.Pressable`
  width: 100%;
  height: 100%;
  position: absolute;
  /* background: black; */
  z-index: 1;
`;

export {
  CommunityLayOut,
  ScrollViewBox,
  NewPostButton,
  ReportDropdownBackground,
};
