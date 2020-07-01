import React, { useReducer, createContext } from 'react';
import todoReducer from '../reducer/todoReducer';

const defaultTodos = [
  { id: '0', task: 'Read a book', completed: false },
  { id: '1', task: 'Jog in a playground', completed: true },
  { id: '2', task: 'Write articles', completed: false },
];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}
