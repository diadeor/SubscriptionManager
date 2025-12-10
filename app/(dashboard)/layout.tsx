"use client";
import { DashboardNavigation } from "@/components/Dashboard";
import { ReactNode } from "react";
import { LayoutDashboard, CreditCard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const activeTab = path.split("/")[2];

  return (
    <div className=" h-svh flex">
      <aside className="w-15 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-2 h-svh sticky top-0">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
        </div>
        <AsideItem Icon={LayoutDashboard} />
        <AsideItem Icon={CreditCard} />
        <AsideItem Icon={Settings} />
      </aside>
      <div className="right w-full overflow-y-auto flex-1 place-items-center">
        <DashboardNavigation />
        {children}
      </div>
    </div>
  );
};

const AsideItem = ({ Icon }: { Icon: any }) => {
  return (
    <div className="flex flex-col  hover:bg-blue-500/10 rounded-xl p-2.5 text-slate-400">
      <Icon />
    </div>
  );
};

export default DashboardLayout;
