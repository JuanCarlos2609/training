import { useState } from 'react';
import { Message } from './Message';

export const MemoHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>MemoHook</h2>
      <Message texto="Hola useMEMO!!!!!" />
      <h3>
        Counter: <small>{count}</small>
      </h3>
      <hr />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
