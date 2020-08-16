import axios from 'axios';
import { BaseURL } from '../db/database';

// make axios calls
export const UsersAPI = {
  getAll() {
    return axios.get(`${BaseURL}/users`);
  }
};
