import React from 'react';

export const Text = ({ algo, subtitle, boolean }) => {
  return (
    <div>
      <h1>Hola {algo}</h1>
      {boolean && <h2>{subtitle}</h2>}
    </div>
  );
};
