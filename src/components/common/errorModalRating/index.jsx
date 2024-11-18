// ErrorModal.jsx
import React from 'react';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Error</h2>
        <p className="text-red-500">{message}</p>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="py-2 px-4 bg-gray-200 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
