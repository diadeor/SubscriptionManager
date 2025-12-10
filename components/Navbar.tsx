"use client";
import { CreditCard } from "lucide-react";
import Mobile, { MobileDropDown } from "./MobileMenu";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(true);
  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/`}>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">SubTrack</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#features" className="hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/#how-it-works" className="hover:text-white transition-colors">
                How it Works
              </Link>
              <Link href="/#pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href={user ? "/dashboard" : `/login`}>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-blue-500/20">
                {user ? "Dashboard" : "Get Started"}
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Mobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <MobileDropDown menuState={isMenuOpen} />
    </nav>
  );
};

export default NavBar;
