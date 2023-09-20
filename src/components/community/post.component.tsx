import * as S from '@/styles/community/post.style';
import {AppText} from '@/styles/global.style';
import DotsIcon from '@/assets/icons/dotsIcon.svg';
import CommunityUserInfo from '@/components/community/userinfo.component';
import {useCommunityQuery} from '@/api/community/post.api';
import ThumbsupIcon from '@/assets/icons/thumbsupIcon.svg';
import CommentIcon from '@/assets/icons/commentIcon.svg';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import {useRecoilValue} from 'recoil';
import communityState from '@/recoil/community/community.recoil';
import {NavigationProps} from '@/types/stackprops';
import {FlatList} from 'react-native';

function CommunityPost({navigation}: NavigationProps['community']) {
  const {postData} = useCommunityQuery();
  const {likeButtonHandle} = useCommunityPosts();
  const {likeButton} = useRecoilValue(communityState);
  const renderItem = ({item: post}) => {
    const buttonisActived = likeButton === post.id ? '#619BFF' : '#9a9a9a';
    return (
      <S.PostContainer
        key={post.id}
        onPress={() => navigation.navigate('Community')}>
        <CommunityUserInfo />
        <S.MainBox>
          <S.PostTitle>
            <AppText size="16px" weight="SemiBold">
              {post?.title}
            </AppText>
          </S.PostTitle>
          <S.PostBody>
            <AppText color="#484B56A6" numberOfLines={2}>
              {post?.description}
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
          <S.ActionButton onPress={() => likeButtonHandle(post?.id)}>
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
      <FlatList data={postData} renderItem={renderItem} />
    </S.PostLayout>
  );
}

export default CommunityPost;
