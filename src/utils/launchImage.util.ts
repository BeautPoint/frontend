import {useUserInfoHook} from '@/hooks/user/userinfo.hook';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import {Alert} from 'react-native';

export const leanchSelectImage = async (
  updatedProfilePhoto: (imageData: any) => Promise<void>,
) => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8,
    selectionLimit: 5,
  };
  await launchImageLibrary(options, res => {
    if (!res?.assets?.[0]?.fileSize) {
      return Alert.alert('존재하지 않는 이미지 파일입니다.');
    }

    const imageData = {
      name: res?.assets?.[0]?.fileName,
      type: res?.assets?.[0]?.type,
      uri: res?.assets?.[0]?.uri,
    };
    updatedProfilePhoto(imageData);
  });
};
