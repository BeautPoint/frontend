import styled from 'styled-components/native';

interface PropsType {
  layout: {borderBottom?: string | number};
}

const HeaderLayout = styled.View<PropsType['layout']>`
  width: 100%;
  height: 50px;
  border-bottom-width: ${({borderBottom}) => (borderBottom ? '1px' : '0px')};
  border-bottom-color: #ebebeb;
`;

const MainContent = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 10px 20px;
`;

const ScreenTitle = styled.View``;

const BackButton = styled.Pressable`
  position: absolute;
  display: flex;
  left: 0;
  width: 30px;
  height: 100%;
`;

const Title = styled.View``;

export {HeaderLayout, MainContent, ScreenTitle, BackButton, Title};
