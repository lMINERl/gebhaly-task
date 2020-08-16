import { UserModel } from '../../models/UserModel';
import { TodoAPI } from '../../api/todoApi';
import { AxiosResponse } from 'axios';

export interface Action {
  type?: TodoAction;
  // tslint:disable-next-line: no-any
  payload?: any;
}
// actions const
export enum TodoAction {
  GET_ALL_DATA = 'GET_ALL_TODO_DATA'
}

export const getAllTodoDispatch = () => {
  return (dispatch: any) =>
    TodoAPI.getAll()
      .then((response: AxiosResponse<UserModel[]>) => {
        dispatch(getAllData(response.data));
      })
      .catch(console.error);
};
const getAllData = (response: UserModel[]): Action => {
  return {
    type: TodoAction.GET_ALL_DATA,
    payload: response
  };
};
