import { v4 as uuid } from 'uuid'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo )
    default:
      return state;
  }
};

export default reducer;
