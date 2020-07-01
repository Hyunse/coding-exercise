import React from 'react';
import { TodoProvider } from '../context/TodoContext';
import { Box, Card, makeStyles } from '@material-ui/core';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const useStyles = makeStyles({
  card: {
    width: '500px',
  },
  margin: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

const TodoApp = () => {
  const { card } = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Card variant="outlined" className={card}>
        <TodoProvider>
          <TodoForm />
          <TodoList></TodoList>
        </TodoProvider>
      </Card>
    </Box>
  );
};

export default TodoApp;
