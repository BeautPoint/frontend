import {useState, useRef} from 'react';
import {Animated, PanResponder} from 'react-native';
import {NavigationProps} from '@/types/stackprops';

export const useDragAnimation = () => {
  const translationY = useRef(0);
  const panY = useRef(new Animated.Value(0)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gesture) => {
      panY.setValue(gesture.dy);
      //   gesture.dy > 180 && navigation.navigate('ShopDetail');
      translationY.current = gesture.dy;
    },
    onPanResponderRelease: () => {
      // position.extractOffset();
      Animated.spring(panY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    },
  });

  return {panResponder, panY, translationY};
};
