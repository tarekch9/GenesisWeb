"use client";

import { useState } from "react";
import Modal from "../ui/modal";

const ModalCopy2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-y-scroll flex flex-col items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-sm text-[#f2f1f0]/90 hover:text-white transition-colors"
      >
        Privacy & Policy
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>

        <div className="mx-auto bg-[#120b38] p-12 rounded-lg text-[#f2f1f0]/90 max-w-2xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
          >
            ✕
          </button>
          <h1 className="text-3xl mb-6">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">1. General Information</h2>
            <p className="mb-4">
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl bold mb-4">2. Data Collection</h2>
            <p className="mb-4">
              We collect personal data that you voluntarily provide to us, for
              example, when you fill out a form or get in touch with us.
            </p>
            <p className="mb-4">
              The types of data we collect may include your name, email address,
              phone number, and other relevant information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl bold mb-4">3. Use of Data</h2>
            <p className="mb-4">
              We use your personal data to provide and improve our services,
              communicate with you, and comply with legal obligations.
            </p>
            <p className="mb-4">
              Your data will not be shared with third parties without your
              consent, except as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl bold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, alteration,
              or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl bold mb-4">5. Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal
              data at any time. If you have any questions or requests, please
              contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl bold mb-4">6. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and we encourage you to review it
              periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl bold mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a>
                <strong>info@beyondcateringdecor.co.uk</strong>
              </a>
              .
            </p>
          </section>
        </div>

      </Modal>
    </div>
  );
};

export default ModalCopy2;
