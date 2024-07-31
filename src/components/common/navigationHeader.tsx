import * as S from '@/styles/common/navigationHeader.style';
import {AppText} from '@/styles/global.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {
  NavigationProps,
  ShopDetailScreenProps,
  ShopReviewScreenProps,
} from '@/types/stackprops';
import {useShopDetails} from '@/hooks/shop/shopDetail.hook';
import {useShopReviewQuery} from '@/api/shop/review.api';

interface NavHeaderParams {
  navigation: NavigationProps['home' | 'serviceList']['navigation'];
  title: string;
  isActived: boolean;
  url: 'brief' | 'detail';
}

function NavigationHeader({
  navigation,
  title,
  isActived,
  url,
}: NavHeaderParams) {
  const handleSubmitButton = () => {
    navigation.goBack();
    resetReviewData();
    createShopReview(url);
  };
  const {resetReviewData} = useShopDetails();
  const {createShopReview} = useShopReviewQuery();
  return (
    <S.HeaderLayout>
      <S.BackButton onPress={() => navigation.goBack()}>
        <BackIcon />
      </S.BackButton>
      <S.Title>
        <AppText>{title}</AppText>
      </S.Title>
      <S.SubmitButton
        disabled={!isActived}
        onPress={() => handleSubmitButton()}>
        <AppText color={isActived ? 'black' : '#8C939C'}>완료</AppText>
      </S.SubmitButton>
    </S.HeaderLayout>
  );
}

export default NavigationHeader;
