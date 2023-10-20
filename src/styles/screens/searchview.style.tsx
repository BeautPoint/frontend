import styled from 'styled-components/native';

interface PropsType {
  input: {placeholderColor?: string; background?: string};
}

const SerachViewLayout = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const SearchInputBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const SearchInput = styled.TextInput.attrs<PropsType['input']>(
  ({placeholderColor}) => ({
    placeholderTextColor: placeholderColor || '#8C939C',
  }),
)`
  width: 90%;
  height: 48px;
  border-radius: 12px;
  background: #e3e3e3;
  padding-left: 20px;
`;

const BackButton = styled.Pressable`
  margin-right: 20px;
`;

const SearchHistoryBox = styled.View`
  margin-top: 20px;
`;

const HistoryHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HistoryMain = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DeleteAllKeyword = styled.Pressable``;

const KeywordTag = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #717984;
  padding: 6px 10px 6px 15px;
  border-radius: 20px;
  margin-right: 15px;
  margin-bottom: 10px;
`;

const DeleteKeyword = styled.Pressable`
  display: flex;
  align-items: center;
  /* width: 20px; */
  margin-left: 10px;
  margin-right: 5px;
`;

const SearchIconBox = styled.View`
  position: absolute;
  right: 20px;
`;

const PopularSearchBox = styled.View``;

export {
  SerachViewLayout,
  SearchIconBox,
  SearchInputBox,
  SearchInput,
  BackButton,
  SearchHistoryBox,
  HistoryHeader,
  HistoryMain,
  DeleteAllKeyword,
  KeywordTag,
  DeleteKeyword,
};
