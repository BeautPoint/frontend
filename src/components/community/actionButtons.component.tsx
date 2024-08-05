import BellIcon from '@/assets/icons/bellIcon.svg';
import SearchIcon from '@/assets/icons/searchIcon.svg';
import * as S from '@/styles/community/header.style';

function HeaderActionButtons() {
  return (
    <S.ActionButtonLayout>
      <S.SearchButton>
        <SearchIcon color="black" />
      </S.SearchButton>
      {/* <S.NotificationButton>
        <BellIcon color="black" width="17px" />
      </S.NotificationButton> */}
    </S.ActionButtonLayout>
  );
}

export default HeaderActionButtons;
