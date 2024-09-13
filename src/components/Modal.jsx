import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        {/* Heading with bg-blue-300 */}
        <div className="bg-blue-300 flex justify-between items-center py-4 px-2 rounded-t-lg">
          <h2 className="text-[18px] font-[600]">Are You Sure?</h2>
          {/* X Button */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="text-[14px] mb-6">
            You have reviewed all the entries, as these cannot change once
            submitted.
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="bg-gray-300 rounded-md text-black text-[14px] py-2 px-5"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="bg-[#0BB68D] rounded-md text-white text-[14px] py-2 px-5"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
