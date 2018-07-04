import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove, color } = this.props;

    const todosList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        color={color}
        key={id}
      />
    ));
    return <div>{todosList}</div>;
  }
}

export default TodoItemList;
