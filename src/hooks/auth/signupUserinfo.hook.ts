import signupState from '@/recoil/auth/signupInfoForm.recoil';
import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';

const useSignupUserInfo = () => {
  const setUserInfoForm = useSetRecoilState(signupState);
  const userInfoForm = useRecoilValue(signupState);
  const [userBirth, setUserBirth] = useState<Date>();
  const [isActive, setIsActive] = useState(false);
  const [userGender, setUserGender] = useState<string | null>(null);

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
    setUserBirth(new Date(userYear, userMonth - 1, userDate + 1));
  };

  const nextButtonHandle = () => {
    setUserInfoForm(prev => {
      if (prev.selectedTags.length) {
        return {...prev, nextButtonActive: true};
      }
      return {...prev, nextButtonActive: false};
    });
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

  return {
    datePickerHandle,
    userBirth,
    isActive,
    getUserGender,
    tagSelectionHandle,
  };
};

export {useSignupUserInfo};
