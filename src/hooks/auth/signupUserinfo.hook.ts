import {useNavigation} from '@react-navigation/native';
import {useAuthQuery} from '@/api/auth/auth.api';
import signupState from '@/recoil/auth/signupInfoForm.recoil';
import confirmModalState from '@/recoil/modal/confirm.recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState, useRecoilState} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSignupUserInfo = () => {
  const [signupUserState, setSignupState] = useRecoilState(signupState);
  const [navState, setNavState] = useRecoilState(navigationState);
  const confirmForm = useRecoilValue(confirmModalState);
  const [userBirth, setUserBirth] = useState<Date>();
  const [isActive, setIsActive] = useState(false);
  const [userGender, setUserGender] = useState<string | null>(null);
  const {signupApi} = useAuthQuery();
  const navigation = useNavigation();

  useEffect(() => {
    if (userGender && userBirth) {
      setSignupState(prevState => ({
        ...prevState,
        nextButtonActive: true,
      }));
    } else {
      setIsActive(false);
    }
  }, [signupUserState.nextButtonActive, setSignupState, userBirth, userGender]);

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
    console.log(signupUserState.birthDate);
    setSignupState(prevState => ({
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

      setSignupState(prevState => ({
        ...prevState,
        nextButtonActive: false,
        progressStep: updateStep,
      }));
    }
    setSignupState(prev => {
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
    setSignupState(prev => {
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
    setSignupState(prevState => {
      const updatedInfo = {
        ...prevState.signupUserInfo,
        [key]: userData,
      };

      return {...prevState, signupUserInfo: updatedInfo};
    });

    console.log('유저 : ', signupUserState.signupUserInfo);
  };

  const handleSubmit = async () => {
    // step < 3 ? setStep(step + 1) : navigation.reset({routes: [{name: 'Home'}]});
    const stepNumber = signupUserState.progressStep;
    navigation.reset({routes: [{name: 'Home' as never}]});
    if (stepNumber !== 3) {
      return;
    }

    infoCollectionHandle(stepNumber);

    const optionalConsents = confirmForm.optionalConsents;

    const userData = {
      ...signupUserState.signupUserInfo,
      userConsents: 'Y',
      optionalConsents,
    };
    await signupApi(userData);
    setNavState(prevState => ({
      ...prevState,
      singupScreen: false,
      resetToHomeScreen: true,
    }));

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
