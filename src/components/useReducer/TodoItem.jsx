import React from 'react';

export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li key={todo.id}>
      <span>{todo.description}</span> &nbsp;
      <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  );
};
