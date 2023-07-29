import confirmModalState from '@/recoil/modal/confirm.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/modals/bottomup.style';
import * as React from 'react';
import {useRecoilState} from 'recoil';

interface BottomModalProps {
  Component?: React.ComponentType;
}

function BottomUpModal({Component}: BottomModalProps) {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState);
  const modalHandle = () => {
    setConfirmModal(prev => ({
      ...prev,
      modalOpen: false,
    }));
  };
  return (
    <S.BottomUpLayOut>
      <S.BackDrop onPress={() => modalHandle()} />
      <S.ModalWindow>{Component ? <Component /> : null}</S.ModalWindow>
    </S.BottomUpLayOut>
  );
}

export default BottomUpModal;
