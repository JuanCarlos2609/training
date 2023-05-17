import React, { useEffect, useRef, useState } from 'react';

export const Message = () => {
  const [message, setMessage] = useState('');
  const ref = useRef();

  useEffect(() => {
    ref.current = message;
  }, [message]);

  const handleMessaheChange = (e) => {
    console.log('MODIFICA MENSAJE');
    setMessage(e.target.value);
  };

  return (
    <div style={{ marginTop: 40, textAlign: 'center' }}>
      <h2>Message</h2>
      <br />
      <input type="text" onChange={handleMessaheChange} />
      <br />
      <p>Mensaje: {message}</p>
      <p>Mensaje Previo: {ref.current}</p>
    </div>
  );
};
