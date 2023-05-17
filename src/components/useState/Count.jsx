import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(2);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contador</h1>
      <div>
        <span>{count}</span>
      </div>
      <button style={{ marginTop: 30 }} onClick={() => setCount(count + 2)}>
        +
      </button>
    </div>
  );
};

export { Count };
