import styled from 'styled-components/native';

interface PropsType {
  background: string;
  size?: string;
  margin?: string;
}

const SlideDotsBox = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SlideDots = styled.View<PropsType>`
  width: ${({size}) => size || '10px'};
  height: ${({size}) => size || '10px'};
  background: ${({background}) => background || '#FFFFFF'};
  z-index: 2;
  border-radius: 8px;
  margin: ${({margin}) => margin || '0 10px'};
`;

export {SlideDotsBox, SlideDots};
