import * as S from '@/styles/community/post.style';
import {AppText} from '@/styles/global.style';
import CommunityUserInfo from '@/components/community/userinfo.component';
import {useCommunityQuery} from '@/api/community/post.api';
import ThumbsupIcon from '@/assets/icons/thumbsupIcon.svg';
import CommentIcon from '@/assets/icons/commentIcon.svg';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {NavigationProps} from '@/types/stackprops';
import {
  Dimensions,
  FlatList,
  Platform,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {usePostCommentQuery} from '@/api/community/comments.api';
import {getTabBarHeight} from '@/utils/getTabBarHeight.util';
import navigationState from '@/recoil/navigation/navigation.recoil';
import {useSearchHook} from '@/hooks/search/useSearch.hook';

function CommunityPost({navigation}: NavigationProps['community']) {
  const {postData} = useCommunityQuery();
  const [isLoading, setIsLoading] = useState(false);
  const {
    likeButtonHandle,
    handleRefresh,
    setPostDetails,
    handleIsDetailScreen,
  } = useCommunityPosts();
  const {getComments} = usePostCommentQuery();
  const {tabBarHeight, showResultsScreen} = useRecoilValue(navigationState);
  const {likeButton, refreshing, resultPosts} = useRecoilValue(communityState);

  const selectedPostHandle = post => {
    getComments(post.post_id);
    setPostDetails(post);
    navigation.navigate('PostDetails');
    handleIsDetailScreen(true);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const searchScreenPadding = () => {
    if (Platform.OS === 'ios') return tabBarHeight * 0.8;
    return tabBarHeight * 0.9;
  };

  const renderItem = ({item: post}) => {
    const buttonisActived = likeButton === post.post_id ? '#619BFF' : '#9a9a9a';
    return (
      <S.PostContainer key={post.id} onPress={() => selectedPostHandle(post)}>
        <CommunityUserInfo
          postId={post.post_id}
          nickname={post.nickName}
          viewCount={post.viewCount}
          profileImage={post.profile_image}
          createdAt={post.createdAt}
        />
        <S.MainBox>
          <S.PostTitle>
            <AppText size="16px" weight="SemiBold">
              {post?.title}
            </AppText>
          </S.PostTitle>
          <S.PostBody>
            <AppText color="#484B56A6" numberOfLines={2}>
              {post?.content}
            </AppText>
          </S.PostBody>
          <S.TagBox>
            {/* <S.PostTag>
              <AppText color="#BABFC4" size="12px">
                궁금증
              </AppText>
            </S.PostTag>
            <S.PostTag>
              <AppText color="#BABFC4" size="12px">
                SMP 두피
              </AppText>
            </S.PostTag> */}
          </S.TagBox>
        </S.MainBox>
        <S.BottomBox>
          <S.ActionButton onPress={() => likeButtonHandle(post?.post_id)}>
            <S.ButtonIcon>
              <ThumbsupIcon
                width="30px"
                height="20px"
                color={buttonisActived}
              />
            </S.ButtonIcon>
            <AppText color={buttonisActived}>좋아요</AppText>
          </S.ActionButton>
          <S.DividerLine />
          <S.ActionButton onPress={() => selectedPostHandle(post)}>
            <S.ButtonIcon>
              <CommentIcon width="40px" height="20px" />
            </S.ButtonIcon>
            <AppText color="#9a9a9a">댓글</AppText>
          </S.ActionButton>
        </S.BottomBox>
      </S.PostContainer>
    );
  };

  const emptyResults = () => {
    const {height} = Dimensions.get('screen');
    return (
      <S.NoResultsContainer height={height * 0.6}>
        <S.NoResultsBox>
          <AppText size="16px" weight="SemiBold">
            검색 결과가 없습니다.
          </AppText>
        </S.NoResultsBox>
        <S.NoResultsBox>
          <AppText size="16px" weight="SemiBold">
            다른 키워드를 입력해 보세요.
          </AppText>
        </S.NoResultsBox>
      </S.NoResultsContainer>
    );
  };

  return (
    <S.PostLayout
      usePadding={showResultsScreen}
      paddingBottom={searchScreenPadding()}>
      {isLoading ? (
        <ActivityIndicator style={{marginTop: 50}} color="#000000" />
      ) : (
        <FlatList
          data={showResultsScreen ? resultPosts : postData}
          renderItem={renderItem}
          ListEmptyComponent={showResultsScreen ? emptyResults : null}
          contentContainerStyle={{paddingBottom: tabBarHeight * 0.7}}
          refreshControl={
            !showResultsScreen ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            ) : undefined
          }
        />
      )}
    </S.PostLayout>
  );
}

export default CommunityPost;
