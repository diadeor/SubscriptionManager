"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  CreditCard,
  CalendarDays,
  Settings,
  LogOut,
  Plus,
  Search,
  Bell,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { StatCard } from "@/components/Dashboard";

type Subscription = {
  id: number;
  name: string;
  cost: number;
  cycle: string;
  nextDate: string;
  iconBg: string;
  status: string;
};

const subscriptionData = [
  {
    id: 1,
    name: "Netflix Premium",
    cost: 19.99,
    cycle: "Monthly",
    nextDate: "Oct 24, 2023",
    iconBg: "bg-red-500",
    status: "Active",
  },
  {
    id: 2,
    name: "Spotify Duo",
    cost: 12.99,
    cycle: "Monthly",
    nextDate: "Oct 28, 2023",
    iconBg: "bg-green-500",
    status: "Active",
  },
  {
    id: 3,
    name: "Adobe Creative Cloud",
    cost: 54.99,
    cycle: "Monthly",
    nextDate: "Nov 01, 2023",
    iconBg: "bg-blue-600",
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Amazon Prime",
    cost: 139.0,
    cycle: "Yearly",
    nextDate: "Jan 15, 2024",
    iconBg: "bg-orange-500",
    status: "Active",
  },
  {
    id: 5,
    name: "ChatGPT Plus",
    cost: 20.0,
    cycle: "Monthly",
    nextDate: "Nov 05, 2023",
    iconBg: "bg-emerald-600",
    status: "Active",
  },
];

const upcomingRenewals = [
  { name: "Netflix Premium", date: "Tomorrow", cost: 19.99, urgent: true },
  { name: "Spotify Duo", date: "In 4 days", cost: 12.99, urgent: false },
  { name: "Adobe CC", date: "Nov 1", cost: 54.99, urgent: false },
];

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <div className="dashboard w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-5">
      <StatCard
        Icon={CreditCard}
        title="Monthly Spend"
        value="$339.26"
        trend="+12% from last month"
        trendUp={true}
        urgent={false}
        color="blue"
      />
      <StatCard
        Icon={CheckCircle2}
        title="Active Subscriptions"
        value="12"
        trend="3 paused"
        trendUp={false}
        urgent={false}
        color="green"
      />
      <StatCard
        Icon={CreditCard}
        title="Monthly Spend"
        value="$339.26"
        trend="+12% from last month"
        trendUp={true}
        urgent={false}
        color="blue"
        extraClass="sm:col-span-2 md:col-span-1"
      />
      <div className="flex flex-col p-3 bg-slate-900 rounded-xl gap-3 sm:col-span-2">
        <p className="title font-bold text-xl pl-2 border-b pb-3 border-slate-800">
          Top Subscriptions
        </p>
        {subscriptionData.map((subs, index) => {
          return <Subscription data={subs} key={index} />;
        })}
      </div>
    </div>
  );
};

// const NavItem = ({ icon, label, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 group ${
//       active
//         ? "bg-blue-600/10 text-blue-400 font-medium"
//         : "text-slate-400 hover:text-white hover:bg-slate-800"
//     }`}
//   >
//     <div className={`${active ? "text-blue-400" : "text-slate-500 group-hover:text-white"}`}>
//       {React.cloneElement(icon, { className: "w-5 h-5" })}
//     </div>
//     <span>{label}</span>
//   </button>
// );

const Subscription = ({ data }: { data: Subscription }) => (
  <div className="flex flex-row gap-4 hover:bg-slate-800 p-2 rounded-xl">
    <p
      className={`icon ${data.iconBg} font-bold rounded-xl w-12 h-12 items-center justify-center flex text-lg`}
    >
      {data.name.charAt(0)}
    </p>
    <div className="mid flex flex-col grow">
      <p className="name text-lg font-bold">{data.name}</p>
      <p className="flex text-sm ">
        <span className="pr-1">{data.cycle}</span>
        <span>• Next: {data.nextDate}</span>
      </p>
    </div>
    <p className="w-20 flex items-center justify-center sm:text-xl font-bold">${data.cost}</p>
  </div>
);

export default Dashboard;
