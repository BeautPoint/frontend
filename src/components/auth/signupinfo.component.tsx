import {useBoolean} from '@/hooks/common/boolean.hooks';
import * as S from '@/styles/auth/userinfoform.style';
import {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import DownIcon from '@/assets/icons/downIcon.svg';
import {AppText} from '@/styles/global.style';
import {useSignupUserInfo} from '@/hooks/auth/signupUserinfo.hook';
import {useRecoilValue} from 'recoil';
import signupState from '@/recoil/auth/signupInfoForm.recoil';

function SignupInfoForm() {
  const {datePickerHandle, isActive, getUserGender} = useSignupUserInfo();
  const pickerisOpen = useBoolean();
  const [isOpen, setIsOpen] = useState(false);
  // const isPress = useBoolean();
  const [isPress, setIsPress] = useState(2);
  const defaultBirth = new Date(2001, 1, 1);

  const userInfoForm = useRecoilValue(signupState);

  console.log(userInfoForm.birthInfo);
  console.log(isActive);

  const onPressHandle = () => {
    pickerisOpen.valueHandle();
  };

  const genderButtonHandle = (id: number, name: string) => {
    getUserGender(name);
    setIsPress(id);
  };
  return (
    <S.UserInfoFormLayOut>
      <S.DescriptionBox>
        <AppText size="20px">가입을 축하드려요!</AppText>
        <AppText size="20px">간단한 회원 정보를 입력해주세요</AppText>
      </S.DescriptionBox>
      <S.ProfileDetail>
        <S.Label>
          <AppText>생년월일</AppText>
        </S.Label>
        <S.DateInputBox>
          {userInfoForm.birthInfo.map(li => (
            <S.DateInput key={li.id} onPress={() => onPressHandle()}>
              <AppText color="#646770">{li.dateValue || li.name}</AppText>
              <S.InputIcon>
                <DownIcon />
              </S.InputIcon>
            </S.DateInput>
          ))}
        </S.DateInputBox>
      </S.ProfileDetail>
      <S.GenderOptionBox>
        <S.Label>
          <AppText>성별</AppText>
        </S.Label>
        {userInfoForm.genderInfo.map((li, index) => (
          <S.GenderOption
            key={li.id}
            onPress={() => genderButtonHandle(li.id, li.name)}
            isPressed={isPress === li.id}>
            <AppText
              color={isPress === li.id ? '#619bff' : '#5A6068'}
              weight={isPress === li.id ? 'Bold' : ''}>
              {li.name}
            </AppText>
          </S.GenderOption>
        ))}
      </S.GenderOptionBox>
      <DatePicker
        modal
        open={pickerisOpen.value}
        mode={'date'}
        date={defaultBirth}
        onConfirm={date => {
          datePickerHandle(date);
        }}
        onCancel={() => {
          setIsOpen(false);
        }}
      />
    </S.UserInfoFormLayOut>
  );
}

export default SignupInfoForm;
