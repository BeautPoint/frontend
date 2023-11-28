const calculateDragHeight = (height: number) => {
  const dragStandardHeight = height * 0.26;
  const maxHeight = height * 0.7;
  const minHeight = height * 0.1;
  const maximumTranslateY = minHeight - maxHeight;
  const minimumTranslateY = 0;

  return {
    dragStandardHeight,
    maxHeight,
    minHeight,
    maximumTranslateY,
    minimumTranslateY,
  };
};
