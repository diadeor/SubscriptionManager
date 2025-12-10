import { CreditCard } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="bg-blue-600 p-1 rounded-md">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">SubTrack</span>
          </div>
          <div className="flex gap-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} SubTrack Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
