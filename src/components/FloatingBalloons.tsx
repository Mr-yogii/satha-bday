import React from 'react';

interface FloatingBalloonsProps {
  quotes: string[];
}

const ROMANTIC_QUOTES = [
  "My heart beats for you ❤️",
  "Forever yours 💝",
  "You're my dream come true 💫",
  "My love grows stronger each day 🌹",
  "You make my life complete ✨",
  "Together forever 💖"
];

export const FloatingBalloons: React.FC<FloatingBalloonsProps> = ({ quotes }) => {
  const allQuotes = [...ROMANTIC_QUOTES, ...quotes];
  
  // Calculate positions for balloons to avoid collisions
  const getColumnPosition = (index: number, totalColumns: number) => {
    const column = index % totalColumns;
    const columnWidth = 100 / totalColumns;
    const basePosition = (column * columnWidth) + (columnWidth / 2);
    return basePosition + (Math.random() * 6 - 3); // Reduced randomness
  };

  // Reduced to 2 columns for better performance
  const TOTAL_COLUMNS = 2;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {allQuotes.map((quote, index) => {
        const horizontalPosition = getColumnPosition(index, TOTAL_COLUMNS);
        
        return (
          <div
            key={index}
            className="absolute animate-float will-change-transform"
            style={{
              left: `${horizontalPosition}%`,
              bottom: `${-150 - (index * 80)}%`,
              animationDelay: `${index * 3}s`, // Increased delay
              animationDuration: '20s' // Fixed duration for consistency
            }}
          >
            <div className="relative">
              {/* Heart shape container */}
              <div className="heart-container">
                <div className="heart-shape">
                  <div className="heart-message">
                    <p className="text-center text-sm font-medium text-white drop-shadow-lg px-2">
                      {quote}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-pink-300 to-transparent" />
            </div>
          </div>
        );
      })}
    </div>
  );
}