import settingsState from '@/recoil/settings/settings.recoil';
import {useState} from 'react';
import {useRecoilState} from 'recoil';

export const useSettingsHook = () => {
  const [state, setState] = useRecoilState(settingsState);

  const handleSelectMenu = (selectedId: number) => {
    setState(prevState => ({
      ...prevState,
      selectedMenu: {id: selectedId},
    }));
  };

  return {handleSelectMenu};
};
