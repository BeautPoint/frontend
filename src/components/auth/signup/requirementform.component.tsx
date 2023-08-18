import {useSignupUserInfo} from '@/hooks/auth/signupUserinfo.hook';
import signupState from '@/recoil/auth/signupInfoForm.recoil';
import * as S from '@/styles/auth/signup/userinputform.style';
import {AppText} from '@/styles/global.style';
import {useRecoilValue} from 'recoil';

function RequirementForm() {
  const sigupform = useRecoilValue(signupState);
  const {tagSelectionHandle} = useSignupUserInfo();
  return (
    <S.FormLayout>
      <S.DescriptionBox>
        <AppText size="20px">가입을 축하드려요!</AppText>
        <AppText size="20px">간단한 회원 정보를 입력해주세요</AppText>
        <S.SubDescription>
          <AppText size="14px" color="#8C939C">
            중복 선택이 가능해요.
          </AppText>
        </S.SubDescription>
      </S.DescriptionBox>
      <S.TagBox>
        {sigupform.requirementInfo.map(item => {
          const selectedTag = sigupform.selectedRequirement.some(
            service => service.id === item.id,
          );
          return (
            <S.ServiceTag
              onPress={() => tagSelectionHandle(item, 'selectedRequirement')}
              width={'100%'}
              border={selectedTag}
              key={item.id}>
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

export default RequirementForm;
