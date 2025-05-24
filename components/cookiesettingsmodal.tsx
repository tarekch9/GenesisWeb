"use client";

import { useState } from "react";
import Modal from "../ui/modal";

const CookieSettingsModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [necessaryCookies, setNecessaryCookies] = useState(true);
    const [analyticsCookies, setAnalyticsCookies] = useState(false);
    const [marketingCookies, setMarketingCookies] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-[#f2f1f0]/90 hover:text-white transition-colors"
            >
                Cookie Settings
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="mx-auto bg-[#120b38] p-6 md:p-8 rounded-lg text-[#f2f1f0]/90 max-w-2xl max-h-[90vh] overflow-y-auto">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
                    >
                        ✕
                    </button>
                    <h1 className="text-3xl mb-6">Cookie Settings</h1>

                    <section className="mb-8">
                        <p className="mb-6">
                            We use cookies to enhance your experience. Choose which categories you want to allow.
                        </p>

                        <div className="space-y-6">
                            {/* Necessary Cookies - Always active */}
                            <div className="flex items-center justify-between p-4 bg-[#1e134a] rounded-lg">
                                <div>
                                    <h3 className="text-xl font-medium mb-1">Necessary Cookies</h3>
                                    <p className="text-sm text-[#f2f1f0]/70">
                                        Essential for the website to function and cannot be switched off.
                                    </p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={necessaryCookies}
                                        disabled
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="flex items-center justify-between p-4 bg-[#1e134a] rounded-lg">
                                <div>
                                    <h3 className="text-xl font-medium mb-1">Analytics Cookies</h3>
                                    <p className="text-sm text-[#f2f1f0]/70">
                                        Help us understand how visitors interact with our website.
                                    </p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={analyticsCookies}
                                        onChange={() => setAnalyticsCookies(!analyticsCookies)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="flex items-center justify-between p-4 bg-[#1e134a] rounded-lg">
                                <div>
                                    <h3 className="text-xl font-medium mb-1">Marketing Cookies</h3>
                                    <p className="text-sm text-[#f2f1f0]/70">
                                        Used to track visitors across websites for advertising purposes.
                                    </p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={marketingCookies}
                                        onChange={() => setMarketingCookies(!marketingCookies)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl mb-4">Cookie Policy</h2>
                        <p className="mb-4">
                            For more information about how we use cookies, please read our
                            <a href="#" className="text-blue-400 hover:underline ml-1">
                                full Cookie Policy
                            </a>.
                        </p>
                    </section>

                    <div className="flex justify-end space-x-4">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-6 py-2 border border-[#f2f1f0]/30 rounded-lg hover:bg-[#f2f1f0]/10 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                // Save cookie preferences here
                                setIsModalOpen(false);
                            }}
                            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Save Preferences
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CookieSettingsModal;