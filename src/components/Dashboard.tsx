import React, { useState } from 'react';
import { Velo } from './Velo';

export const Dashboard = ({ tasks }: { tasks: any[] }) => {
  const [view, setView] = useState<'card' | 'timeline'>('card');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ScholarFlow Dashboard</h1>
      <button onClick={() => setView('card')}>Card View</button>
      <button onClick={() => setView('timeline')} className="ml-2">Timeline</button>
      
      <div className="mt-6">
        {view === 'card' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tasks.map(t => <div key={t.id} className="p-4 border rounded">{t.title}</div>)}
          </div>
        ) : (
          <div className="space-y-2">
            {tasks.map(t => <div key={t.id} className="p-2 border-b">{t.title}</div>)}
          </div>
        )}
      </div>
      <Velo state="happy" />
    </div>
  );
};
