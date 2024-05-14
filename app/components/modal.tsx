// components/Modal.tsx
import React from "react";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) return null;

    const whatsappNumber = "573053794604"; // Reemplaza esto con el número de WhatsApp real
    const whatsappMessage = "Hello! I saw the message on the clock app."; // Mensaje predeterminado

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
                <div className="mt-4 text-center">
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-700"
                    >
                        Contact on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;
