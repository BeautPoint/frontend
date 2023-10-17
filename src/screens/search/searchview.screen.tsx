import {Fragment} from 'react';
import SearchView from '@/components/common/searchView.component';
import {NavigationProps} from '@/types/stackprops';

function LocationSearchScreen({navigation}: NavigationProps['location']) {
  return (
    <Fragment>
      <SearchView navigation={navigation} />
    </Fragment>
  );
}

export default LocationSearchScreen;
