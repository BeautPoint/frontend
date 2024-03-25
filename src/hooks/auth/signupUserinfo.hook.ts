import {useAuthQuery} from '@/api/auth/auth.api';
import signupState from '@/recoil/auth/signupInfoForm.recoil';
import confirmModalState from '@/recoil/modal/confirm.recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState, useRecoilState} from 'recoil';

const useSignupUserInfo = () => {
  const setUserInfoForm = useSetRecoilState(signupState);
  const [navState, setNavState] = useRecoilState(navigationState);
  const userInfoForm = useRecoilValue(signupState);
  const confirmForm = useRecoilValue(confirmModalState);
  const [signupUserState, setState] = useRecoilState(signupState);
  const [userBirth, setUserBirth] = useState<Date>();
  const [isActive, setIsActive] = useState(false);
  const [userGender, setUserGender] = useState<string | null>(null);
  const {signupApi} = useAuthQuery();

  useEffect(() => {
    if (userGender && userBirth) {
      setUserInfoForm(prevState => ({
        ...prevState,
        nextButtonActive: true,
      }));
    } else {
      setIsActive(false);
    }
  }, [userInfoForm.nextButtonActive, setUserInfoForm, userBirth, userGender]);

  const getUserGender = (gender: string) => {
    setUserGender(gender);
    setIsActive(true);
  };

  const datePickerHandle = (date: string | Date) => {
    const userYear = new Date(date).getFullYear();
    const userMonth = new Date(date).getMonth() + 1;
    const userDate = new Date(date).getDate();
    setIsActive(true);
    const birthDate = new Date(userYear, userMonth, userDate);
    console.log(userInfoForm.birthDate);
    setUserInfoForm(prevState => ({
      ...prevState,
      birthInfo: prevState.birthInfo.map(item => {
        let dateValue = '';
        switch (item.id) {
          case 0:
            dateValue = userYear.toString();
            break;
          case 1:
            dateValue = userMonth.toString();
            break;
          case 2:
            dateValue = userDate.toString();
            break;
        }
        return {...item, dateValue};
      }),
    }));
    console.log('생일 :' + birthDate);
    setUserBirth(new Date(userYear, userMonth - 1, userDate + 1));
  };

  const infoCollectionHandle = (progressStep: number) => {
    const signupUserInfo = {birthDate: userBirth, gender: userGender};
    console.log(signupUserInfo);
    if (progressStep < 3) {
      const updateStep = progressStep + 1;

      setUserInfoForm(prevState => ({
        ...prevState,
        nextButtonActive: false,
        progressStep: updateStep,
      }));
    }
    setUserInfoForm(prev => {
      if (prev.selectedTags.length) {
        return {...prev, nextButtonActive: true};
      }
      return {...prev, nextButtonActive: false};
    });
    if (progressStep === 3) {
      // signupApi(signupUserInfo);
    }
  };

  interface TagProps {
    id: number;
    description: string;
  }

  const tagSelectionHandle = (
    item: TagProps,
    key: 'selectedRequirement' | 'selectedServices',
  ) => {
    setUserInfoForm(prev => {
      const isTagIncluded = prev[key].some(service => service.id === item.id);

      const updatedSelectedTags = isTagIncluded
        ? prev[key].filter(service => service.id !== item.id)
        : [...prev[key], item];

      /** tag 상태 값이 없는경우 버튼 비활성화 */
      return {
        ...prev,
        [key]: updatedSelectedTags,
        nextButtonActive: updatedSelectedTags.length > 0,
      };
    });
  };

  const getUserSignupData = (
    key: 'birthDate' | 'gender',
    userData: Date | string,
  ) => {
    setUserInfoForm(prevState => {
      const updatedInfo = {
        ...prevState.signupUserInfo,
        [key]: userData,
      };

      return {...prevState, signupUserInfo: updatedInfo};
    });

    console.log('유저 : ', userInfoForm.signupUserInfo);
  };

  const handleSubmit = () => {
    // step < 3 ? setStep(step + 1) : navigation.reset({routes: [{name: 'Home'}]});
    const stepNumber = signupUserState.progressStep;
    infoCollectionHandle(stepNumber);
    setNavState(prevState => {
      const updateState = navState.singupScreen
        ? false
        : signupUserState.progressStep === 3;
      return {
        ...prevState,
        resetToHomeScreen: signupUserState.progressStep === 3,
      };
    });

    const optionalConsents = confirmForm.optionalConsents;

    const userData = {
      ...userInfoForm.signupUserInfo,
      userConsents: 'Y',
      optionalConsents,
    };

    if (stepNumber === 3) {
      return signupApi(userData);
    }
  };

  return {
    datePickerHandle,
    userBirth,
    isActive,
    getUserGender,
    tagSelectionHandle,
    infoCollectionHandle,
    getUserSignupData,
    handleSubmit,
  };
};

export {useSignupUserInfo};
