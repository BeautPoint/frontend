import confirmModalState from '@/recoil/modal/confirm.recoil';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {useRecoilState, useSetRecoilState} from 'recoil';

export const useConfirmHooks = () => {
  const [state, setConfirmState] = useRecoilState(confirmModalState);
  const setNavigationState = useSetRecoilState(navigationState);

 /**
   * checkBoxHandle - 체크박스를 클릭할 때마다 해당 체크박스의 상태를 토글합니다.
   * 
   * - 주어진 id와 일치하는 항목의 isChecked 값을 반전시킵니다.
   * - 이를 통해 사용자 인터페이스에서 체크박스의 선택 상태를 업데이트합니다.
   */

  const checkBoxHandle = (id: number) => {
    setConfirmState(prevState => ({
      ...prevState,
      agreeBody: prevState.agreeBody.map((item, i) => ({
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked,
      })),
    }));
  };

  /**
   * allCheckBoxHandle - 특정 액션을 트리거할 때 모든 체크박스의 상태를 토글합니다.
   * - 이는 사용자가 '모두 선택' 또는 '모두 선택 해제' 기능을 사용할 때 활용됩니다.
   */

  const allCheckBoxHandle = () => {
    setConfirmState(prevState => ({
      ...prevState,
      agreeBody: prevState.agreeBody.map(item => ({
        ...item,
        isChecked: !item.isChecked,
      })),
    }));
  };

    /**
   * submitHandle - 제출 버튼 클릭 시 실행되는 함수입니다.
   * - 필수 동의 항목을 기반으로 다음 화면으로 넘어가기 위한 네비게이션 상태를 설정합니다.
   * - 선택적 동의가 체크되었는지 확인하고, 이에 따라 optionalConsents 상태를 업데이트합니다.
   * -  또한, 현재 모달을 닫습니다.
   */

  const submitHandle = () => {
    const isOptionalConsentChecked = state.agreeBody.some(
      item => item.id === 3 && item.isChecked,
    );

    setNavigationState(prevState => ({
      ...prevState,
      singupScreen: true,
    }));

    setConfirmState(prevState => ({
      ...prevState,
      modalOpen: false,
      optionalConsents: isOptionalConsentChecked ? 'Y' : 'N',
    }));
  };

  return {checkBoxHandle, allCheckBoxHandle, submitHandle};
};
