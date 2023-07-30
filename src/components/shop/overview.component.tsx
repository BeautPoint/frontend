import {AppText} from '@/styles/global.style';
import * as S from '@/styles/shop/overview.style';
import ShopPreview from '@/components/shop/preview.component';
import ViewsIcon from '@/assets/icons/viewsIcon.svg';
import CallIcon from '@/assets/icons/callIcon.svg';
import SaveIcon from '@/assets/icons/saveIcon.svg';
import {Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import LeftIcon from '@/assets/icons/leftIcon.svg';

function ShopOverView() {
  const {width} = Dimensions.get('screen');
  const slider = React.useRef(null);
  const [currentItemId, setCurrentItemId] = useState();
  const images = [
    {
      id: 0,
      url: 'https://www.shutterstock.com/image-vector/example-red-square-grunge-stamp-260nw-327662909.jpg',
    },
    {
      id: 1,
      url: 'https://img.freepik.com/premium-photo/wooden-cubes-with-word-example_284815-518.jpg',
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRmkkAAs3nLaT10JYGUrVoeytP0u42BiK3AiiHhCy&s',
    },
  ];

  const viewChangedHandle = React.useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentItemId(viewableItems[0].index);
    }
  }).current;

  return (
    <S.OverViewLayOut>
      <S.Slider>
        <FlatList
          ref={slider}
          horizontal
          pagingEnabled
          data={images}
          onViewableItemsChanged={viewChangedHandle}
          renderItem={({item}) => (
            <>
              <S.Image key={item.id} width={width} source={{uri: item.url}} />
              <S.GradientImage
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.30)']}
              />
            </>
          )}
        />
        {/* background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60.88%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>), lightgray 50% / contain no-repeat; */}
        <S.SlideDotsBox>
          {images.length > 1 &&
            images.map(item => (
              <S.SlideDots
                background={item.id === currentItemId ? '#619BFF' : '#FFFFFF'}
                key={item.id}
              />
            ))}
        </S.SlideDotsBox>
      </S.Slider>
      <S.ShopInfoBox>
        <ShopPreview />
        <S.ViewCounter>
          <ViewsIcon />
          <AppText>오늘 15명이 이곳을 보고 갔어요!</AppText>
        </S.ViewCounter>
        <S.ButtonBox>
          <S.ActionButton>
            <S.ButtonIcon>
              <CallIcon />
            </S.ButtonIcon>
            <AppText size="15px">전화하기</AppText>
          </S.ActionButton>
          <S.ActionButton>
            <S.ButtonIcon>
              <SaveIcon />
            </S.ButtonIcon>
            <AppText size="15px">저장하기</AppText>
          </S.ActionButton>
        </S.ButtonBox>
      </S.ShopInfoBox>
    </S.OverViewLayOut>
  );
}

export default ShopOverView;
