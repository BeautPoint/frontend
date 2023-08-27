import * as S from '@/styles/common/bottomsheet.style';
import {NavigationProps} from '@/types/stackprops';
import {calculateBottom} from '@/utils/calculateheight.util';
import * as React from 'react';
import {Dimensions} from 'react-native';
import {Animated, PanResponder} from 'react-native';
import ShopPreview from '../shop/preview.component';

const {height} = Dimensions.get('screen');

function BottomSheet({navigation}: NavigationProps['location']) {
  // const {panResponder, panY} = useDragAnimation();
  const translationY = React.useRef(0);
  const panY = React.useRef(new Animated.Value(0)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gesture) => {
      panY.setValue(gesture.dy);
      translationY.current = gesture.dy;
    },
    onPanResponderRelease: () => {
      // position.extractOffset();
      Animated.spring(panY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();

      if (translationY.current < -heights) {
        navigation.navigate('ShopDetails');
      }
    },
  });
  const heights = height * 0.26;

  return (
    <S.AnimatedView
      style={{
        transform: [{translateY: panY}],
      }}
      bottom={calculateBottom(height)}
      {...panResponder.panHandlers}>
      <S.ShopInfoLayOut>
        <S.HandleSection>
          <S.DragHandle />
        </S.HandleSection>
        <ShopPreview />
      </S.ShopInfoLayOut>
    </S.AnimatedView>
  );
}

export default BottomSheet;
