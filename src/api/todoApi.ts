import axios from 'axios';
import { BaseURL } from '../db/database';

// make axios calls
export const TodoAPI = {
  getAll() {
    return axios.get(`${BaseURL}/todos`);
  }
};
