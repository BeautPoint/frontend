import styled from 'styled-components/native';

interface PropsType {
  tabs: {isActive: boolean};
}

const UserContentLayout = styled.View`
  background: #ffffff;
  width: 100%;
  height: 60%;
  margin-top: 15px;
  padding-bottom: 34px;
`;

const TabBox = styled.View`
  border: 1px solid #e9eaec;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Tabs = styled.Pressable<PropsType['tabs']>`
  width: 50%;
  height: 105%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-bottom-color: ${({isActive}) =>
    isActive ? '#619bff' : 'transparent'};
`;

const ItemCount = styled.View`
  margin: 5px;
`;

const Contents = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export {UserContentLayout, TabBox, Tabs, Contents, ItemCount};
