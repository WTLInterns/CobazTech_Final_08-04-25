"use client"
import Image from "next/image"
import { MdEmail, MdPhone } from "react-icons/md"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 p-10 border-t shadow-md font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="transform transition-all hover:scale-105">
          <Link href="/">
            <Image
              src="/webutsav.png"
              alt="Digimedia Solutions"
              width={150}
              height={50}
              className="transition-transform duration-300 transform hover:scale-110"
            />
          </Link>
          <p className="mt-4 text-sm text-gray-700 transition-transform duration-300 transform hover:scale-105 hover:text-blue-700">
          Webutsav is a results-driven digital marketing agency that helps businesses grow through tailored SEO, PPC, and social media strategies. We focus on delivering measurable success by driving targeted traffic and boosting brand visibility.
          </p>
          <div className="flex flex-col mt-4">
          <div className="flex items-center transition-transform duration-300 transform hover:scale-110 hover:text-blue-600">
            <MdEmail className="mr-2 text-gray-800 transition-all duration-300 hover:scale-110" />
            <a
              href="mailto:info@webutsav.com"
              className="text-blue-600 hover:underline transition-all duration-300 transform hover:scale-110 hover:text-blue-800"
            >
              info@webutsav.com
            </a>
          </div>
          <div className="flex items-center mt-2 transition-transform duration-300 transform hover:scale-110 hover:text-blue-600">
            <MdPhone className="mr-2 text-gray-800 transition-all duration-300 hover:scale-110" />
            <a
              href="tel:+91 8766922792"
              className="text-blue-600 hover:underline transition-all duration-300 transform hover:scale-110 hover:text-blue-800"
            >
              +91 8766922792
            </a>
          </div>
        </div>
        </div>

        {/* Our Solution */}
        <div className="transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 text-[#2D3748] hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
            Our Services
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Web Designing & Development", href: "/Services/Web_Designing_Development" },
              { name: "Ecommerce Website Designing", href: "/Services/Ecommerce_Website_Designing" },
              { name: "Google Adwords", href: "/Services/Google_Adwords" },
              { name: "Search Engine Optimisation", href: "/Services/Search_Engin_Optimisation" },
              { name: "Local SEO", href: "/Services/Local_Seo" },
              { name: "Social Media Marketing", href: "/Services/Social_Media_Marketing" },
              { name: "Mobile Application Development", href: "/Services/Mobile_Application" },
              { name: "Cab Expenses Tracker", href: "/Services/Cab_Expenses_Tracker" }

            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 transform hover:scale-105"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 text-[#2D3748] hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "About Us", href: "/AboutUs" },
              { name: "Blogs", href: "/Blog" },
              { name: "Contact Us", href: "/Contact" },
            ].map((nav) => (
              <li key={nav.name}>
                <Link
                  href={nav.href}
                  className="block cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 transform hover:scale-105"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div className="transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 text-[#2D3748] hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
            Address
          </h3>
          <p
            className="block p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 transform hover:scale-105 mb-4"
          >
            Wing-A, Downtown Rd, City Vista, Kharadi, Pune, Maharashtra 411014
          </p>
          <div className="w-full h-48 rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.287409771789!2d73.94191347496397!3d18.561076882540295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1386837ffd5%3A0xcba65bf9ace19de0!2sWTL%20Tourism%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1740069526162!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700 transition-all duration-300 transform hover:scale-105">
        <p>&copy; {new Date().getFullYear()} Webutsav | All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link
            href="/Privacy"
            className="hover:underline hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-use"
            className="hover:underline hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

