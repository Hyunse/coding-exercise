import React, { useContext } from 'react';
import {
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { ADD_TODO } from '../constants/actions';
import { DispatchContext } from '../context/TodoContext';

const TodoForm = () => {
  const dispatch = useContext(DispatchContext);

  const inputKeyDown = (e) => {
    const {
      target: { value },
      keyCode,
    } = e;

    if (keyCode === 13) {
      dispatch({ type: ADD_TODO, task: value });
    }
  };

  return (
    <>
      <Typography variant="h5">Todo List</Typography>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-todo">Todo</InputLabel>
        <OutlinedInput
          id="outlined-adornment-todo"
          labelWidth={60}
          onKeyDown={inputKeyDown}
        />
      </FormControl>
    </>
  );
};

export default TodoForm;
