
function Modal({ isOpen, onClose, children }) {
  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center dark:text-gray justify-center">
          {/* Modal Content */}

          <div className={`bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
