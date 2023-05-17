// import logo from './logo.svg';
// import './App.css';
// import { Count } from './components/useState/Count';
// import { ExampleUseEffect } from './components/useEffect/ExampleUseEffect';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { FocusScreen } from './components/useRef/FocusScreen';
// import { CountRef } from './components/useRef/CountRef';
// import { ContadorRef } from './components/useRef/ContadorRef';
// import { Message } from './components/useRef/Message';
// import { MemoHook } from './components/useMemo/MemoHook';
// import { Loader } from './components/Loader';
// import { Fragment } from 'react';
// import { TodoApp } from './components/useReducer/TodoApp';
import { useLoader } from './components/Loader/hooks/useLoader';

const App = () => {
  const { handleShowLoader } = useLoader();

  const handleLoader = () => {
    handleShowLoader(true);

    setTimeout(() => {
      handleShowLoader(false);
    }, 1000);
  };
  return (
    <>
      {/*STATE*/}
      {/* <Count /> */}

      {/*EFFECT*/}
      {/* <ExampleUseEffect /> */}
      {/* <SimpleForm /> */}

      {/*REF */}
      {/* <FocusScreen /> */}
      {/* <CountRef /> */}
      {/* <ContadorRef /> */}
      {/* <Message /> */}

      {/*MEMO*/}
      {/* <MemoHook /> */}

      {/*CONTEXT*/}
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh',
          alignItems: 'center',
        }}
      >
        <Loader />
        <button onClick={() => handleLoader()}>Haz clic aquí!</button>
      </div> */}

      {/*REDUCER*/}
      {/* <TodoApp /> */}
    </>
  );
};
export default App;
