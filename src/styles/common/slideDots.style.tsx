import styled from 'styled-components/native';

interface PropsType {
  slideDots: {background: string; size?: string; margin?: number};
  dotsBox: {bottom?: number};
}

const SlideDotsBox = styled.View<PropsType['dotsBox']>`
  position: absolute;
  bottom: ${({bottom}) => bottom || 0}px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SlideDots = styled.View<PropsType['slideDots']>`
  width: ${({size}) => size || '10px'};
  height: ${({size}) => size || '10px'};
  background: ${({background}) => background || '#FFFFFF'};
  z-index: 2;
  border-radius: 8px;
  margin: ${({margin}) => margin || 10}px;
`;

export {SlideDotsBox, SlideDots};
