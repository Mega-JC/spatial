// below is the footer component of the neobank website, which is an advanced footer linking to 10 pages

import Link from "next/link";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">About Us</h3>
            <p className="text-gray-400">
              Spatial is a Swedish neobank ushering a new revolution in banking.
              With groundbreaking biometric technology and feature rich banking
              software, Spatial is breaking records across the globe, leading
              the way forward in the future of banking.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
            <p className="mb-2 text-gray-400">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              support@spatialbank.com
            </p>
            <p className="mb-2 text-gray-400">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +1 (800) 123-4567
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Spatial Bank Intl AB (publ). Company
          no: 425252-8672. Regulated by the Swedish Financial Supervisory
          Authority (Finansinspektionen) under the Swedish Electronic Money Act
          (2011:755). License no: 58954.
        </div>
      </div>
    </footer>
  );
}
