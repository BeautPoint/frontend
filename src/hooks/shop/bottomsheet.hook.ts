import shopState from '@/recoil/shop/shop.recoil';
import {MutableRefObject, useRef, useState} from 'react';
import {Animated, PanResponder} from 'react-native';
import {useSetRecoilState, useRecoilValue} from 'recoil';

interface DragHandleParams {
  height: number;
  translationY: MutableRefObject<number>;
  panY: Animated.Value;
}

export const useBottomSheetHook = () => {
  const setShopInfo = useSetRecoilState(shopState);
  const shopInfo = useRecoilValue(shopState);

  console.log('gobackButton : ' + shopInfo.isButtonPressed);
  const previewHandle = (pram: boolean) => {
    setShopInfo(prev => ({
      ...prev,
      previewFullScreen: pram,
    }));
  };

  const goBackButtonHandle = (isPressed: boolean) => {
    setShopInfo(prev => ({...prev, isButtonPressed: isPressed}));
  };

  const dragHandle = ({height, translationY, panY}: DragHandleParams) => {
    const dragStandardHeight = height * 0.26;
    const maxHeight = height * 0.7;
    const minHeight = height * 0.1;
    const maximumTranslateY = minHeight - maxHeight;
    const minimumTranslateY = 0;
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        panY.setOffset(translationY.current);
      },
      onPanResponderMove: (evt, gesture) => {
        panY.setValue(gesture.dy);
        console.log(-dragStandardHeight);
      },
      onPanResponderRelease: (evt, gesture) => {
        panY.flattenOffset();

        if (gesture.dy > dragStandardHeight) {
          springAnimation('down');
          previewHandle(false);
          // goBackButtonHandle(true);
          console.log('내려감');
        } else {
          springAnimation('up');
          previewHandle(true);
          // goBackButtonHandle(false);
        }
      },
    });

    const springAnimation = (direction: 'up' | 'down') => {
      console.log('direction', direction);
      translationY.current =
        direction === 'down' || shopInfo.isButtonPressed
          ? minimumTranslateY
          : maximumTranslateY;
      Animated.spring(panY, {
        toValue: translationY.current,
        useNativeDriver: true,
      }).start();
    };

    return panResponder;
  };

  return {dragHandle, goBackButtonHandle};
};
