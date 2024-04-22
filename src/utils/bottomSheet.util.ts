export const getBottomPositionByHeight = (height: any) => {
  if (height > 750) return '-86%';
  if (height > 850) return '-90%';
  if (height > 950) return '-96%';

  return '-83%';
};
