import { combineReducers } from 'redux';
import { UserReducer } from './reducers/UsersReducer';
import { TodoReducer } from './reducers/TodoReducer';

// compining reducers into 1 global state
export const rootReducer = combineReducers({
  users: UserReducer,
  todo: TodoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
