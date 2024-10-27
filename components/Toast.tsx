import ReactDOM from "react-dom";
import React, { useEffect } from "react";

// Define the props interface
interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  // Automatically close the toast after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Hide after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded shadow-lg z-50 animate-fade-in">
      {message}
      <button onClick={onClose} className="ml-4 text-sm text-gray-400 hover:text-white">
        Dismiss
      </button>
    </div>,
    document.body
  );
};

export default Toast;
