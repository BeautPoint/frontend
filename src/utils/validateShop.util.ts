/**
 *  API로 받은 문자열 주소에서 지정된 지역명 이전의 모든 내용과 중복된 단어 삭제하고,
 * 지정된 지역명부터 시작하는 나머지 내용만을 반환하는 함수입니다.
 *
 * `$2`는 정규식에서 두 번째 그룹에 해당하는 지역명을 참조하며, 이를 통해 지역명부터 시작하는 문자열을 추출합니다.
 *
 * @param {string} data - API로부터 받아온 데이터로, 사업장 주소입니다.
 *
 *  @returns {string} - 처리된 문자열을 반환합니다.
 * - 정규식의 지역명 앞의 내용이 삭제되고, 지역명부터 시작하는 나머지 내용만 포함됩니다.
 */
const regExCheckAddress = (data: string) => {
  const regex =
    /^(.*?)(서울특별시|인천광역시|경기도|부산광역시|대구광역시|울산광역시|강원도|광주광역시|대전광역시|세종특별자치시|경상남도|경상북도|전라남도|전라북도|제주특별시)/;
  const truncatedData = data.replace(regex, '$2');
  const words = truncatedData.split(' ');
  const deduplication = new Set(words);
  return Array.from(deduplication).join(' ');
};

/**
 * 문자열에서 첫 번째 띄어쓰기, "(", 또는 "-" 기호를 포함한 뒷 내용을 삭제하고,
 * 해당 기호 이전의 나머지 문자열만 반환하는 함수입니다.
 *
 * @param {string} data - API로부터 받아온 데이터로, 사업장 상호명입니다.
 *
 * @returns {string} 처리된 문자열을 반환합니다. 첫 번째 띄어쓰기, "(", 또는 "-" 기호 이전의
 *                   내용만 포함됩니다. 만약 해당 기호가 없다면 원본 문자열이 그대로 반환됩니다.
 *
 * 사용 예:
 * const inputString = "Hello World - Example";
 * const result = truncateString(inputString);
 * console.log(result); // "Hello" 출력
 */
function regExCheckName(data: string) {
  const regex = /\s+.*|\(.*|\-.*$/;
  const result = data.replace(regex, '');
  if (data.length <= 10) {
    return data;
  }

  return data.replace(regex, '');
}

export {regExCheckAddress, regExCheckName};
