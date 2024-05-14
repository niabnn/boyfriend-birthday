// components/Modal.tsx
import React from "react";
import Image from "next/image"; // Importa el componente Image de Next.js

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) return null;

    const whatsappNumber = "573053794604"; // Reemplaza esto con el número de WhatsApp real
    const whatsappMessage = "Hey babe, Let's schedule that kiss..."; // Mensaje predeterminado

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-light-orange p-6 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="flex justify-center mb-4">
                    <Image src="/logo.jpeg" alt="Logo" width={180} height={180} /> {/* Agregar la imagen */}
                </div>
                {children}
                <div className="mt-4 text-center">
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-glow-orange text-white px-4 py-2 rounded shadow-md hover:bg-white hover:text-glow-orange mt-2 font-display"
                    >
                        Click here to schedule that kiss
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;

