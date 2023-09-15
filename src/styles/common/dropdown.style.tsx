import styled from 'styled-components/native';

interface PropType {
  dropDown: {width?: string; height?: string};
}

const DropDownLayOut = styled.View<PropType['dropDown']>`
  width: ${({width}) => width || '80px'};
  height: ${({height}) => height || '30px'};
  border: 1px solid;
  border-radius: 5px;
`;

const Text = styled.Text``;

const SelectBox = styled.View``;
const SelectList = styled.View``;

export {DropDownLayOut, SelectBox, SelectList, Text};
