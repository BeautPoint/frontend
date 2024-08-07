import {usePostComments} from '@/hooks/community/comments.hook';
import communityState from '@/recoil/community/community.recoil';
import * as S from '@/styles/community/detail/commentForm';
import {useRecoilValue} from 'recoil';
import SendIcon from '@/assets/icons/sendIcon.svg';
import {NavigationProps} from '@/types/stackprops';
import {useAuthHook} from '@/hooks/auth/auth.hook';
import {useRef} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

function CommentForm({navigation}: NavigationProps['community']) {
  const {handleChangeText, handleSubmit} = usePostComments();
  const {detailPostData, commentsValue} = useRecoilValue(communityState);
  const {accessToken} = useAuthHook();
  const onChangeText = (text: string) => {
    accessToken
      ? handleChangeText(detailPostData.post_id, text)
      : navigation.navigate('Login');
  };

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <S.CommentFormLayout>
      <S.CommentInput
        onChangeText={(text: string) => onChangeText(text)}
        placeholder="댓글 작성하기"
        multiline
        value={commentsValue.content}
        numberOfLines={2}
      />
      {commentsValue.content && (
        <S.SubmitButton onPress={onSubmit}>
          <SendIcon width={24} height={24} />
        </S.SubmitButton>
      )}
    </S.CommentFormLayout>
  );
}

export default CommentForm;
