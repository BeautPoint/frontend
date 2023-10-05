import HomeState from '@/recoil/home/home.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/home/categories.style';
import {useRecoilValue} from 'recoil';

function HomeCategories() {
  const {categoryList} = useRecoilValue(HomeState);
  return (
    <S.CategoriesLayout>
      {categoryList.map(item => (
        <S.CategoryBox key={item.id}>
          <S.IconSection />
          <AppText size="12px">{item.name}</AppText>
        </S.CategoryBox>
      ))}
    </S.CategoriesLayout>
  );
}

export default HomeCategories;
