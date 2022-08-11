import { TokenType } from '@apis/auth/AuthApi.type';

import { CONFIG } from '@config';

import {
  getAsyncStorage,
  removeAsyncStorage,
  setAsyncStorage,
} from '../helper';

const TOKEN_KEY = CONFIG.AUTH_TOKEN_KEY || '@token';

export const getToken = () => {
  const token = getAsyncStorage<TokenType>(TOKEN_KEY, {
    access: null,
    isRegister: false,
    refresh: null,
  });
  return token;
};

export const setToken = (token: TokenType) => {
  setAsyncStorage(TOKEN_KEY, token);
};

export const deleteToken = () => {
  removeAsyncStorage(TOKEN_KEY);
};
