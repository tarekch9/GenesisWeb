"use client";

import { useState } from "react";
import Modal from "../ui/modal";

const TermsOfServiceModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="overflow-y-scroll flex flex-col items-center justify-center">
            <button
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-[#f2f1f0]/90 hover:text-white transition-colors"
            >
                Terms of Service
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="mx-auto bg-[#120b38] p-8 md:p-12 rounded-lg text-[#f2f1f0]/90 max-w-2xl max-h-[90vh] overflow-y-auto">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
                    >
                        ✕
                    </button>
                    <h1 className="text-3xl mb-6">Terms of Service</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing or using our services, you agree to comply with and be bound by these Terms of Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">2. Service Description</h2>
                        <p className="mb-4">
                            We provide catering and decoration services for events. All services are subject to availability and may require advance booking.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">3. User Responsibilities</h2>
                        <p className="mb-4">
                            You agree to provide accurate information when making reservations and to comply with all applicable laws and regulations.
                        </p>
                        <p className="mb-4">
                            Any damages caused to equipment or venues will be charged to the client.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">4. Payments and Cancellations</h2>
                        <p className="mb-4">
                            A 50% deposit is required to confirm bookings. Cancellations within 14 days of the event will forfeit the deposit.
                        </p>
                        <p className="mb-4">
                            Full payment is due 7 days prior to the event date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">5. Liability</h2>
                        <p className="mb-4">
                            We are not liable for any food allergies or dietary restrictions unless notified in writing at least 7 days in advance.
                        </p>
                        <p className="mb-4">
                            Our liability for any claim is limited to the total amount paid for the services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">6. Intellectual Property</h2>
                        <p className="mb-4">
                            All designs, recipes, and decorative concepts remain our intellectual property and may not be replicated without permission.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">7. Governing Law</h2>
                        <p className="mb-4">
                            These terms shall be governed by and construed in accordance with the laws of England and Wales.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">8. Contact Information</h2>
                        <p className="mb-4">
                            For questions regarding these terms, please contact us at {" "}
                            <a href="mailto:info@beyondcateringdecor.co.uk" className="text-blue-400 hover:underline">
                                <strong>info@beyondcateringdecor.co.uk</strong>
                            </a>.
                        </p>
                    </section>
                </div>
            </Modal>
        </div>
    );
};

export default TermsOfServiceModal;