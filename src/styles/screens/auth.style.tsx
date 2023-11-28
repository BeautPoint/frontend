import styled from 'styled-components/native';

const AuthLayOut = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
`;

const DescriptionBox = styled.View`
  padding: 30px;
  display: flex;
  align-items: center;
`;

const Description = styled.Text`
  font-size: 18px;
`;

const ButtonBox = styled.View`
  /* margin-bottom: 80px; */
`;

export {AuthLayOut, DescriptionBox, Description, ButtonBox};
