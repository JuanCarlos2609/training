import { Grid, Button as MuiButton, Stack } from '@mui/material';
import React, { Fragment } from 'react';
import { useButton } from './hooks/useButton';

const Button = () => {
  const { decrement, increment, count } = useButton();

  return (
    <div>
      <div
        direction="column"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ marginBottom: 40 }}>{count}</span>
        {/* <Stack direction="row" spacing={2}> */}
        <button variant="contained" onClick={increment}>
          Incremento
        </button>
        <button variant="contained" onClick={decrement}>
          Decremento
        </button>
        {/* </Stack> */}
      </div>
    </div>
  );
};

export { Button };
