import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface PropType {
  agreeBox: {color?: string; size?: string};
}

/* 공통 스타일 */

const CommonStyle = styled.View`
  display: flex;
  align-items: center;
  height: 35px;
`;

/* 개별 스타일 */

const ConfirmLayOut = styled.View`
  width: 100%;
  height: 100%;
`;

const AgreeAllBox = styled(CommonStyle)`
  display: flex;
  flex-wrap: wrap;
  height: 70px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #bcbcbc;
  margin-bottom: 10px;
`;
const AgreeAllSubBox = styled.View`
  padding-left: 30px;
`;
const AgreeBox = styled(CommonStyle)`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled(CommonStyle)`
  height: 80px;
  flex-direction: row;
`;
const Text = styled.Text<PropType['agreeBox']>`
  color: ${({color}) => color || '#000000'};
  font-size: ${({size}) => size || '14px'};
`;
const AgreeItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ViewBtn = styled.Pressable``;

const ConfirmButton = styled.Pressable`
  width: 100%;
  height: 48px;
  background: #619bff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export {
  ConfirmLayOut,
  AgreeAllBox,
  AgreeAllSubBox,
  AgreeBox,
  Title,
  Text,
  AgreeItemWrapper,
  ViewBtn,
  ConfirmButton,
};
