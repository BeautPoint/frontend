import * as S from '@/styles/community/postdetail.style';
import CommunityUserInfo from '@/components/community/userinfo.component';
import {AppText} from '@/styles/global.style';
import PostComments from './comments.component';
import DetailHeader from '@/components/community/detail/detailHeader.component';
import {NavigationProps} from '@/types/stackprops';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {ReportDropdownBackground} from '@/styles/screens/community.style';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CommentForm from './commentForm';
import {useRef} from 'react';
import {useEffect} from 'react';

function CommunityPostDetail({navigation}: NavigationProps['community']) {
  const {detailPostData, showReportDropdown, isEditMode, postCommentsData} =
    useRecoilValue(communityState);
  const {dropdownBackgroundHandle} = useCommunityPosts();
  isEditMode && navigation.navigate('CreatePost');
  const {height} = Dimensions.get('screen');
  const scrollViewRef = useRef<ScrollView>(null);

  const heightCalcurate = (type: string) => {
    type === 'post' ? height * 0.65 : height * 0.3;
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  }, [postCommentsData]);

  return (
    <S.DetailLayout>
      <DetailHeader navigation={navigation} />
      <S.PostMainSection>
        <CommunityUserInfo
          postId={detailPostData?.post_id}
          nickname={detailPostData?.nickName}
          viewCount={detailPostData?.viewCount}
          profileImage={detailPostData?.profile_image}
          createdAt={detailPostData?.createdAt}
        />
        <S.MainBox>
          <S.PostTitle>
            <AppText weight="SemiBold" size="18px">
              {detailPostData?.title}
            </AppText>
          </S.PostTitle>
          <S.PostBody>
            <AppText>{detailPostData?.content}</AppText>
          </S.PostBody>
        </S.MainBox>
        {showReportDropdown ? (
          <ReportDropdownBackground
            onPress={() => dropdownBackgroundHandle()}
          />
        ) : null}
        <S.CommentSection>
          <PostComments />
        </S.CommentSection>
      </S.PostMainSection>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <CommentForm navigation={navigation} />
      </KeyboardAvoidingView>
    </S.DetailLayout>
  );
}

export default CommunityPostDetail;
