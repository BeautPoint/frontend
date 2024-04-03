import {AppText} from '@/styles/global.style';
import * as S from '@/styles/screens/signup.style';
import BackIcon from '@/assets/icons/backIcon.svg';
import {Dimensions} from 'react-native';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import signupState from '@/recoil/auth/signupInfoForm.recoil';
import ServiceInterestForm from '@/components/auth/signup/serviceinterestform';
import RequirementForm from '@/components/auth/signup/requirementform.component';
import {useState} from 'react';
import SignupInfoForm from '@/components/auth/signupinfo.component';
import {useSignupUserInfo} from '@/hooks/auth/signupUserinfo.hook';
import navigationState from '@/recoil/navigation/navigation.recoil';

function SignupScreen({navigation}: NavigationProps['signup']) {
  const {width} = Dimensions.get('screen');
  const [step, setStep] = useState(1);
  const sigupform = useRecoilValue(signupState);
  const navState = useRecoilValue(navigationState);
  const userInfoForm = useSetRecoilState(signupState);
  const {infoCollectionHandle, handleSubmit} = useSignupUserInfo();

  const NextButtonHandle = () => {
    // step < 3 ? setStep(step + 1) : navigation.reset({routes: [{name: 'Home'}]});
    const stepNumber = sigupform.progressStep;
    infoCollectionHandle(stepNumber);
    handleSubmit();
    if (navState.resetToHomeScreen) {
      navigation.reset({routes: [{name: 'Home'}]});
    }
  };

  const BackButtonHandle = () => {
    const updateStep = sigupform.progressStep - 1;
    sigupform.progressStep < 2
      ? navigation.goBack()
      : userInfoForm(prevState => ({
          ...prevState,
          nextButtonActive: false,
          progressStep: updateStep,
        }));
  };

  return (
    <S.SignupLayOut>
      <S.MoveButtonBox>
        <S.BackButton onPress={() => BackButtonHandle()}>
          <BackIcon />
        </S.BackButton>
        {sigupform.progressStep > 1 && (
          <S.SkipButton onPress={() => NextButtonHandle()}>
            <AppText color="#8C939C">건너뛰기</AppText>
          </S.SkipButton>
        )}
      </S.MoveButtonBox>
      <S.ProgressBox>
        <S.StepProgressBar />
        <S.ActiveStepBar width={sigupform.progressStep} />
      </S.ProgressBox>
      {sigupform.progressStep === 1 && <SignupInfoForm />}
      {sigupform.progressStep === 2 && <ServiceInterestForm />}
      {sigupform.progressStep === 3 && <RequirementForm />}
      {/* <RequirementForm /> */}
      <S.NextButtonBox width={width}>
        <S.NextButton
          disabled={!sigupform.nextButtonActive}
          background={sigupform.nextButtonActive ? '#619BFF' : '#c2d8ff'}
          onPress={() => NextButtonHandle()}>
          <AppText color="#ffffff" weight="Bold" size="16px">
            {sigupform.progressStep === 3 ? '완료' : '다음'}
          </AppText>
        </S.NextButton>
      </S.NextButtonBox>
    </S.SignupLayOut>
  );
}

export default SignupScreen;
