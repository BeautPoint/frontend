import navigationState from '@/recoil/navigation/navigation.recoil';
import {useRecoilState} from 'recoil';

export const useNavigationStateHook = () => {
  const [state, setState] = useRecoilState(navigationState);

  const changeHeaderTitle = (title: string) => {
    return setState(prevState => ({
      ...prevState,
      headerTitle: title,
    }));
  };

  return {changeHeaderTitle};
};
