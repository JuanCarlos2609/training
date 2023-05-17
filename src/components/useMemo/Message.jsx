import { useMemo } from 'react';

export const Message = ({ texto }) => {
  //useMemo permite memorizar el valor que regresa una función

  const getMensaje = () => {
    console.log('getMensaje');
    return `${texto}`;
  };

  const mensaje = useMemo(() => getMensaje(), [texto]);

  return <h1>{mensaje}</h1>;
};
