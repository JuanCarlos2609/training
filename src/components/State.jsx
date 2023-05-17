import { Button } from '@mui/material';
import React, { useState } from 'react';

export const State = () => {
  const [state, setState] = useState(false);

  return (
    <div
      style={{
        flexDirection: 'column',
      }}
    >
      <span
        style={{ marginBottom: 20, justifyContent: 'center', display: 'flex' }}
      >
        {JSON.stringify(state)}
      </span>
      <Button variant="contained" onClick={() => setState(!state)}>
        State / Estado
      </Button>
    </div>
  );
};
