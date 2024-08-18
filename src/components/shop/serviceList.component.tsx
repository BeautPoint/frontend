import {useServiceHook} from '@/hooks/service/service.hook';
import HomeState from '@/recoil/home/home.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/serviceList.style';
import {NavigationProps} from '@/types/stackprops';
import {Dimensions, FlatList} from 'react-native';
import {useRecoilValue} from 'recoil';
import EmptyResults from '../common/emptyResults.component';
import ServiceLikeButton from '../common/serviceLikeBtn.component';

interface ServiceListProps {
  navigation: NavigationProps['home' | 'serviceList']['navigation'];
}

function ServiceList({navigation}: ServiceListProps) {
  const {handleShopDetails} = useServiceHook();
  const {shopList} = useRecoilValue(HomeState);
  const {width} = Dimensions.get('window');

  const handleServicePress = serviceData => {
    handleShopDetails(serviceData);
    navigation.navigate('ServiceDetails');
  };

  const renderServiceItem = ({item}: any) => {
    return (
      <S.ServiceCotainer onPress={() => handleServicePress(item)}>
        <S.Image
          source={{
            uri: 'https://media.timeout.com/images/102522516/image.jpg',
          }}
        />
        <S.ContentInfoBox>
          <S.Title width={width * 0.5}>
            <AppText size="15px" weight="semiBold" numberOfLines={1}>
              {item.name}
            </AppText>
          </S.Title>
          <S.OpenClosed>
            <AppText size="12px">
              {item.open_now ? '영업중' : '엽엉종료'}
            </AppText>
          </S.OpenClosed>
          <S.Address width={width * 0.55}>
            <AppText size="12px" color="#717984">
              {item.address}
            </AppText>
          </S.Address>
        </S.ContentInfoBox>
        {/* <S.LikeButton></S.LikeButton> */}
        <ServiceLikeButton
          top={15}
          right={0}
          initialLiked={false}
          place_id={item.place_id}
          category={item.category}
        />
      </S.ServiceCotainer>
    );
  };

  return (
    <S.Layout>
      <FlatList
        renderItem={renderServiceItem}
        data={shopList}
        ListEmptyComponent={EmptyResults}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: 80}}
      />
    </S.Layout>
  );
}

export default ServiceList;
