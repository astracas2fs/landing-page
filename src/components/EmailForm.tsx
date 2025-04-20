import React, { useState } from 'react';
import Button from './Button';
import Notification from './Notification';
import { addEmailToNotion } from './notionService';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Submit email to Notion database
      await addEmailToNotion(email);
      
      // Clear form and show success notification
      setEmail('');
      setShowNotification(true);
    } catch (err) {
      console.error('Failed to submit email:', err);
      setError('Failed to submit. Please try again later.');
      setTimeout(() => setError(null), 3000);
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
          disabled={isSubmitting}
          className="flex-grow text-sm rounded-full px-4 py-2 bg-white bg-opacity-95 border-none focus:outline-none focus:ring-2 focus:ring-white"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Notify me'}
        </Button>
      </form>
      
      {error && (
        <div className="mt-2 text-red-300 text-sm">
          {error}
        </div>
      )}
      
      <Notification 
        show={showNotification} 
        onClose={() => setShowNotification(false)} 
      />
    </>
  );
};

export default EmailForm;
