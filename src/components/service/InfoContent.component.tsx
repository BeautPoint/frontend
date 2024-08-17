import {AppText} from '@/styles/global.style';
import * as S from '@/styles/service/infoContent.style';
import {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import StarIcon from '@/assets/icons/starIcon.svg';
import NoneReview from '@/assets/images/defaultreview2.svg';
import GrayStarIcon from '@/assets/icons/shopDetail/gratStar.svg';
import {useRecoilValue} from 'recoil';
import shopState from '@/recoil/shop/shop.recoil';
import WriteIcon from '@/assets/icons/write2.svg';
import {Shadow} from 'react-native-shadow-2';
import {calculateAverageRating} from '@/utils/calculateAvgRating.util';
import {NavigationProps} from '@/types/stackprops';
import {useAuthHook} from '@/hooks/auth/auth.hook';

function ShopInfoContent({navigation}: NavigationProps['serviceList']) {
  const [tabItems, setTabItems] = useState([
    {id: 0, name: '상세정보'},
    {id: 1, name: '리뷰'},
  ]);
  const {selectedService} = useRecoilValue(shopState);
  const [selectedTab, setSelectedTab] = useState(0);
  const {accessToken} = useAuthHook();

  const handleTabChange = (id: number) => {
    setSelectedTab(id);
    console.log(id === selectedTab);
  };

  const handleCreateReview = () => {
    const route = accessToken ? 'ServiceReview' : 'Login';
    navigation.navigate(route);
  };

  const emptyReview = () => {
    const imageWidth = 180;
    const imageHeight = 80;
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
        <View style={{marginBottom: 20}}>
          <Shadow
            style={{
              width: imageWidth * 0.8,
              height: imageHeight * 0.8,
              position: 'absolute',
            }}
            distance={15}
            startColor={'rgba(113, 121, 132, 0.20)'}
            offset={[23, 13]}
          />
          <NoneReview width={`${imageWidth}px`} height={`${imageHeight}px`} />
        </View>
        <AppText>아직 작성된 후기가 없어요:)</AppText>
      </View>
    );
  };

  return (
    <S.layout>
      <S.InfoReviewTabs>
        {tabItems.map(item => {
          return (
            <S.Tab
              key={item.id}
              onPress={() => handleTabChange(item.id)}
              borderBottom={item.id === selectedTab}>
              <AppText>{item.name}</AppText>
            </S.Tab>
          );
        })}
      </S.InfoReviewTabs>
      {selectedTab === 0 ? (
        <DetailsInfo
          shopName={selectedService.name}
          description={selectedService.description}
          operatingHours={selectedService.openingHours}
        />
      ) : (
        <S.ReviewList>
          <S.Title>
            <AppText weight="SemiBold" size="16px">
              리뷰
            </AppText>
          </S.Title>
          <S.createReviewButton onPress={handleCreateReview}>
            <WriteIcon
              color="#006FFF"
              width="15px"
              height="15px"
              strokeWidth={1.5}
              style={{marginRight: 5}}
            />
            <AppText size="13px" color="#000000">
              리뷰 작성
            </AppText>
          </S.createReviewButton>
          <RatingOverview />
          <S.UserReviewList>
            <S.UserReviewItem>
              {/* <S.UserInfo>
                <S.LeftBox>
                  <S.ProfileImage></S.ProfileImage>
                </S.LeftBox>
                <S.LeftBox>
                  <S.NickName>
                    <AppText size="16px">호박잎이떨어질때</AppText>
                  </S.NickName>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <RatingStar />
                    <S.CreatedAt>
                      <AppText size="12px" color="#858585">
                        10일 전
                      </AppText>
                    </S.CreatedAt>
                  </View>
                </S.LeftBox>
              </S.UserInfo>
              <S.ReviewContent>
                <AppText>
                  규모는 작지만 있을건 왠만한건 다 있네요. 사우나도있고 샤워실도
                  깨끗한데 사우나온도나 샤워온수 온도가 너무 낮아요. 온도좀
                  올려주세요!!!!
                </AppText>
              </S.ReviewContent> */}
              {emptyReview()}
            </S.UserReviewItem>
          </S.UserReviewList>
        </S.ReviewList>
      )}
    </S.layout>
  );
}

export default ShopInfoContent;

interface DetailsInfoProps {
  shopName: string;
  description: string;
  operatingHours: {
    weekdays?: string;
    differentWeekdays?: string;
    weekends?: string;
    differentWeekends?: string;
    closed?: string;
  };
}

