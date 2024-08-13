import React, {useState, useRef, useEffect} from 'react';
import {Animated, PanResponder, Dimensions, View} from 'react-native';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/map/bottomSheet.style';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import shopState from '@/recoil/shop/shop.recoil';

function MapBottomSheet({navigation}: NavigationProps['location']) {
  const {height} = Dimensions.get('window');
  const [sheetHeight, setSheetHeight] = useState(height * 0.15);
  const [draggedHeight] = useState(new Animated.Value(sheetHeight));
  const {selectedService} = useRecoilValue(shopState);

  const onHeightExceed = () => {
    navigation.navigate('ServiceDetails');
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newHeight = height * 0.18 - gestureState.dy;
        if (newHeight <= height && newHeight >= height * 0.18) {
          draggedHeight.setValue(newHeight);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        const finalHeight = height * 0.18 - gestureState.dy;
        if (finalHeight >= height * 0.4) {
          onHeightExceed();
        }

        Animated.spring(draggedHeight, {
          toValue: height * 0.18,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <Animated.View
      style={{
        height: draggedHeight,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: '#ffffff',
        bottom: 0,
        right: 0,
        left: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      {...panResponder.panHandlers}>
      <S.DragHandleBox>
        <S.DragHandle />
      </S.DragHandleBox>
      <S.ServiceInfo>
        <S.Title>
          <AppText numberOfLines={1} size="20px" weight="Bold">
            {selectedService.name}
          </AppText>
        </S.Title>
        <S.Adress>
          <AppText color="#898989">{selectedService.formattedAddress}</AppText>
        </S.Adress>
      </S.ServiceInfo>
    </Animated.View>
  );
}

export default MapBottomSheet;

export const useBottomSheetHook = () => {
  const [isSheetOpen, setIsOpen] = useState(false);
  const setShowSheet = (value: boolean) => {
    setIsOpen(value);
  };
  return {setShowSheet, isSheetOpen};
};
