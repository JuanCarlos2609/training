import { useState, useMemo } from 'react';
import { LoaderContext } from './LoaderContext';

const LoaderProvider = (props) => {
  const { children } = props;
  const [show, setShow] = useState(false);

  const contextValue = useMemo(
    () => ({
      show,
      handleShowLoader: setShow,
    }),
    [show]
  );

  return (
    <LoaderContext.Provider value={contextValue}>
      {children}
    </LoaderContext.Provider>
  );
};

export { LoaderProvider };
