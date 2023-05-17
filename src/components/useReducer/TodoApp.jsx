import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del Alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del Tiempo',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    //Aquí comienza la magia

    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);

    console.log({ todo });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>TodoApp</h1>
      <br />
      <TodoList todos={todos} onDeleteTodo={(id) => handleDeleteTodo(id)} />
      <br />
      <h4>AGREGAR TODO</h4>
      <hr />
      <TodoAdd onNeweTodo={(todo) => handleNewTodo(todo)} />
    </div>
  );
};
