import styled from 'styled-components/native';

interface PropsType {
  tabMenu: {border?: boolean};
}

const DropdownCommonStyle = styled.Pressable`
  height: 35px;
  padding: 0 10px;
  border: 1px solid #bdbdbd;
  border-radius: 50px;
`;

const HeaderLayout = styled.View`
  width: 100%;
  background: #ffffff;
`;

const TabBox = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #bcbcbc;
  margin-top: 10px;
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const TabMenu = styled.Pressable<PropsType['tabMenu']>`
  padding: 0 15px;
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom-width: ${({border}) => (border ? '2px' : '1px')};
  border-bottom-color: ${({border}) => (border ? '#619bff' : '#bcbcbc')};
`;

const SearchButton = styled.Pressable`
  position: absolute;
  right: 10px;
`;

const DropdownBox = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0px;
  padding: 0 20px;
`;

const CategoryDrobdown = styled(DropdownCommonStyle)`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DrobdownLabel = styled.View`
  padding: 0 5px;
  border-right-width: 1px;
  border-right-color: #e7e9ee;
`;

const CategoryTitle = styled.View`
  padding: 0 5px;
`;

const SortDrobdown = styled(DropdownCommonStyle)`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const DownIconBox = styled.Pressable``;

export {
  HeaderLayout,
  TabBox,
  TabMenu,
  SearchButton,
  DropdownBox,
  DrobdownLabel,
  CategoryTitle,
  CategoryDrobdown,
  SortDrobdown,
  DownIconBox,
};
