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
import {FlatList, RefreshControl} from 'react-native';
import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

function CommunityPost({navigation}: NavigationProps['community']) {
  const {postData, getPost} = useCommunityQuery();
  const {
    likeButtonHandle,
    detailPostData,
    handleIsDetailScreen,
    handleRefreshing,
  } = useCommunityPosts();
  const {likeButton, refreshing} = useRecoilValue(communityState);

  const selectedPostHandle = post => {
    detailPostData(post);
    navigation.navigate('Community');
    handleIsDetailScreen(true);
  };

  const onRefresh = useCallback(() => {
    handleRefreshing(true);
    setTimeout(() => {
      getPost();
      handleRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getPost();
    }, []),
  );

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
            <S.PostTag>
              <AppText color="#BABFC4" size="12px">
                궁금증
              </AppText>
            </S.PostTag>
            <S.PostTag>
              <AppText color="#BABFC4" size="12px">
                SMP 두피
              </AppText>
            </S.PostTag>
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
          <S.ActionButton onPress={() => navigation.navigate('Community')}>
            <S.ButtonIcon>
              <CommentIcon width="40px" height="20px" />
            </S.ButtonIcon>
            <AppText color="#9a9a9a">댓글</AppText>
          </S.ActionButton>
        </S.BottomBox>
      </S.PostContainer>
    );
  };

  return (
    <S.PostLayout>
      <FlatList
        data={postData}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </S.PostLayout>
  );
}

export default CommunityPost;
