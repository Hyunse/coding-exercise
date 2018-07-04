import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove, color } = this.props;
    return (
      <div
        className="todo-item"
        onClick={() => onToggle(id)}
        style={{ color: color }}
      >
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark" />}
      </div>
    );
  }
}

export default TodoItem;
