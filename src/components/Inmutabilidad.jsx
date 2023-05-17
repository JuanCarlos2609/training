import React from 'react';

export default function Inmutabilidad() {
  const player = {
    name: 'Messi',
    gb: 7,
    country: 'Argentina',
    teams: {
      a: 'Barcelona',
      b: 'Rosario C',
    },
  };

  const playerCopy = {
    ...player,
    teams: {
      ...player.teams,
      c: 'PSG',
    },
  };

  console.log('player', player);
  console.log('playerCopy', playerCopy);

  if ('1' === 1) console.log('TRUE');
  else console.log('FALSE');

  return (
    <div
      style={{ fontSize: '40px', fontWeight: 800, textTransform: 'uppercase' }}
    >
      inmutabilidad
    </div>
  );
}
