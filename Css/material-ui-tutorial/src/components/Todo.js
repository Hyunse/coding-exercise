import React, { useState } from 'react';
import { ListItem, Button, Typography, makeStyles } from '@material-ui/core';

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

const Todo = ({ task, completed }) => {
  const { button, root, typo, underline } = useStyles();
  const [comp, setComp] = useState(completed);

  const completeTodo = () => {
    comp ? (completed = false) : (completed = true);

    setComp(completed);
  };

  return (
    <ListItem className={root} onClick={completeTodo}>
      <Typography className={`${typo} ${comp ? underline : ''}`}>
        {task}
      </Typography>
      <Button variant="contained" color="primary" className={button}>
        Roll Back
      </Button>
    </ListItem>
  );
};

export default Todo;
