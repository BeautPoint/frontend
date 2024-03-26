import shopState from '@/recoil/shop/shop.recoil';
import {regExCheckAddress, regExCheckName} from '@/utils/validateShop.util';
import {useRecoilState} from 'recoil';

export const useShopService = () => {
  const [state, setState] = useRecoilState(shopState);

  const handleShopDetails = (shopData: any) => {
    const {name, formatted_address, photo} = shopData;
    const address = regExCheckAddress(formatted_address);
    const updatedName = regExCheckName(name);

    setState(prevState => ({
      ...prevState,
      selectedShop: {name: updatedName, address, photo},
    }));
  };

  return {handleShopDetails};
};
