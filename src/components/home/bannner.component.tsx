import * as S from '@/styles/home/banner.style';
import {useRef, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';

function HomeBanner() {
  const [currentItemId, setCurrentItemId] = useState();
  const {width} = Dimensions.get('screen');
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

  const viewChangedHandle = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentItemId(viewableItems[0].index);
    }
  }).current;

  return (
    <S.BannerLayout width={width}>
      <FlatList
        horizontal
        pagingEnabled
        onViewableItemsChanged={viewChangedHandle}
        data={images}
        renderItem={({item}) => (
          <View>
            <S.Image
              width={width * 0.9}
              key={item.id}
              source={{uri: item.url}}
            />
            <S.GradientImage
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.5)']}
            />
          </View>
        )}
      />
    </S.BannerLayout>
  );
}

export default HomeBanner;
