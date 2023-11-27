import styled from 'styled-components/native';

interface PropsType {
  shopInfoLayOut: {height?: string};
}

const BottomUpLayOut = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const BackDrop = styled.Pressable`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalWindow = styled.View`
  width: 100%;
  height: 450px;
  background: #ffffff;
  position: absolute;
  bottom: 0;
  padding: 0 30px;
  border-radius: 10px;
  display: flex;
`;

export {BottomUpLayOut, BackDrop, ModalWindow};
