import { AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
export const DashboardNavigation = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between sticky top-0 text-white p-2 pl-3 pr-5 border-b border-slate-800 h-15 bg-slate-950">
      <p className="font-bold text-2xl">Overview</p>
      <div className="right">
        <p className="user w-10 h-10 bg-blue-500 rounded-full"></p>
      </div>
    </nav>
  );
};

export const StatCard = ({
  Icon,
  title,
  value,
  trend,
  trendUp,
  urgent,
  color,
  extraClass,
}: {
  Icon: any;
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  urgent: boolean;
  color: string;
  extraClass?: string;
}) => {
  return (
    <div className={`stat w-full bg-slate-900 p-4 rounded-xl ${extraClass}`}>
      <p className="title flex flex-row items-center gap-3 font-bold mb-6">
        <span className={`bg-slate-950 p-1.5 rounded-lg text-${color}-400`}>
          <Icon size={`1.1em`} />
        </span>
        <span>{title}</span>
      </p>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <p
        className={`flex flex-row gap-2 items-center ${
          urgent ? "text-yellow-500" : trendUp ? "text-red-400" : "text-green-400"
        }`}
      >
        {urgent ? (
          <AlertCircle size={`1em`} />
        ) : trendUp ? (
          <ArrowUpRight size={`1em`} />
        ) : (
          <ArrowDownRight size={`1em`} />
        )}{" "}
        {trend}
      </p>
    </div>
  );
};
