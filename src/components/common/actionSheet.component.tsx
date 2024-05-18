import {useActionSheetHook} from '@/hooks/common/actionSheet.hooks';
import actionSheetState from '@/recoil/modal/actionSheet.recoil';
import * as S from '@/styles/common/actionSheet.style';
import {AppText} from '@/styles/global.style';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';

function ActionSheet() {
  const [isPressed, setIsPressed] = useState<number | null>(null);

  const {menuList, isOpen, isPressedMenu} = useRecoilValue(actionSheetState);
  const {handleMenuSelection, openActionSheet} = useActionSheetHook();
  const handleOnPress = (pressEvent: () => void | null) => {
    if (pressEvent) pressEvent();
    return openActionSheet(false);
  };

  return (
    <S.Layout display={isOpen}>
      <S.Overlay onPress={() => openActionSheet(false)}>
        {menuList.map(item => {
          return (
            <S.ActionButton
              key={item.id}
              onPressIn={() => handleMenuSelection(item.id)}
              onPressOut={() => handleMenuSelection(null)}
              onPress={() => handleOnPress(item.pressEvent)}
              hover={isPressedMenu === item.id}
              background={item.id === 0 ? '#ffffff' : 'rgba(255,255,255,0.84)'}
              borderRadius={item.id}
              marginTop={item.id}>
              <AppText
                color={item.id === 2 || item.id === 9 ? '#FD4E44' : '#004bec'}
                weight={item.id === 0 ? 'semiBold' : ''}
                size="18px">
                {item.title}
              </AppText>
            </S.ActionButton>
          );
        })}
      </S.Overlay>
    </S.Layout>
  );
}

export default ActionSheet;
