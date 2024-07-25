import {AppText} from '@/styles/global.style';
import {Dimensions, View} from 'react-native';

function EmptyResults() {
  const {height} = Dimensions.get('screen');
  return (
    <View
      style={{
        height: height * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 10}}>
        <AppText size="16px" weight="SemiBold">
          검색 결과가 없습니다.
        </AppText>
      </View>
      <View>
        <AppText size="16px" weight="SemiBold">
          다른 키워드를 입력해 보세요.
        </AppText>
      </View>
    </View>
  );
}

export default EmptyResults;
