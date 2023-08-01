import confirmModalState from '@/recoil/modal/confirm.recoil';
import {useSetRecoilState} from 'recoil';

export const useConfirmHooks = () => {
  const setConfirmState = useSetRecoilState(confirmModalState);

  const checkBoxHandle = (id: number) => {
    setConfirmState(prevState => ({
      ...prevState,
      agreeBody: prevState.agreeBody.map((item, i) => ({
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked,
      })),
    }));
  };

  const allCheckBoxHandle = () => {
    setConfirmState(prevState => ({
      ...prevState,
      agreeBody: prevState.agreeBody.map(item => ({
        ...item,
        isChecked: !item.isChecked,
      })),
    }));
  };

  return {checkBoxHandle, allCheckBoxHandle};
};
