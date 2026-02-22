import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-4">Vortex</h3>
          <p className="text-gray-500 leading-relaxed">
            Revolutionizing digital solutions for a connected world.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Partners</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        &copy; {currentYear} Vortex. All rights reserved.
      </div>
    </footer>
  );
}
