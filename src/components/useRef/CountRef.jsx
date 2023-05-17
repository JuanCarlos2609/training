import { useState, useRef } from 'react';

export const CountRef = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const handleClick = (increment) => {
    if (increment) {
      // setCount(count + 1);
      ref.current++;
    }
    // else {
    // setCount(count - 1);
    // ref.current--;
    // }

    // console.log(`Contador: ${count}`);
    console.log(`Contador: ${ref.current}`);
  };

  console.log('RENDER!!!');

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>Count Ref</h2>
      <br />
      <button onClick={() => handleClick(true)}>Click!</button> &nbsp;
      {/* <button onClick={() => handleClick(false)}>-</button> */}
    </div>
  );
};
