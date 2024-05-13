import styled from 'styled-components/native';

interface PropsType {
  layout: {display: boolean};
  menuOption: {border?: boolean; hover: boolean};
  actionButton: {
    borderRadius: number;
    hover: boolean;
    background: string;
    marginTop: number;
  };
}

const radiusValues = (id: number) => {
  switch (id) {
    case 1:
      return {borderTopLeftRadius: 10, borderTopRightRadius: 10};
    case 2:
      return {borderBottomLeftRadius: 10, borderBottomRightRadius: 10};
    default:
      return {borderRadius: 10};
  }
};

const CommonStyle = styled.View`
  width: 100%;
  border-radius: 10px;
  background: #ffffff;
`;

const ButtonCommonStyle = styled.Pressable`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.View<PropsType['layout']>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${({display}) => (display ? 'flex' : 'none')};
`;

const Overlay = styled.Pressable`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  padding-bottom: 30px;
`;

const ActionButton = styled(ButtonCommonStyle)<PropsType['actionButton']>`
  background: ${({background}) => background};
  ${({borderRadius}) => radiusValues(borderRadius)};
  border-top-width: 1px;
  border-top-color: #cbcbcb;
  opacity: ${({hover}) => (hover ? 0.8 : 1)};
  margin-top: ${({marginTop}) => (marginTop === 0 ? '8px' : '0px')};
`;

const ModalBtn = styled.Pressable``;

export {Layout, Overlay, ModalBtn, ActionButton};
