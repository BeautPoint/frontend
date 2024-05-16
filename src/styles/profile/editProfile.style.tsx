import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';

interface PropsType {
  gender: {border: string};
}

const EditProfileLayout = styled.View`
  background: #ffffff;
  height: 100%;
  width: 100%;
`;

const Header = styled.View``;

const MainContent = styled.View`
  padding: 20px;
`;

const ImageSection = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const SelectImageButton = styled.Pressable``;

const ProfilePhoto = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  border: 1px solid #ececec;
`;

const Icon = styled.View`
  position: absolute;
  right: -5px;
  bottom: -8px;
`;

const BoxShadow = styled(Shadow).attrs({
  startColor: '#848484',
  offset: [2, 2],
})`
  border-radius: 10px;
`;

const EditItem = styled.View`
  margin: 15px 0;
`;
const Label = styled.View`
  margin-bottom: 10px;
`;
const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#5A6068',
})`
  width: 100%;
  height: 48px;
  background: #f4f5f6;
  border-radius: 8px;
  padding: 0 15px;
  color: #5a6068;
`;

const DateBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const birthDateButton = styled.Pressable`
  background: #f4f5f6;
  width: 30%;
  border-radius: 8px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 10px;
`;

const GenderBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GenderButton = styled.Pressable<PropsType['gender']>`
  width: 48%;
  height: 48px;
  background: #f4f5f6;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({border}) => border || 'none'};
`;

export {
  EditProfileLayout,
  Header,
  MainContent,
  EditItem,
  Label,
  TextInput,
  DateBox,
  birthDateButton,
  GenderBox,
  GenderButton,
  SelectImageButton,
  ImageSection,
  ProfilePhoto,
  Icon,
  BoxShadow,
};
