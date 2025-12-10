import { X, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const Mobile = ({
  isMenuOpen = false,
  setIsMenuOpen,
}: {
  setIsMenuOpen: any;
  isMenuOpen: boolean;
}) => {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-slate-300 hover:text-white"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );
};

export const MobileDropDown = ({ menuState = false }) => {
  const [user, setUser] = useState(true);
  return (
    menuState && (
      <div className="md:hidden bg-slate-900 border-b border-slate-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/#features" className="block px-3 py-2 rounded-md hover:bg-slate-800">
            Features
          </Link>
          <Link href="/#how-it-works" className="block px-3 py-2 rounded-md hover:bg-slate-800">
            How it Works
          </Link>
          <Link href="/#pricing" className="block px-3 py-2 rounded-md hover:bg-slate-800">
            Pricing
          </Link>
          <Link href={user ? "/dashboard" : `/login`} className="cursor-pointer">
            <button className="w-full text-left mt-4 bg-blue-600 text-white px-3 py-2 rounded-md font-medium">
              {user ? "Go to Dashboard" : "Get Started"}
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default Mobile;
