import React from "react";
import { OctagonAlert } from "lucide-react";

const AlertModal = ({ show, onClose, user }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-red-600">Critical Alert</h2>
        </div>

        <p className="text-lg text-gray-700 mb-4">
          <strong>{user.name}</strong> is in a critical status!
        </p>
        <p className="text-lg text-gray-700">
          <strong>Temperature:</strong> {user?.temperature}°C
        </p>
        <p className="text-lg text-gray-700">
          <strong>MQ2 Level:</strong> {user?.mq2}
        </p>
        <p className="text-lg text-gray-700">
          Please contact the user immediately to ensure their safety.
          <strong>{user?.contactNumber}</strong>
        </p>
        <p className="text-lg text-gray-700">
          <strong>Address:</strong> {user?.address}
        </p>
        <div className="flex items-center justify-center text-red-600/70 mb-5">
          <OctagonAlert size={200} />
        </div>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
