import styled from 'styled-components/native';

const LoginScreenLayout = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  background: #ffffff;
`;

const DescriptionBox = styled.View`
  padding: 30px;
  display: flex;
  /* align-items: center; */
  margin-top: 50px;
`;

const Description = styled.Text`
  font-size: 21px;
  padding: 2px;
`;

const ButtonBox = styled.View`
  /* margin-bottom: 80px; */
  margin-bottom: 50px;
`;

const GuestAccessButton = styled.Pressable`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

const ImageBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: 100px;
`;

export {
  LoginScreenLayout,
  DescriptionBox,
  Description,
  ButtonBox,
  GuestAccessButton,
  ImageBox,
  Image,
};
