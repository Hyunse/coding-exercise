import React, { useState, useContext } from 'react';
import { ListItem, Button, Typography, makeStyles } from '@material-ui/core';
import { DispatchContext } from '../context/TodoContext';
import { REMOVE_TODO } from '../constants/actions';

const useStyles = makeStyles({
  root: {
    'margin-top': '15px',
  },
  typo: {
    width: '100%',
    height: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  underline: {
    textDecoration: 'line-through',
  },
  button: {
    position: 'absolute',
    right: 0,
    'margin-right': 15,
  },
});

const Todo = ({ id, task, completed }) => {
  const { button, root, typo, underline } = useStyles();
  const [comp, setComp] = useState(completed);
  const dispatch = useContext(DispatchContext);

  const completeTodo = () => {
    comp ? (completed = false) : (completed = true);

    setComp(completed);
  };

  const deleteTodo = () => {
    dispatch({ type: REMOVE_TODO, id });
  };

  return (
    <ListItem className={root}>
      <Typography
        className={`${typo} ${comp ? underline : ''}`}
        onClick={completeTodo}
      >
        {task}
      </Typography>
      {comp && (
        <Button
          variant="contained"
          color="secondary"
          className={button}
          onClick={deleteTodo}
        >
          Delete
        </Button>
      )}
    </ListItem>
  );
};

export default Todo;
