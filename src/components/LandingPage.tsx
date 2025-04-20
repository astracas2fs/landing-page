import React from 'react';
import Logo from './Logo';
import EmailForm from './EmailForm';
import CircleButton from './CircleButton';
import { Sun, Moon, Sparkles } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#f5f5f5] p-4 md:p-8 flex items-center justify-center"> {/* Flexbox centering */}
      {/* Main Container with Border */}
      <div className="relative w-[106%] h-[calc(100vh-4rem)] md:w-[94%] md:h-[calc(100vh-6rem)] rounded-[2rem] border-4 border-black overflow-hidden"> {/* Increased size by 30% */}
        {/* Background GIF */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/background.gif)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          {/* Logo */}
          <Logo />
          
          {/* Email Subscription */}
          <div className="w-full max-w-lg mx-auto text-center mb-6">
            <p className="text-white mb-4">Get notified when we launch!</p>
            <EmailForm />
          </div>
        </div>
        
        {/* Coming Soon */}
        <div className="absolute bottom-6 right-6 z-10">
          <p className="text-white text-sm opacity-80">coming soon</p>
        </div>
        
        {/* Circle Buttons */}
        <CircleButton position="top-left">
          <Moon className="w-5 h-5 text-white" />
        </CircleButton>
        
        <CircleButton position="top-right">
          <Sun className="w-5 h-5 text-white" />
        </CircleButton>
        
        <CircleButton position="bottom-left">
          <Sparkles className="w-5 h-5 text-white" />
        </CircleButton>
      </div>
    </div>
  );
};

export default LandingPage;
