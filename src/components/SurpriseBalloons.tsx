import React, { useEffect, useState } from 'react';

interface SurpriseBalloonsProps {
  isVisible: boolean;
}

const SURPRISE_QUOTES = [
  "You're Amazing! 💖",
  "Special Like You 🌟",
  "Precious Moments 💝",
  "Pure Magic ✨",
  "Sweet Angel 👼",
  "Beautiful Soul 🎀"
];

export const SurpriseBalloons: React.FC<SurpriseBalloonsProps> = ({ isVisible }) => {
  const [balloons, setBalloons] = useState<Array<{ id: number; quote: string; position: number }>>([]);

  useEffect(() => {
    if (isVisible) {
      const newBalloons = SURPRISE_QUOTES.map((quote, index) => ({
        id: Date.now() + index,
        quote,
        position: 15 + (index * 14), // Distribute across screen width
      }));
      setBalloons(newBalloons);

      // Clear balloons after animation
      const timer = setTimeout(() => {
        setBalloons([]);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon, index) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 surprise-balloon"
          style={{
            left: `${balloon.position}%`,
            animationDelay: `${index * 0.2}s`
          }}
        >
          <div className="heart-container">
            <div className="heart-shape">
              <div className="heart-message">
                <p className="text-center text-sm font-medium text-white drop-shadow-lg px-2">
                  {balloon.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}