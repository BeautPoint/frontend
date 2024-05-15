import axios from 'axios';
import {Platform} from 'react-native';

const url = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

const ServerApi = axios.create({
  //   baseURL: process.env.AUTH_API,
  baseURL: `${url}:3005/`,
});

const PostAPI = axios.create({
  //   baseURL: process.env.AUTH_API,
  baseURL: `${url}:3005/community/post`,
  headers: {
    Accept: 'application/json',
    'content-Type': 'application/json',
  },
});

const AuthAPI = axios.create({
  //   baseURL: process.env.AUTH_API,
  baseURL: `${url}:3005/auth`,
  headers: {
    Accept: 'application/json',
    'content-Type': 'application/json',
  },
});

const UserAPI = axios.create({
  //   baseURL: process.env.AUTH_API,
  baseURL: `${url}:3005/user`,
});

export {PostAPI, AuthAPI, ServerApi, UserAPI};
