import confirmModalState from '@/recoil/modal/confirm.recoil';
import React from 'react';
import {useRecoilValue} from 'recoil';
import ConfirmForm from '@/components/auth/confirmform.component';
import BottomUpModal from '@/components/modals/bottomup.component';
import {NavigationProps} from '@/types/stackprops';

function GlobalModals({navigation}: NavigationProps['home']) {
  const {modalOpen} = useRecoilValue(confirmModalState);

  return (
    <React.Fragment>
      {modalOpen ? <BottomUpModal Component={ConfirmForm} /> : null}
    </React.Fragment>
  );
}

export default GlobalModals;
