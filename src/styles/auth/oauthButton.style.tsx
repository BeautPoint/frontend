import styled from 'styled-components/native';

interface AouthButtonProps {
  LayOut: {
    background: string | undefined;
  };

  Text: {
    color: string | undefined;
  };
}

const AouthButtonLayOut = styled.Pressable<AouthButtonProps['LayOut']>`
  width: 350px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || '#ffffff'};
  border-radius: 4px;
  position: relative;
`;

const ButtonText = styled.Text<AouthButtonProps['Text']>`
  font-size: 15px;
  color: ${props => props.color || '#ffffff'};
`;
const ButtonIcon = styled.View`
  border-radius: 50px;
  position: absolute;
  left: 10px;
  margin-left: 10px;
`;

export {AouthButtonLayOut, ButtonText, ButtonIcon};
