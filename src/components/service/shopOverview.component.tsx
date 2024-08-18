import {AppText} from '@/styles/global.style';
import * as S from '@/styles/service/overview.style';
import {Dimensions, FlatList, Linking, View} from 'react-native';
import CallIcon from '@/assets/icons/callIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import HeartIcon from '@/assets/icons/heartIcon.svg';
import {useState} from 'react';
import ServiceLikeButton from '../common/serviceLikeBtn.component';
import {useRecoilValue} from 'recoil';
import shopState from '@/recoil/shop/shop.recoil';
import {NavigationProps} from '@/types/stackprops';

const {width} = Dimensions.get('window');

function ShopOverview({navigation}: NavigationProps['serviceList']) {
  const images = [
    {
      id: 1,
      src: 'https://img.29cm.co.kr/item/202403/11eee045c572471a91a53d28572f9e2c.jpg?width=700',
    },
    {id: 2, src: 'https://example.com/image2.jpg'},
    {id: 3, src: 'https://example.com/image3.jpg'},
    // 더 많은 이미지를 추가할 수 있습니다.
  ];
  const {selectedService} = useRecoilValue(shopState);
  const handleContact = () => {
    Linking.openURL(`tel:${selectedService.phone}`);
  };

  const renderImageSlider = ({item}: any) => (
    <S.ImageBox width={width}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.1)',
          'rgba(0, 0, 0, 0.1)',
        ]}>
        <S.Image source={{uri: item.src}} />
      </LinearGradient>
    </S.ImageBox>
  );

  console.log('선택 서비스 :', selectedService);
  console.log('이미지  : ', selectedService.photo);

  return (
    <S.Layout>
      <FlatList
        renderItem={renderImageSlider}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <S.BusinessInfo>
        <ServiceLikeButton
          place_id={selectedService.place_id}
          category={selectedService.category}
          top={20}
          right={20}
          initialLiked={false}
        />
        <S.Name>
          <AppText weight="Bold" size="22px">
            {selectedService.name}
          </AppText>
        </S.Name>
        <S.OperatingHours>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppText size="15px" style={{marginRight: 5}}>
              {selectedService.open_now ? '영업중' : '영업종료'}
            </AppText>
            <AppText weight="Light">
              {selectedService.todayOpeningHours}
            </AppText>
          </View>
        </S.OperatingHours>
        <S.Address>
          <AppText color="#717984">{selectedService.formattedAddress}</AppText>
        </S.Address>
      </S.BusinessInfo>
      <S.ButtonBox width={width}>
        <S.ContactButton onPress={handleContact}>
          <S.CallIconBox>
            <CallIcon color="#000000" />
          </S.CallIconBox>
          <AppText color="#ffffff" weight="SemiBold">
            전화하기
          </AppText>
        </S.ContactButton>
      </S.ButtonBox>
    </S.Layout>
  );
}

export default ShopOverview;
