"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Testimoni", href: "/testimoni" },
    { name: "FAQ", href: "/faq" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SIGUPAY<span className="text-gray-800">.COM</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group transition duration-300 font-medium ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg">
          <div className="flex flex-col space-y-2 p-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg font-medium transition duration-300 ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
