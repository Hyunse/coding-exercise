import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: 'HI', checked: false, color: '#343a40' },
      { id: 1, text: 'React', checked: true, color: '#343a40' },
      { id: 2, text: 'Haha', checked: false, color: '#343a40' }
    ],
    color: ''
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color
      })
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
    });
  };

  selectColor = (color) => {
    this.setState({
      color
    });
  };

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      selectColor
    } = this;
    const paletteColorArr = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

    return (
      <TodoTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
        palette={
          <Palette colors={paletteColorArr} onSelectColor={selectColor} />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
          color={color}
        />
      </TodoTemplate>
    );
  }
}

export default App;
