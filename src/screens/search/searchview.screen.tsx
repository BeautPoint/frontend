import {AppText} from '@/styles/global.style';
import * as S from '@/styles/screens/searchview.style';
import CancelIcon from '@/assets/icons/cancelIcon.svg';
import BackIcon from '@/assets/icons/backIcon.svg';
import {NavigationProps} from '@/types/stackprops';

function SearchView({navigation}: NavigationProps['search']) {
  return (
    <S.SerachViewLayout>
      <S.SearchInputBox>
        <S.BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </S.BackButton>
        <S.SearchInput placeholder="시술 부위나 병원 명을 검색하세요" />
      </S.SearchInputBox>
      <S.SearchHistoryBox>
        <S.HistoryHeader>
          <AppText size="16px" weight="bold">
            최근찾아본
          </AppText>
          <S.DeleteAllKeyword>
            <AppText size="12px" color="#717984">
              전체 삭제
            </AppText>
          </S.DeleteAllKeyword>
        </S.HistoryHeader>
        <S.HistoryMain>
          <S.KeywordTag>
            <AppText size="14px">눈썹 정리</AppText>
            <S.DeleteKeyword onPress={() => console.log('wdwed')}>
              <CancelIcon />
            </S.DeleteKeyword>
          </S.KeywordTag>
          <S.KeywordTag>
            <AppText size="14px">탈모</AppText>
            <S.DeleteKeyword>
              <CancelIcon />
            </S.DeleteKeyword>
          </S.KeywordTag>
          <S.KeywordTag>
            <AppText size="14px">탈모</AppText>
            <S.DeleteKeyword>
              <CancelIcon />
            </S.DeleteKeyword>
          </S.KeywordTag>
        </S.HistoryMain>
      </S.SearchHistoryBox>
    </S.SerachViewLayout>
  );
}

export default SearchView;
