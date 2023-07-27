import {useConfirmHooks} from '@/hooks/auth/confirmForm.hook';
import confirmModalState from '@/recoil/modal/confirm.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/modals/confirm.style';
import {NavigationProps} from '@/types/stackprops';
import {useNavigation} from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useRecoilValue} from 'recoil';

function ConfirmForm() {
  const {checkBoxStyle, agreeBody} = useRecoilValue(confirmModalState);

  const {checkBoxHandle, allCheckBoxHandle} = useConfirmHooks();
  const navigation = useNavigation();
  return (
    <S.ConfirmLayOut>
      <S.Title>
        <AppText size="20px">약관에 동의 해주세요.</AppText>
      </S.Title>
      <S.AgreeAllBox>
        <BouncyCheckbox {...checkBoxStyle} onPress={allCheckBoxHandle} />
        <AppText>모두 동의합니다.</AppText>
        <S.AgreeAllSubBox>
          <AppText color="#ACB2BE">
            서비스 이용을 위해 아래약관에 모두 동의합니다.
          </AppText>
        </S.AgreeAllSubBox>
      </S.AgreeAllBox>
      {agreeBody.map(list => {
        return (
          <S.AgreeBox key={list.id}>
            <S.AgreeItemWrapper>
              <BouncyCheckbox
                isChecked={list.isChecked}
                {...checkBoxStyle}
                disableBuiltInState={true}
                onPress={() => checkBoxHandle(list.id)}
              />
              <AppText>{list.text}</AppText>
            </S.AgreeItemWrapper>
            {list.id !== 0 ? (
              <S.ViewBtn>
                <AppText color="#878787">보기</AppText>
              </S.ViewBtn>
            ) : null}
          </S.AgreeBox>
        );
      })}
      <S.ConfirmButton onPress={() => navigation.navigate('Signup')}>
        <AppText color="#ffffff">가입하기</AppText>
      </S.ConfirmButton>
    </S.ConfirmLayOut>
  );
}

export default ConfirmForm;
