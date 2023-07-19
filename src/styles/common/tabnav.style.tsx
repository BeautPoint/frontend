import styled from 'styled-components/native';

const TabBarLayOut = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: #ffffff;
  flex-direction: row;
  display: flex;
  align-items: center;
  padding-left: 4px;
`;

const ButtonBox = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  border-top: 1px solid;
`;

const TabButton = styled.Pressable`
  width: 50px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const TabIcon = styled.View`
  width: 30px;
  height: 30px;
  background: #ababab;
  border-radius: 50px;
`;

const TabText = styled.Text`
  font-size: 12px;
  margin-top: 10px;
`;

export {TabBarLayOut, ButtonBox, TabButton, TabIcon, TabText};
