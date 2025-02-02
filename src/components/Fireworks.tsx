import React from 'react';

export const Fireworks: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-firework"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${Math.random() * 1 + 2}s`
          }}
        >
          <div className="w-4 h-4 bg-pink-400 rounded-full" />
        </div>
      ))}
    </div>
  );
}