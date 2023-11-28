export interface OverviewInterface {
  viewChangedHandle: {
    viewableItems: {
      item: any; // 현재 보이는 아이템의 데이터
      key: string; // 현재 보이는 아이템의 키 값
      index: number | null; // 현재 보이는 아이템의 인덱스
      isViewable: boolean; // 아이템이 현재 보이는지 여부
      section?: any; // 섹션 리스트에서 사용, 현재 보이는 섹션의 데이터
    };
  };
}
