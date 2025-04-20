import React from 'react';
import { CheckCircle } from 'lucide-react';

type NotificationProps = {
  show: boolean;
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({ show, onClose }) => {
  if (!show) return null;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-full border border-white border-opacity-20 px-4 py-2 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-green-400" />
        <p className="text-white text-sm">You'll be notified when we launch!</p>
      </div>
    </div>
  );
};

export default Notification;
