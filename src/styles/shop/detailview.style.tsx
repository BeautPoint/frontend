import styled from 'styled-components/native';

interface PropsType {
  tabs: {isSelected: boolean};
}

const CommonStyle = styled.View`
  display: flex;
  align-items: center;
`;

const DetailViewLayOut = styled.View`
  width: 100%;
  margin-top: 10px;
`;
const TabBox = styled(CommonStyle)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  background: #ffffff;
  border-bottom-width: 3px;
  border-bottom-color: #f4f5f6;
`;
const Tabs = styled.Pressable<PropsType['tabs']>`
  width: 50%;
  height: 40px;
  border-bottom-width: ${({isSelected}) => (isSelected ? '2px' : '0px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailTabs = styled.View`
  background: #ffffff;
  min-height: 150px;
`;

const Introduction = styled.View`
  margin-bottom: 10px;
`;

const Description = styled.View``;

export {DetailViewLayOut, TabBox, Tabs, DetailTabs, Introduction, Description};
