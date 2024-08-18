import NavigationHeader from '@/components/common/navigationHeader';
import {NavigationProps} from '@/types/stackprops';
import * as S from '@/styles/shop/detail/briefReview.style';
import {AppText} from '@/styles/global.style';
import {useRecoilValue} from 'recoil';
import shopState from '@/recoil/shop/shop.recoil';
import {Fragment} from 'react';
import {useShopDetails} from '@/hooks/shop/shopDetail.hook';
import CheckIcon from '@/assets/icons/shopDetail/checkBoxActived.svg';
import NoneCheckIcon from '@/assets/icons/shopDetail/checkBoxNormal.svg';

interface BriefReviewProps {
  navigation: NavigationProps['home' | 'serviceList']['navigation'];
}

function BriefReviewScreen({navigation}: BriefReviewProps) {
  const {BriefReviewList, briefReviewData} = useRecoilValue(shopState);
  const {BriefReviewCheckBoxHandle} = useShopDetails();
  const reviewChecked = BriefReviewList.some(item => item.isSelected === true);
  return (
    <Fragment>
      <NavigationHeader
        isActived={reviewChecked}
        navigation={navigation}
        title={'글쓰기'}
        url="brief"
      />
      <S.BriefReviewLayout>
        <S.TitleSection>
          <S.ReviewTitle>
            <AppText size="18px" weight="Semibold">
              해당 샵의 좋았던 점은 무엇인가요?
            </AppText>
          </S.ReviewTitle>
          <S.SubTitle>
            <AppText color="#717984">복수 선택이 가능해요</AppText>
          </S.SubTitle>
        </S.TitleSection>
        <S.SelectedList>
          {BriefReviewList.map(item => (
            <S.CheckBoxButton
              key={item.id}
              onPress={() =>
                BriefReviewCheckBoxHandle(item.id, item.description)
              }>
              <S.ButtonIcon>
                {item.isSelected ? (
                  <CheckIcon color="#619BFF" strokeWidth="1" />
                ) : (
                  <NoneCheckIcon />
                )}
              </S.ButtonIcon>
              <AppText>{item.description}</AppText>
            </S.CheckBoxButton>
          ))}
        </S.SelectedList>
      </S.BriefReviewLayout>
    </Fragment>
  );
}
export default BriefReviewScreen;
