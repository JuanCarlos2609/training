import { useEffect, useState } from 'react';

export const ExampleUseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log('Hola mundo desde useEffect');
    console.log(`Haz hecho click ${counter}`);
  }, [counter]);

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>useEffect</h2>
      <button onClick={() => setCounter(counter + 1)}>Click!</button>
    </div>
  );
};
