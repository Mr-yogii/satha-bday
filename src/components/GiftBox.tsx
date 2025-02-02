import React, { useState } from 'react';
import { Gift } from 'lucide-react';

interface GiftBoxProps {
  onOpen: () => void;
}

export const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      onOpen();
      setTimeout(() => setIsOpening(false), 1000);
    }
  };

  return (
    <div 
      className={`gift-box cursor-pointer ${isOpening ? 'opening' : ''}`}
      onClick={handleClick}
    >
      <Gift 
        size={64} 
        className={`text-pink-300 transform transition-transform duration-500 
          ${isOpening ? 'scale-150 opacity-0' : 'hover:scale-110'}`}
      />
      <div className="gift-lid" />
      <div className="gift-box-body" />
    </div>
  );
}