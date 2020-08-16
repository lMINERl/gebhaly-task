import * as actionTypes from '../actions/TodoActions';
import { Action } from '../actions/TodoActions';
import { TodoModel } from '../../models/TodoModel';

export interface ReducerState {
  todoList: TodoModel[];
}

const initialState: ReducerState = {
  todoList: []
};

export const TodoReducer = (
  state: ReducerState = initialState,
  action: Action
): ReducerState => {
  let newDataList: TodoModel[] = [...state.todoList];

  switch (action.type) {
    case actionTypes.TodoAction.GET_ALL_DATA:
      {
        const items: TodoModel[] = action.payload;
        newDataList = [...items];
      }
      break;
    default:
      break;
  }
  return {
    ...state,
    todoList: newDataList
  };
};
