// declare module '@env' {
//   export const API_BASE: string;
// }

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';

declare module '@env' {
  const API_URL: string;
  const GOOGLE_PLACE_KEY: string;
  const GOOGLE_PLACE_URL: string;
  export {GOOGLE_PLACE_KEY, GOOGLE_PLACE_URL, API_URL};
}
