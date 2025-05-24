import { motion, AnimatePresence } from "framer-motion";
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" // Overlay mit Transparenz
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative mx-4 w-full max-w-2xl" // Breite anpassbar, aber begrenzt
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[80vh] overflow-y-auto"> {/* Scrollbar nur bei Bedarf */}
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;