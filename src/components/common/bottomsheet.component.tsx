import * as S from '@/styles/common/bottomsheet.style';
import {NavigationProps} from '@/types/stackprops';
import {calculateBottom} from '@/utils/calculateheight.util';
import * as React from 'react';
import {Dimensions, Platform} from 'react-native';
import {Animated, PanResponder} from 'react-native';
import ShopPreview from '../shop/preview.component';
import ShopDetailScreen from '@/screens/shop/detail.screen';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import shopState from '@/recoil/shop/shop.recoil';
import {useBottomSheetHook} from '@/hooks/shop/bottomsheet.hook';
import {getBottomPositionByHeight} from '@/utils/bottomSheet.util';
import bottomSheetState from '@/recoil/modal/bottomsheet.recoil';

const {height} = Dimensions.get('screen');

function BottomSheet({navigation}: NavigationProps['location']) {
  // const {panResponder, panY} = useDragAnimation();
  const bottomValue = getBottomPositionByHeight(height);
  const dragStandardHeight = height * 0.26;
  const maxHeight = height * 0.7;
  const minHeight = height * 0.1;
  const maximumTranslateY = minHeight - maxHeight;
  const minimumTranslateY = 0;

  const {previewFullScreen, isButtonPressed} = useRecoilValue(shopState);
  const {isOpen} = useRecoilValue(bottomSheetState);
  const {dragHandle} = useBottomSheetHook();
  const setShopInfo = useSetRecoilState(shopState);
  const translationY = React.useRef(0);
  const panY = React.useRef(new Animated.Value(0)).current;
  const panResponder = dragHandle({
    height,
    translationY,
    panY,
  });

  return (
    <S.AnimatedView
      display={isOpen}
      style={{
        transform: [
          {
            translateY: panY.interpolate({
              inputRange: [maximumTranslateY, minimumTranslateY],
              outputRange: [maximumTranslateY, minimumTranslateY],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}
      bottom={bottomValue}
      {...panResponder.panHandlers}>
      <S.ShopInfoLayOut>
        <S.HandleSection>
          {!previewFullScreen ? <S.DragHandle /> : null}
        </S.HandleSection>
        {previewFullScreen ? (
          <ShopDetailScreen navigation={navigation} />
        ) : (
          <ShopPreview />
        )}
      </S.ShopInfoLayOut>
    </S.AnimatedView>
  );
}

export default BottomSheet;
