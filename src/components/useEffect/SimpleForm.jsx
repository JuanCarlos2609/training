import { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [form, setForm] = useState({
    userName: 'Juan',
    email: 'mail@dominio.com',
  });

  const handleOnchange = ({ target }) => {
    const { name, value } = target;
    // console.log('>>>', event.target.value);
    // console.log({ name, value });
    setForm({
      ...form,
      //Propiedades computadas de los objetos
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('>>>', form);
  };

  //Este useEffect recibe una función como argumento
  //que internamente tiene un callback (función interna)
  useEffect(() => {
    console.log('El useEffect se llamo');
  }, []); //dependencias

  useEffect(() => {
    console.log('form changed');
  }, [form]); //dependencias

  // useEffect(() => {
  //   console.log('form changed');
  // }, [form.userName]); //dependencias

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          id="userName"
          name="userName"
          value={form.userName}
          onChange={handleOnchange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleOnchange}
        />
        <button type="submit">Enviar</button>
      </form>

      {form.userName === 'Juan' ? <Message /> : null}
    </div>
  );
};
