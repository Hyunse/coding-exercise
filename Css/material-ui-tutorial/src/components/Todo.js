import React from 'react';
import { ListItem } from '@material-ui/core';

const Todo = ({ task, completed }) => {
  return (
    <ListItem>
      {task} {completed}
    </ListItem>
  )
}

export default Todo;