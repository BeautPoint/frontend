import NavigationHeader from '@/components/common/navigationHeader';
import {NavigationProps} from '@/types/stackprops';

function BriefReviewScreen({navigation}: NavigationProps['shopDetails']) {
  return (
    <>
      <NavigationHeader
        navigation={navigation}
        navType={'shopDetails'}
        title={'글쓰기'}
      />
    </>
  );
}
export default BriefReviewScreen;
