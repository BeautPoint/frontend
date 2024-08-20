import shopState from '@/recoil/shop/shop.recoil';
import {
  formatOpeningHours,
  getTodayOpeningHours,
} from '@/utils/openingHours.util';
import {regExCheckAddress, regExCheckName} from '@/utils/validateShop.util';
import {useRecoilState} from 'recoil';

export const useServiceHook = () => {
  const [state, setState] = useRecoilState(shopState);

  const setServiceDetails = serviceData => {
    setState(prevState => ({
      ...prevState,
      selectedService: {...serviceData},
    }));
  };

  const handleShopDetails = (shopData: any) => {
    const {
      name,
      address,
      photo,
      description,
      open_now,
      opening_hours,
      phone,
      place_id,
      category,
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
      // images: [{id: 0, src: photo}],
      photo,
      description,
      todayOpeningHours,
      open_now,
      openingHours,
      phone,
      category,
    };

    setState(prevState => ({
      ...prevState,
      selectedService: {
        ...prevState.selectedService,
        ...updateSelecedService,
      },
    }));
  };

  return {setServiceDetails, handleShopDetails};
};
