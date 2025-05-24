"use client";

import { useState } from "react";
import Modal from "../ui/modal";
import ContactForm from "../components/contactform"

const ModalCopy2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex h-12 items-center justify-center rounded px-8 font-medium bg-[#271e54] hover:bg-sky-700 text-white hover:bg-opacity-90 transition-colors"
      >
        Kontakt
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

        <div className="mx-auto bg-[#120b38] p-12 rounded-lg text-[#f2f1f0]/90 max-w-2xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
          >
            ✕
          </button>
          <h1 className="text-3xl mb-6">Kontakt</h1>

          <a
            href="tel:+447903618868"
            className="inline-flex h-12 items-center justify-center rounded px-8 font-medium bg-[#271e54] hover:bg-sky-700 text-white hover:bg-opacity-90 transition-colors mr-2"
          >
            Telefon
          </a>
          <ContactForm />
        </div>
      </Modal>
    </div>
  );
};

export default ModalCopy2;
