import React from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl font-light text-white mb-2 flex items-center justify-center">
        Humans
        <span className="flex gap-1 ml-1">
          <Moon className="w-5 h-5" />
          <Sun className="w-5 h-5" />
          <Sparkles className="w-5 h-5" />
        </span>
      </h1>
      <div className="flex items-center justify-center mb-8">
        <div className="text-xs text-white opacity-90 flex items-center">
          <span className="mr-1">Delta Vision</span>
          <span className="block w-px h-3 bg-white mx-1"></span>
          <span>Non Profit CIC</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;