import React, { useState } from 'react';
import Button from './Button';
import Notification from './Notification';
import { addEmailToNotion } from './notionService';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to Notion database
      await addEmailToNotion(email);
      
      // Clear form and show notification
      setEmail('');
      setShowNotification(true);
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Notify me'}
        </Button>
      </form>
      <Notification 
        show={showNotification} 
        onClose={() => setShowNotification(false)} 
      />
    </>
  );
};

export default EmailForm;
