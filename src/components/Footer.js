import React from "react";
import { 
  FaFacebookF, FaTwitter, FaGoogle, FaInstagram, 
  FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm pt-10">
      {/* Social Icons */}
      <div className="flex justify-center space-x-5 pb-6 border-b border-gray-700">
        {[
          { icon: FaFacebookF, href: "#" },
          { icon: FaTwitter, href: "#" },
          { icon: FaGoogle, href: "#" },
          { icon: FaInstagram, href: "#" },
          { icon: FaLinkedin, href: "#" },
          { icon: FaGithub, href: "#" }
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            {React.createElement(social.icon, { size: 22 })}
          </a>
        ))}
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h6 className="font-semibold text-white flex items-center gap-2 text-lg">
              <FaHome size={20} /> Beit Afifi Real Estate
            </h6>
            <p className="mt-3 text-gray-400 leading-relaxed">
              A premier real estate company specializing in residential, commercial, and luxury properties. Beit Afifi is dedicated to helping clients find their dream homes and profitable investments.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h6 className="font-semibold text-white text-lg">Contact</h6>
            <p className="flex items-center gap-2 mt-3 text-gray-400"><FaHome size={18} /> Jordan, Amman, Jabal AlWabdeh</p>
            <p className="flex items-center gap-2 text-gray-400"><FaEnvelope size={18} /> info@example.com</p>
            <p className="flex items-center gap-2 text-gray-400"><FaPhone size={18} /> +962-795825069</p>
            <p className="flex items-center gap-2 text-gray-400"><FaPrint size={18} /> 06-4050770</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-500">
  &copy; {new Date().getFullYear()}{" "}
  <a className="font-semibold hover:text-white transition-colors duration-300" href="#header">
    Beit Afifi Real Estate
  </a>. All rights reserved.
</div>

    </footer>
  );
}
