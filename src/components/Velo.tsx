import React from 'react';

export const Velo = ({ state }: { state: 'happy' | 'thinking' | 'celebrating' }) => {
  return (
    <div className="fixed bottom-4 right-4 w-20 h-20">
      <img src={`/velo-${state}.png`} alt="Velo" />
    </div>
  );
};
