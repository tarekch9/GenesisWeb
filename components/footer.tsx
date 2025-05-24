import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import PrivacyModal from "./privacypolicymodal"
import TermsServiceModal from "./termsservicemodal"
import CookieSettingsModal from "./cookiesettingsmodal";


export default function Footer() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[#120b38] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1a1542] rounded-lg flex items-center justify-center mb-4">
              <span className="text-[#4cd3e3] text-sm md:text-base">GenesisWeb</span>
            </div>
            <p className="text-gray-300 text-sm mt-2 hidden md:block">
              Creating digital excellence since 2025
            </p>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Resources</h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  My Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  Blog Posts
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Me Section */}
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Follow Me</h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-sm md:text-base">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Newsletter</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Join our newsletter for the latest updates and exclusive content.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email here"
                className="flex-1 px-4 py-2 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4cd3e3]"
              />
              <button className="px-6 py-2 bg-[#4cd3e3] text-[#120b38] rounded hover:bg-[#3ab7c6] transition-colors font-medium">
                Subscribe
              </button>
            </div>

            <p className="text-xs md:text-sm mt-3 text-gray-400">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8 md:my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-400">
              © 2025 GenesisWeb. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <PrivacyModal />
            <TermsServiceModal />
            <CookieSettingsModal />
          </div>

          <div className="flex gap-4 md:gap-6">
            <Link href="#" aria-label="Facebook" className="hover:text-[#4cd3e3] transition-colors">
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-[#4cd3e3] transition-colors">
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-[#4cd3e3] transition-colors">
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-[#4cd3e3] transition-colors">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}