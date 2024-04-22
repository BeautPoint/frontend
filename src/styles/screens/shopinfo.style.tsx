import styled from 'styled-components/native';

interface PropsType {
  dragBottomSheet: {height: number};
}

const DetailLayOut = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const ScrollView = styled.Pressable`
  width: 100%;
  /* padding-bottom: 40px; */
  background: #f4f5f6;
`;

const DragDownBottomSheet = styled.View<PropsType['dragBottomSheet']>`
  width: 100%;
  height: 100%;
  position: absolute;
  /* bottom: 0;
  right: 0; */
  top: 10px;
  z-index: 2;
`;

const BackButton = styled.Pressable`
  position: absolute;
  z-index: 2;
  left: 20px;
  top: 20px;
`;

export {DetailLayOut, ScrollView, BackButton, DragDownBottomSheet};
