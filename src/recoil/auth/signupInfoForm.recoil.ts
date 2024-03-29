import {randomString} from '@/utils/randomString.util';
import {atom} from 'recoil';

const signupState = atom({
  key: `signupState/${randomString()}`,
  default: {
    progressStep: 1,
    birthInfo: [
      {id: 0, name: '연도', dateValue: ''},
      {id: 1, name: '월', dateValue: ''},
      {id: 2, name: '일', dateValue: ''},
    ],
    birthDate: '',
    genderInfo: [
      {id: 0, name: '남자', data: 'M'},
      {id: 1, name: '여자', data: 'F'},
    ],
    signupUserInfo: {birthDate: Date, gender: ''},
    serviceCategory: [
      {id: 0, description: 'SMP두피'},
      {id: 1, description: '헤어라인'},
      {id: 2, description: '눈썹문신'},
      {id: 3, description: '아이라인'},
      {id: 4, description: '입술문신'},
      {id: 5, description: '흉터커버'},
      {id: 6, description: '문신제거'},
    ],
    requirementInfo: [
      {id: 0, description: '내위치에서 가까운 곳의 정보가 필요해요'},
      {id: 1, description: '유명하고 실력있는 곳에 가고싶어요'},
      {id: 2, description: '객관적이고 사실적인 리뷰를 찾고싶어요'},
      {id: 3, description: '같은 고민을 공유하는 사람들과 정보 교류를 원해요'},
    ],
    selectedTags: [] as number[],
    selectedServices: [] as {id: number; description: string}[],
    selectedRequirement: [] as {id: number; description: string}[],
    nextButtonActive: false,
  },
});

export default signupState;
