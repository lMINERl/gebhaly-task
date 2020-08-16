import React from 'react';
import Headline from '../stories/headline/headline';
import Header from '../stories/header/header';
import MainSection from '../stories/section/mainSection';
import SecondarySection from '../stories/section/secondarySection';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { getAllUsersDispatch } from '../store/actions/UsersActions';
import { getAllTodoDispatch } from '../store/actions/TodoActions';

const App: React.FC = (props: {}) => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  console.log('userList');
  console.log(state.users.userList);

  console.log('todoList');
  console.log(state.todo.todoList);

  React.useEffect(() => {
    dispatch(getAllUsersDispatch());
    dispatch(getAllTodoDispatch());
  }, []);

  return (
    <div>
      <Headline
        content={{ telephoneNumber: '1234-5678-9101', email: 'me@example.com' }}
      />
      <Header />
      <MainSection
        contents={{
          head: 'We are Cerified Teachers',
          title: 'OPTIMIZE IT PERFORMANCE & CARRER GROWTH ',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium soluta, excepturi id non porro quisquam aliquam, perferendis consequatur laborum voluptate iure mollitia recusandae commodi, itaque corporis fugit vitae? Velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium soluta, excepturi id non porro quisquam aliquam, perferendis consequatur laborum voluptate iure mollitia recusandae commodi, itaque corporis fugit vitae? Velit.',
          actions: [
            {
              name: 'SELECT PRICE',
              action: (e: any) => {
                console.log(e.target.value);
              }
            },
            {
              name: 'VIEW PROJECT',
              action: (e: any) => {
                console.log(e.target.value);
              }
            }
          ]
        }}
      />
      <SecondarySection />
    </div>
  );
};

export default App;
