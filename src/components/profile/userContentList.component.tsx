import {usePostCommentQuery} from '@/api/community/comments.api';
import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import communityState from '@/recoil/community/community.recoil';
import userInfoState from '@/recoil/user/user.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/userContent.style';
import {NavigationProps} from '@/types/stackprops';
import {dateCalculator} from '@/utils/dateCalculator.util';
import {useRecoilValue} from 'recoil';

function UserContentList({navigation}: NavigationProps['profile']) {
  const {userPosts, userComments} = useRecoilValue(communityState);
  const {activeTab} = useRecoilValue(userInfoState);
  const {setPostDetails, fetchPostById, handleIsDetailScreen, setEditPostData} =
    useCommunityPosts();
  const {getComments} = usePostCommentQuery();
  const handlePressedPost = (post: any) => {
    const postData = {
      post_id: post.post_id,
      title: post.title,
      content: post.content,
    };
    handleIsDetailScreen(true);
    setPostDetails(post);
    setEditPostData(postData);
    getComments(post.post_id);
    navigation.navigate('PostDetails');
  };

  const handleCommentPress = async (post_id: string) => {
    const postData = await fetchPostById(post_id);
    setPostDetails(postData);
    getComments(post_id);
    navigation.navigate('PostDetails');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return dateCalculator(date);
  };

  console.log('유저 게시물 : ', userPosts);

  return (
    <S.UserContnetLayout>
      {activeTab === 0 && userPosts[0] ? (
        userPosts.map(item => {
          const formattedDate = formatDate(item.createdAt);
          return (
            <S.ContnetBox
              key={item.post_id}
              onPress={() => handlePressedPost(item)}>
              <S.Title>
                <AppText>{item.title}</AppText>
              </S.Title>
              <S.Description>
                <AppText numberOfLines={2} size="13px">
                  {item.content}
                </AppText>
              </S.Description>
              <S.CreatedDate>
                <AppText size="12px" color="#9ea2a7">
                  {formattedDate}
                </AppText>
              </S.CreatedDate>
            </S.ContnetBox>
          );
        })
      ) : activeTab === 1 && userComments[0] ? (
        userComments.map(item => {
          const formattedDate = formatDate(item.createdAt);
          return (
            <S.ContnetBox
              key={item.comment_id}
              onPress={() => handleCommentPress(item.post_id)}>
              <S.Description>
                <AppText numberOfLines={2} size="13px">
                  {item.content}
                </AppText>
              </S.Description>
              <S.CreatedDate>
                <AppText size="12px" color="#9ea2a7">
                  {formattedDate}
                </AppText>
              </S.CreatedDate>
            </S.ContnetBox>
          );
        })
      ) : (
        <AppText>등록된 글이 없습니다.</AppText>
      )}
    </S.UserContnetLayout>
  );
}

export default UserContentList;
