import shopState from '@/recoil/shop/shop.recoil';
import {AppText} from '@/styles/global.style';
import * as S from '@/styles/service/review.style';
import {useRecoilValue} from 'recoil';
import StarIcon from '@/assets/icons/starIcon.svg';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import NavigationHeader from '../common/navigationHeader';
import {NavigationProps} from '@/types/stackprops';

function ReviewScreen({navigation}: NavigationProps['serviceList']) {
  const {reviewRating} = useRecoilValue(shopState);
  const [selectedRating, setSelectedRating] = useState(-1);
  const [textValue, setTextValue] = useState('');
  const [isActived, setIsActived] = useState(false);

  const handleRatingPressed = rating => {
    const {id} = rating;
    setSelectedRating(id);
    id > -1 && textValue ? setIsActived(true) : setIsActived(false);
  };

  const handleTextChange = (text: string) => {
    const inputText = text;

    setTextValue(inputText);
    selectedRating > -1 && inputText ? setIsActived(true) : setIsActived(false);
  };

  return (
    <S.Layout>
      <NavigationHeader
        navigation={navigation}
        title={'글쓰기'}
        isActived={isActived}
        url={'detail'}
      />
      <View style={{padding: 20}}>
        <S.TitleSection>
          <S.Title>
            <AppText size="18px" weight="Semibold">
              리뷰를 작성해주세요
            </AppText>
          </S.Title>
          <S.SubTitle>
            <AppText>만족하시는 만큼 별점을 남겨주세요</AppText>
          </S.SubTitle>
        </S.TitleSection>
        <S.ReviewRating>
          {reviewRating.map((item, index) => {
            return (
              <S.RatingButton
                key={item.id}
                onPress={() => handleRatingPressed(item)}>
                <S.RatingIcon>
                  <StarIcon
                    width={'40px'}
                    height={'40px'}
                    color={selectedRating >= item.id ? '#FFD700' : '#C0C0C0'}
                  />
                </S.RatingIcon>
              </S.RatingButton>
            );
          })}
        </S.ReviewRating>
        <S.Description>
          <S.TextReviewTitle>
            <AppText size="16px" weight="SemiBold">
              자세한 후기를 남겨보세요
            </AppText>
          </S.TextReviewTitle>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#e9eaec',
              height: 200,
              padding: 20,
              paddingTop: 20,
              paddingBottom: 20,
            }}
            textAlignVertical="top"
            multiline={true}
            placeholder="본문을 입력해주세요."
            onChangeText={text => handleTextChange(text)}
          />
        </S.Description>
      </View>
    </S.Layout>
  );
}

export default ReviewScreen;
