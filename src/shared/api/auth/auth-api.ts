import axios from 'axios';

import { CreateAccountDto, LoginDto } from './dtos';
// import { API_ENDPOINT } from '@env';

export const registerUser = async (data: CreateAccountDto, userType: string) => {
  let url = `http://localhost:9000/auth/register-${userType}`;

  const registerData: Record<string, string> = {
    email: data.email,
    password: data.password,
  };

  if (userType === 'customer') {
    registerData.name = data.name;
  } else {
    registerData.bio = data.name;
  }

  try {
    const res = await axios.post(url, {
      ...registerData,
    });
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred.');
    }
  }
};

export const login = async (data: LoginDto) => {
  try {
    const res = await axios.post('http://localhost:9000/auth/login', {
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An error occurred.');
    }
  }
};
