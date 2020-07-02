import React, {useContext} from 'react';
import { TodoContext } from '../context/TodoContext';
import {List} from '@material-ui/core'
import Todo from './Todo';

const TodoList = () => {
  const todos = useContext(TodoContext);
  return (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </List>
  );
};

export default TodoList;
