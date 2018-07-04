import React from 'react';
import './TodoTemplate.css';

const TodoTemplate = ({form, children, palette}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        Today To Do
      </div>
      <section className="palette-wrapper">
        {palette}
      </section>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  );
}

export default TodoTemplate;