import * as S from '@/styles/common/dropdown.style';
import {AppText} from '@/styles/global.style';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Shadow} from 'react-native-shadow-2';

const {width, height} = Dimensions.get('screen');

function DropDown({dropDownHeight}: {dropDownHeight: string}) {
  return (
    <S.DropDownLayOut width={width} height={height}>
      <S.SelectBox height={dropDownHeight}>
        <AppText size="13px" color="#8b8b8b">
          게시글 신고
        </AppText>
        <AppText size="13px" color="#8b8b8b">
          사용자 신고
        </AppText>
      </S.SelectBox>
      <S.BoxShadow height={dropDownHeight} />
    </S.DropDownLayOut>
  );
}

export default DropDown;
