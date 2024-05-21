import {useUserInfoHook} from '@/hooks/user/userinfo.hook';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import {Alert} from 'react-native';

/**
 * 이미지 선택 기능
 * - option : 받아오려는 이미지 타입, 사이즈 등 설정
 * - launchImageLibrary : 메인 로직으로 사진첩에 접근한 뒤 이미지 파일을 받아온다.
 *    - didCancel - 이미지 선택 기능 실행 후 취소 버튼 클릭시 true 값을 반환
 *
 * @param {any} updatedProfilePhoto - 프로필 사진 업뎃 api 요청 hook
 * @returns 받아온 이미지 객체를 updatedProfilePhoto hook 으로 보내어 api 요청
 * @err 선택한 이미지 객체의 key인 fileSize가 존재하지 않으면 alert
 */
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
    if (res.didCancel) {
      return;
    }

    if (!res?.assets?.[0]?.fileSize) {
      return Alert.alert('존재하지 않는 이미지 파일입니다.');
    }

    const imageData = {
      name: res?.assets?.[0]?.fileName,
      type: res?.assets?.[0]?.type,
      uri: res?.assets?.[0]?.uri,
    };
    return updatedProfilePhoto(imageData);
  });
};
