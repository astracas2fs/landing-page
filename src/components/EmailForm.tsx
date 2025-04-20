import React, { useState } from 'react';
import Button from './Button';
import Notification from './Notification';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    setEmail('');
    setShowNotification(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow text-sm rounded-full px-4 py-2 bg-white bg-opacity-95 border-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <Button type="submit">Notify me</Button>
      </form>
      <Notification 
        show={showNotification} 
        onClose={() => setShowNotification(false)} 
      />
    </>
  );
};

export default EmailForm