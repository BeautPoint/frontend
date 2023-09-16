import communityState from '@/recoil/community/community.recoil';
import {useRecoilState} from 'recoil';

export const useCommunityPosts = () => {
  const [state, setState] = useRecoilState(communityState);

  const likeButtonHandle = (id: number) => {
    setState(prev => ({
      ...prev,
      likeButton: state.likeButton === id ? '' : id,
    }));
  };
  return {likeButtonHandle};
};
