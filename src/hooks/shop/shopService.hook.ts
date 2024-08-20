import shopState from '@/recoil/shop/shop.recoil';
import {
  formatOpeningHours,
  getTodayOpeningHours,
} from '@/utils/openingHours.util';
import {regExCheckAddress, regExCheckName} from '@/utils/validateShop.util';
import {useRecoilState} from 'recoil';

export const useShopService = () => {
  const [state, setState] = useRecoilState(shopState);

  const handleShopDetails = (shopData: any) => {
    const {
      place_id,
      name,
      address,
      photo,
      description,
      open_now,
      opening_hours,
      phone,
    } = shopData;
    const formattedAddress = regExCheckAddress(address);
    const openingHours = formatOpeningHours(opening_hours) || {
      weekdays: '',
      differentWeekdays: '',
      weekends: '',
      differentWeekends: '',
      closed: '',
    };
    const todayOpeningHours = getTodayOpeningHours(opening_hours);
    const updatedName = regExCheckName(name);
    const updateSelecedService = {
      place_id,
      name: updatedName,
      formattedAddress,
      images: [{id: 0, src: photo}],
      description,
      todayOpeningHours,
      open_now,
      openingHours,
      phone,
    };

    setState(prevState => ({
      ...prevState,
      selectedService: {
        ...prevState.selectedService,
        ...updateSelecedService,
      },
    }));
  };

  return {handleShopDetails};
};
