import styled from 'styled-components/native';

interface PropType {
  categoryButton: {borderColor: boolean; marginRight?: string};
  buttonBox: {length: number};
  input: {platformMargin?: string};
}

const CreatePostLayout = styled.View`
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding: 0 20px;
`;

const ScreenHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

const Categories = styled.View`
  margin-top: 10px;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #e9eaec;
`;

const ButtonBox = styled.View<PropType['buttonBox']>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({length}) =>
    length > 3 ? 'space-between' : 'flex-start'};
`;

const CategoryTitle = styled.View`
  width: 100%;
  height: 40px;
`;

const PostBodyEditor = styled.View`
  padding: 10px 0;
  margin-top: 10px;
`;
const PostTitleInput = styled.TextInput.attrs({
  placeholderTextColor: '#8C939C',
})<PropType['input']>`
  font-size: 18px;
  margin-top: ${({platformMargin}) =>
    platformMargin === 'ios' ? '10px' : '0'};
  margin-bottom: ${({platformMargin}) =>
    platformMargin === 'ios' ? '10px' : '-10px'};
  font-weight: 600;
`;
const TextForm = styled.TextInput.attrs({
  placeholderTextColor: '#c0c0c0',
})`
  min-height: 300px;
`;

const BackButton = styled.Pressable``;
const SubmitButton = styled.Pressable``;
const CategorySelectedButton = styled.Pressable<PropType['categoryButton']>`
  width: 75px;
  height: 40px;
  margin-bottom: 10px;
  margin-right: ${({marginRight}) => marginRight || '0'};
  border: 1px solid ${({borderColor}) => (borderColor ? '#4D84E3' : '#e9eaec')};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  CreatePostLayout,
  ScreenHeader,
  Categories,
  ButtonBox,
  CategoryTitle,
  PostBodyEditor,
  PostTitleInput,
  TextForm,
  BackButton,
  SubmitButton,
  CategorySelectedButton,
};
