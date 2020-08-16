import { UserModel } from '../../models/UserModel';
import { UsersAPI } from '../../api/usersApi';
import { AxiosResponse } from 'axios';

export interface Action {
  type?: UserAction;
  // tslint:disable-next-line: no-any
  payload?: any;
}
// actions const
export enum UserAction {
  GET_ALL_DATA = 'GET_ALL_DATA'
}

export const getAllUsersDispatch = () => {
  return (dispatch: any) =>
    UsersAPI.getAll()
      .then((response: AxiosResponse<UserModel[]>) => {
        dispatch(getAllData(response.data));
      })
      .catch(console.error);
};
const getAllData = (response: UserModel[]): Action => {
  return {
    type: UserAction.GET_ALL_DATA,
    payload: response
  };
};
