import {useCommunityPosts} from '@/hooks/community/communityPosts.hook';
import communityState from '@/recoil/community/community.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/profile/userContent.style';
import {NavigationProps} from '@/types/stackprops';
import {dateCalculator} from '@/utils/dateCalculator.util';
import {useRecoilValue} from 'recoil';

function UserContentList({navigation}: NavigationProps['profile']) {
  const {userPosts} = useRecoilValue(communityState);
  const {detailPostData, handleIsDetailScreen, setEditPostData} =
    useCommunityPosts();

  const handlePressedPost = (post: any) => {
    const postData = {
      post_id: post.post_id,
      title: post.title,
      content: post.content,
    };
    handleIsDetailScreen(true);
    detailPostData(post);
    setEditPostData(postData);
    navigation.navigate('Community');
  };
  return (
    <S.UserContnetLayout>
      {userPosts.map(item => {
        const date = new Date(item.createdAt);
        const formattedDate = dateCalculator(date);
        return (
          <S.ContnetBox onPress={() => handlePressedPost(item)}>
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
      })}
    </S.UserContnetLayout>
  );
}

export default UserContentList;
