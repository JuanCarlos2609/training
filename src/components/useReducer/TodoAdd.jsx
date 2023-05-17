import { useForm } from './hooks/useForm';

export const TodoAdd = ({ onNeweTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNeweTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        name="description"
        type="text"
        placeholder="¿Que hay que hacer?"
        value={description}
        onChange={onInputChange}
      />
      &nbsp;
      <button type="submit">Agregar</button>
    </form>
  );
};
