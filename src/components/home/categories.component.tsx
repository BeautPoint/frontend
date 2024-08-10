import {useSearchHook} from '@/hooks/search/useSearch.hook';
import HomeState from '@/recoil/home/home.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/home/categories.style';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';

function HomeCategories({navigation}: NavigationProps['home']) {
  const {categoryList} = useRecoilValue(HomeState);
  const {updateSearchKeyword, setShowResultsScreen} = useSearchHook();

  const handlePressed = (keyword: string) => {
    updateSearchKeyword(keyword);
    navigation.navigate('CategoryResults');
  };

  return (
    <S.CategoriesLayout>
      {categoryList.map(item => (
        <S.Categorybutton
          onPress={() => handlePressed(item.name)}
          key={item.id}>
          <S.IconSection>
            <item.icon />
          </S.IconSection>
          <AppText size="12px">{item.name}</AppText>
        </S.Categorybutton>
      ))}
    </S.CategoriesLayout>
  );
}

export default HomeCategories;
