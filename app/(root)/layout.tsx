import { ReactNode } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NormalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default NormalLayout;
