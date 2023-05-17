import React, { useEffect, useState, useRef } from 'react';

export const ContadorRef = () => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    ref.current = setInterval(() => setCount((count) => count + 1), 1000);
  }, []);

  const handleClick = () => {
    clearInterval(ref.current);
    ref.current = 0;
  };

  console.log('RENDER!');

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>ContadorRef</h2>
      <br />
      <p>Cont: {count}</p>
      <br />
      <button onClick={handleClick}>Parar</button>
    </div>
  );
};
