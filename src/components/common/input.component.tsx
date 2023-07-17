import * as S from '@/styles/common/input.style';
import {Shadow} from 'react-native-shadow-2';
import SearchIcon from '@/assets/icons/searchIcon.svg';

function SearchInput() {
  return (
    <S.InputLayOut>
      <Shadow offset={[5, 1]}>
        <S.InputIcon>
          <SearchIcon />
        </S.InputIcon>
        <S.Input placeholder="관심 있는 시술, 병원, 샵을 검색하세요" />
      </Shadow>
    </S.InputLayOut>
  );
}

export default SearchInput;
