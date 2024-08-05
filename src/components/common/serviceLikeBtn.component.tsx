import {useFetchLikes} from '@/api/like/userlikeShop.api';
import HeartIcon from '@/assets/icons/heartIcon.svg';
import {useAuthHook} from '@/hooks/auth/auth.hook';
import {NavigationProps} from '@/types/stackprops';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Pressable} from 'react-native';

interface ServiceLikeButtonProps {
  initialLiked?: boolean;
  place_id: string;
  category: string;
  top?: number;
  right?: number;
}

function ServiceLikeButton({
  place_id,
  category,
  right,
  top,
}: ServiceLikeButtonProps) {
  const {accessToken} = useAuthHook();
  const navigation = useNavigation<NavigationProps['login']['navigation']>();
  // const {addLike} = useLikeShops();
  const {addLike, likeData, removeLike} = useFetchLikes();
  const isLiked =
    Array.isArray(likeData) &&
    likeData.some(item => item.place_id === place_id);
  const handlePress = () => {
    console.log(accessToken);
    const placeInfo = {place_id, category};
    if (!accessToken) {
      return navigation.navigate('Login');
    }

    if (isLiked) {
      console.log('like place id _ :', place_id);
      return removeLike(place_id);
    }

    console.log('placeInfoplaceInfoplaceInfo :', placeInfo);
    addLike(placeInfo);
  };

  return (
    <Pressable
      style={{
        width: 25,
        height: 25,
        position: 'absolute',
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        right,
        top,
      }}
      onPress={handlePress}>
      <HeartIcon
        fill={isLiked ? '#c82804' : '#ffffff'}
        strokeWidth="1"
        color={isLiked ? '#c82804' : '#010101'}
        width="20px"
        height="20px"
      />
    </Pressable>
  );
}

export default ServiceLikeButton;
