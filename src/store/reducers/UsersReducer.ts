import * as actionTypes from '../actions/UsersActions';
import { Action } from '../actions/UsersActions';
import { UserModel } from '../../models/UserModel';

export interface ReducerState {
  userList: UserModel[];
}

const initialState: ReducerState = {
  userList: []
};

export const UserReducer = (
  state: ReducerState = initialState,
  action: Action
): ReducerState => {
  let newDataList: UserModel[] = [...state.userList];

  switch (action.type) {
    case actionTypes.UserAction.GET_ALL_DATA:
      {
        const items: UserModel[] = action.payload;
        newDataList = [...items];
      }
      break;
    default:
      break;
  }
  return {
    ...state,
    userList: newDataList
  };
};

// export default DataReducer;