function DetailsInfo({
  shopName,
  description,
  operatingHours,
}: DetailsInfoProps) {
  console.log('sdsssssss: ', operatingHours);

  const defaultDescription = () => {
    return (
      <View>
        <AppText>
          안녕하세요!{' '}
          <AppText weight="SemiBold" size="15px">
            {shopName}
          </AppText>
          에 오신 것을 환영합니다.{'\n'}
        </AppText>
        <AppText>
          저희는 고객님의 아름다움과 자신감을 위해 세심한 손길과 전문적인 기술을
          제공하는 뷰티 전문샵입니다.
        </AppText>
        <AppText>
          언제나 고객님의 자연스럽고 만족스러운 결과를 위해 최선을 다하고
          있습니다.{'\n'}
        </AppText>
        <AppText>
          모든 시술은 위생과 안전을 최우선으로 고려하여 진행되며, 편안하고
          안락한 환경에서 고객님의 얼굴과 이미지에 딱 맞는 아름다움을 찾아
          드리기 위해 함께하겠습니다.
        </AppText>
      </View>
    );
  };

  return (
    <S.DetailsInfo>
      <S.Description>
        <S.Content>
          <S.Title>
            <AppText weight="SemiBold" size="16px">
              안내사항
            </AppText>
          </S.Title>
          {description ? (
            <AppText>{description}</AppText>
          ) : (
            defaultDescription()
          )}
        </S.Content>
      </S.Description>
      <S.OperatingContainer>
        <S.Content>
          <S.Title>
            <AppText weight="SemiBold" size="16px">
              운영시간
            </AppText>
          </S.Title>
          <S.OperatingHours>
            {operatingHours?.weekdays && (
              <AppText style={{marginBottom: 5}}>
                {operatingHours.weekdays}
              </AppText>
            )}
            {operatingHours?.differentWeekdays && (
              <AppText style={{marginBottom: 5}}>
                {operatingHours.differentWeekdays}
              </AppText>
            )}
            {operatingHours?.weekends && (
              <AppText style={{marginBottom: 5}}>
                {operatingHours.weekends}
              </AppText>
            )}
            {operatingHours?.differentWeekends && (
              <AppText style={{marginBottom: 5}}>
                {operatingHours.differentWeekends}
              </AppText>
            )}
            {operatingHours?.closed && (
              <AppText>{operatingHours.closed}</AppText>
            )}
          </S.OperatingHours>
        </S.Content>
      </S.OperatingContainer>
    </S.DetailsInfo>
  );
}

function RatingStar({avgRating}) {
  const filledStars = Math.floor(avgRating);
  const ratings = [1, 2, 3, 4, 5];
  return (
    <Pressable style={{flexDirection: 'row'}}>
      {ratings.map((NaN, index) => {
        const color = index < filledStars ? '#006FFF' : '#d1d1d1';
        return <StarIcon key={index} color={color} />;
      })}
    </Pressable>
  );
}

function RatingOverview() {
  const ratingsData = [
    {rating: '5점', count: 0},
    {rating: '4점', count: 0},
    {rating: '3점', count: 0},
    {rating: '2점', count: 0},
    {rating: '1점', count: 0},
  ];
  const calculatePercentage = (
    ratingsData: {rating: string; count: number}[],
    rating: string,
  ) => {
    const totalReviews = ratingsData.reduce((sum, item) => sum + item.count, 0);
    const ratingData = ratingsData.find(item => item.rating === rating);
    return totalReviews > 0 && ratingData
      ? (ratingData.count / totalReviews) * 100
      : 0;
  };
  const avgRating = calculateAverageRating(ratingsData);

  return (
    <S.RatingBox>
      <S.RatingWithStars>
        <S.AverageRating>
          <AppText size="23px" weight="Bold">
            {avgRating}
          </AppText>
        </S.AverageRating>
        <RatingStar avgRating={avgRating} />
      </S.RatingWithStars>
      <S.RatingGauge>
        {ratingsData.map(item => {
          const percentage = calculatePercentage(ratingsData, item.rating);
          return (
            <S.GauageInfo key={item.rating}>
              <S.ScroreLabel>
                <AppText color="#858585" size="12px">
                  {item.rating}
                </AppText>
              </S.ScroreLabel>
              <S.GaugeTrack>
                <S.GaugeProgress width={percentage}></S.GaugeProgress>
              </S.GaugeTrack>
              <S.CountLabel>
                <AppText color="#858585" size="12px">
                  {item.count}
                </AppText>
              </S.CountLabel>
            </S.GauageInfo>
          );
        })}
      </S.RatingGauge>
    </S.RatingBox>
  );
}
