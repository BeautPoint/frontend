import {Shadow} from 'react-native-shadow-2';
import styled from 'styled-components/native';

const BoxShadow = styled(Shadow).attrs({
  startColor: 'rgba(113, 121, 132, 0.20)',
  offset: [2, 4],
})`
  border-radius: 10px;
`;

export {BoxShadow};
