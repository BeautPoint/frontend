import axios from 'axios';
import {Platform} from 'react-native';

const url = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

export const PostAPI = axios.create({
  //   baseURL: process.env.AUTH_API,
  baseURL: `${url}:3005/community`,
});
