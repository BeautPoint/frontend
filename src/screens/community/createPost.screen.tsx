import * as S from '@/styles/community/create/createPost.style';
import {AppText} from '@/styles/global.style';
import {NavigationProps} from '@/types/stackprops';
import BackIcnon from '@/assets/icons/backIcon.svg';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import {Platform, SafeAreaView} from 'react-native';
import {useEffect, useState} from 'react';

function CreatePostScreen({navigation}: NavigationProps['community']) {
  const {postCategoies, serviceCategoies, detailPostData, isEditMode} =
    useRecoilValue(communityState);
  const {postCategoryHandle, submitPost, handleIsEditMode, setPostDetails} =
    useCommunityPosts();

  const initialInputValues = {
    title: isEditMode ? detailPostData.title : '',
    content: isEditMode ? detailPostData.content : '',
    ...(isEditMode && {post_id: detailPostData.post_id}),
  };

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [textInputValue, setTextInput] = useState(initialInputValues);

  const handleSubmit = () => {
    const type = isEditMode ? 'edit' : 'create';
    submitPost(textInputValue, type);
    setPostDetails({...detailPostData, ...textInputValue});
    navigation.goBack();
    handleIsEditMode(false);
  };

  const handleTextChange = (text: string, type: 'title' | 'content') => {
    const updatedTextInput = {...textInputValue, [type]: text};
    setTextInput(updatedTextInput);

    const {title, content} = updatedTextInput;
    const isEnabled = title !== '' && content !== '';
    setIsSubmitEnabled(isEditMode ? isEditMode : isEnabled);
  };

  return (
    <S.CreatePostLayout>
      <SafeAreaView />
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
          defaultValue={detailPostData?.title}
        />
        <S.TextForm
          placeholder="본문을 입력해주세요."
          textAlignVertical="top"
          multiline={true}
          onChangeText={(text: string) => handleTextChange(text, 'content')}
          defaultValue={detailPostData?.content}
        />
      </S.PostBodyEditor>
    </S.CreatePostLayout>
  );
}

export default CreatePostScreen;
