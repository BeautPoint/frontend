import * as S from '@/styles/community/create/createPost.style';
import {AppText} from '@/styles/global.style';
import {NavigationProps} from '@/types/stackprops';
import BackIcnon from '@/assets/icons/backIcon.svg';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import {Platform} from 'react-native';
import {useState} from 'react';

function CreatePostScreen({navigation}: NavigationProps['community']) {
  const {
    postCategoies,
    serviceCategoies,
    selectedPostCategory,
    createPostData,
    detailPostApi,
    isEditMode,
    editPostData,
  } = useRecoilValue(communityState);
  const {
    postCategoryHandle,
    postInputHandle,
    editTextInput,
    submitPost,
    handleIsEditMode,
  } = useCommunityPosts();

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const postData = isEditMode ? editPostData : createPostData;
  console.log('postData :', postData);
  const handleSubmit = () => {
    const type = isEditMode ? 'edit' : 'create';
    submitPost(postData, type);
    navigation.goBack();
    handleIsEditMode(false);
  };

  const handleTextChange = (text: string, type: 'title' | 'content') => {
    isEditMode
      ? editTextInput(detailPostApi.post_id, text, type)
      : postInputHandle(text, type);
    const postData = isEditMode ? editPostData : createPostData;
    const {title, content} = postData;
    const isEnabled = title !== '' && content !== '';
    setIsSubmitEnabled(isEnabled);
  };

  return (
    <S.CreatePostLayout>
      <S.ScreenHeader>
        <S.BackButton onPress={() => navigation.goBack()}>
          <BackIcnon />
        </S.BackButton>
        <AppText>글쓰기</AppText>
        <S.SubmitButton onPress={handleSubmit} disabled={!isSubmitEnabled}>
          <AppText color={isSubmitEnabled ? '#000000' : '#8C939C'}>
            완료
          </AppText>
        </S.SubmitButton>
      </S.ScreenHeader>
      <S.Categories>
        <S.CategoryTitle>
          <AppText size="18px">카테고리를 선택해주세요</AppText>
        </S.CategoryTitle>
        <S.ButtonBox length={postCategoies.length}>
          {postCategoies.map(category => (
            <S.CategorySelectedButton
              marginRight={'10px'}
              onPress={() =>
                postCategoryHandle(category.postCategory, 'postCategory')
              }
              key={category.id}>
              <AppText size="12px" color="#5A6068">
                {category.postCategory}
              </AppText>
            </S.CategorySelectedButton>
          ))}
        </S.ButtonBox>
      </S.Categories>
      <S.Categories>
        <S.CategoryTitle>
          <AppText size="18px">관련 시술 카테고리를 선택해주세요.</AppText>
        </S.CategoryTitle>
        <S.ButtonBox length={serviceCategoies.length}>
          {serviceCategoies.map(category => (
            <S.CategorySelectedButton
              onPress={() =>
                postCategoryHandle(category.serviceCategory, 'serviceCategory')
              }
              key={category.id}>
              <AppText size="12px" color="#5A6068">
                {category.serviceCategory}
              </AppText>
            </S.CategorySelectedButton>
          ))}
        </S.ButtonBox>
      </S.Categories>
      <S.PostBodyEditor>
        <S.PostTitleInput
          platformMargin={Platform.OS}
          placeholder="제목을 입력해주세요"
          onChangeText={(text: string) => handleTextChange(text, 'title')}
          defaultValue={detailPostApi?.title}
        />
        <S.TextForm
          placeholder="본문을 입력해주세요."
          textAlignVertical="top"
          multiline={true}
          onChangeText={(text: string) => handleTextChange(text, 'content')}
          defaultValue={detailPostApi?.content}
        />
      </S.PostBodyEditor>
    </S.CreatePostLayout>
  );
}

export default CreatePostScreen;
