import styled from 'styled-components/native';

interface PropType {
  genderOption: {isPressed?: boolean};
  text: {size?: string; color?: string};
}

/** 공통 스타일 **/

const ButtonCommonStyle = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #adadad;
  margin: 10px 0;
  width: 105px;
  height: 40px;
`;

const ViewCommonStyle = styled.View`
  width: 100%;
  height: 100px;
`;

/** 개별 스타일 **/

const UserInfoFormLayOut = styled.View`
  width: 100%;
  background: #ffffff;
`;

const DescriptionBox = styled(ViewCommonStyle)``;
const Text = styled.Text<PropType['text']>`
  font-size: ${({size}) => size || '14px'};
  color: ${({color}) => color || 'black'};
`;
const ProfileDetail = styled(ViewCommonStyle)``;

const DateInputBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DateInput = styled(ButtonCommonStyle)`
  border-radius: 5px;
  flex-direction: row;
`;

const InputIcon = styled.View`
  position: absolute;
  right: 15px;
`;

const GenderOptionBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Label = styled.View`
  width: 100%;
`;

const GenderOption = styled(ButtonCommonStyle)<PropType['genderOption']>`
  width: 48%;
  height: 40px;
  border-radius: 5px;
  border: ${({isPressed}) => (isPressed ? '2px solid #619bff' : 'none')};
  background: #f4f5f6;
`;

export {
  UserInfoFormLayOut,
  DescriptionBox,
  Text,
  ProfileDetail,
  DateInputBox,
  Label,
  DateInput,
  InputIcon,
  GenderOptionBox,
  GenderOption,
};
