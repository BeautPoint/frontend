import SearchView from '@/components/common/searchView.component';
import {NavigationProps} from '@/types/stackprops';
import {Fragment} from 'react';

function HomeSearchScreen({navigation}: NavigationProps['home']) {
  return (
    <Fragment>
      <SearchView navigation={navigation} />
    </Fragment>
  );
}

export default HomeSearchScreen;
