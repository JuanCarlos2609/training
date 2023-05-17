const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
  },
];

//state: estado inicial
//action: como quiero cambiar el estado
const todoReducer = (state = initialState, action = {}) => {
  //   if (action.type === '[TODO] add todo') {
  //     return [...state, action.payload];
  //   }

  return state;
};

let todos = todoReducer();
console.log('>>>', todos);

//Existe una mutación dentro de mi reducer, esto no es permitido dentro de react
// todos.push({
//   id: 2,
//   todo: 'Recolectar la piedra del Poder',
//   done: false,
// });

// console.log('>>>', todos);

//----------------------------------------------------------
// const newTodo = {
//   id: 2,
//   todo: 'Recolectar la piedra del Poder',
//   done: false,
// };

// const addTodoAction = {
//   type: '[TODO] add todo',
//   payload: newTodo,
// };

// todos = todoReducer(todos, addTodoAction);

// console.log('TODOS', todos);
