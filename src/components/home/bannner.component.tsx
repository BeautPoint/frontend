import {SlideDots, SlideDotsBox} from '@/styles/common/slideDots.style';
import * as S from '@/styles/home/banner.style';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import banner1 from '@/assets/images/banner1-1.png';
import banner2 from '@/assets/images/banner1-2.png';
import {AppText} from '@/styles/global.style';

const images = [
  {
    id: 0,
    img: banner1,
    mainText: '오래걸렸던 시술 샵 찾기 이젠 쉽고 간편하게!',
    subText: '지금 바로 갈 수 있는 내 근처 샵 확인하기',
  },

  {
    id: 1,
    img: banner2,
    mainText: '말하기 어려웠던 고민이나 정보 공유도 바로 여기서!',
    subText: '지금 바로 커뮤니티 확인하기',
  },
];

function HomeBanner() {
  const [currentItemId, setCurrentItemId] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {width} = Dimensions.get('screen');

  const handleViewableItems = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentItemId(viewableItems[0].index);
    }
  }).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex === images.length + 1) {
          flatListRef.current?.scrollToOffset({offset: 0, animated: false});
          setCurrentIndex(1);
          flatListRef.current?.scrollToIndex({index: 1, animated: true});
          return 1;
        }
        flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / (width * 0.9));
    const actualIndex = index % images.length;
    setCurrentIndex(actualIndex);
    if (index === images.length) {
      flatListRef.current?.scrollToIndex({index: 0, animated: false});
    }
  };

  const getItemLayout = (data: any, index: number) => ({
    length: width * 0.9, // 각 항목의 너비
    offset: width * 0.9 * index, // 각 항목의 위치 계산
    index,
  });

  return (
    <S.BannerLayout width={width * 0.9}>
      <FlatList
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItems}
        data={[...images, {...images[0], id: 2}]} // Encountered two children with the same key 이슈로 id 제설정
        keyExtractor={item => item.id.toString()}
        onMomentumScrollEnd={onScrollEnd}
        getItemLayout={getItemLayout}
        renderItem={({item}) => (
          <View>
            <Image
              style={{width: width * 0.9}}
              key={item.id}
              source={item.img}
            />
            <S.TextBox>
              <S.MainText>
                <AppText size="18px" color="#ffffff" weight="SemiBold">
                  {item.mainText}
                </AppText>
              </S.MainText>
              <S.SubText>
                <AppText size="11px" color="#ffffff">
                  {item.subText}
                </AppText>
              </S.SubText>
            </S.TextBox>
          </View>
        )}
      />
      <SlideDotsBox bottom={7}>
        {images.length > 1 &&
          images.map((item, index) => (
            <SlideDots
              size="6px"
              background={
                index === currentIndex % images.length ? '#ffffff' : '#b5b5b5'
              }
              key={item.id}
              margin={5}
            />
          ))}
      </SlideDotsBox>
    </S.BannerLayout>
  );
}

export default HomeBanner;
