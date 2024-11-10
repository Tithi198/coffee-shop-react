import Image from 'next/image';
import Link from 'next/link';

// Link array
const Links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

// Icons
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          
          {/* Logo */}
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {Links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Social Icons */}
          <ul className="flex text-white text-xl gap-4">
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
          
          {/* Copyright */}
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>© Copyright 2024 - Zenbrew. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
