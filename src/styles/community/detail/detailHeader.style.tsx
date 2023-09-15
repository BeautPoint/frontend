import styled from 'styled-components/native';

interface PropsType {
  actionButton: {marginLeft?: string};
}

const DetailHeaderLayout = styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #ffffff;
`;

const LeftSection = styled.View`
  position: absolute;
  left: 20px;
`;
const RightSection = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;
`;

const ActionButton = styled.Pressable<PropsType['actionButton']>`
  margin-left: ${({marginLeft}) => marginLeft || '0'};
`;

const HeaderTitle = styled.View``;

const ButtonIcon = styled.View``;

export {
  DetailHeaderLayout,
  HeaderTitle,
  ActionButton,
  ButtonIcon,
  LeftSection,
  RightSection,
};
