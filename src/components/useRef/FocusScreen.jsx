import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  console.log('REF', inputRef);

  const onClick = () => {
    //SIN useRef
    // document.querySelector('input').select();
    //CON useRef
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>FocusScreen</h2>
      <br />
      <input ref={inputRef} type="text" placeholder="Ingrese su nombre" />

      <br />
      <button style={{ marginTop: 20 }} onClick={onClick}>
        Set focus
      </button>
    </div>
  );
};
