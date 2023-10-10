import {Fragment} from 'react';
import SearchView from '@/components/common/searchView.component';
import {NavigationProps} from '@/types/stackprops';

function locationSearchScreen({navigation}: NavigationProps['location']) {
  return (
    <Fragment>
      <SearchView navigation={navigation} />
    </Fragment>
  );
}

export default locationSearchScreen;
