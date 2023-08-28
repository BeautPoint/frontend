import {useSignupUserInfo} from '@/hooks/auth/signupUserinfo.hook';
import signupState from '@/recoil/auth/signupInfoForm.recoil';
import * as S from '@/styles/auth/signup/userinputform.style';
import {AppText} from '@/styles/global.style';
import {useRecoilValue} from 'recoil';

function ServiceInterestForm() {
  const sigupform = useRecoilValue(signupState);
  const {tagSelectionHandle} = useSignupUserInfo();

  return (
    <S.FormLayout>
      <S.DescriptionBox>
        <AppText size="20px">어떤 시술에 관심과 고민을</AppText>
        <AppText size="20px">하고 계시나요?</AppText>
        <S.SubDescription>
          <AppText size="14px" color="#8C939C">
            중복 선택이 가능해요.
          </AppText>
        </S.SubDescription>
      </S.DescriptionBox>
      <S.TagBox>
        {sigupform.serviceCategory.map(item => {
          const selectedTag = sigupform.selectedServices.some(
            service => service.id === item.id,
          );
          console.log(selectedTag);
          return (
            <S.ServiceTag
              key={item.id}
              border={selectedTag}
              onPress={() => tagSelectionHandle(item, 'selectedServices')}>
              <AppText
                color={selectedTag ? '#619BFF' : '#5A6068'}
                weight={selectedTag ? 'Bold' : ''}>
                {item.description}
              </AppText>
            </S.ServiceTag>
          );
        })}
      </S.TagBox>
    </S.FormLayout>
  );
}

export default ServiceInterestForm;
