import styled from 'styled-components/native';

const InputLayOut = styled.View`
  width: 100%;
  position: absolute;
  top: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.View`
  position: absolute;
  bottom: 15px;
  left: 12px;
  z-index: 3;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#a09d9d',
})`
  width: 300px;
  height: 47px;
  border-radius: 12px;
  background: #ffffff;
  /* box-shadow: 1px 21px 12px #a09d9d; */
  padding-left: 40px;
`;

export {InputLayOut, InputIcon, Input};
