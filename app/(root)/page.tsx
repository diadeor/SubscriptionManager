import { CheckCircle2, BarChart3, BellRing, ShieldCheck, ArrowRight } from "lucide-react";
import { ReactElement } from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Stop paying for <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            forgotten subscriptions.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
          Track, manage, and optimize your recurring expenses in one place. Get notified before
          renewals and save an average of $600/year.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all shadow-xl shadow-blue-500/20">
            Start Tracking Free <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder for dashboard image */}
            <div className="aspect-video bg-slate-800/50 flex items-center justify-center text-slate-500">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Dashboard Preview Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Everything you need to regain control
            </h2>
            <p className="text-slate-400">
              Powerful features designed to keep money in your pocket.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BellRing className="w-6 h-6 text-blue-400" />}
              title="Renewal Alerts"
              description="Get notified via email or push notification 3 days before any subscription renews, so you can cancel in time."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6 text-emerald-400" />}
              title="Spending Analytics"
              description="Visualize your monthly and yearly spend. See exactly where your money is going with intuitive charts."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-purple-400" />}
              title="High Security"
              description="We use 256-bit encryption. Your data is strictly private and never sold to third parties."
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-400">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Manual Tracker</h3>
              <div className="text-4xl font-bold text-white mb-6">$0</div>
              <p className="text-slate-400 mb-8">Perfect for getting started with manual entry.</p>
              <ul className="space-y-4 mb-8">
                <PricingItem text="Track up to 5 subscriptions" />
                <PricingItem text="Basic email alerts" />
                <PricingItem text="Manual data entry" />
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 rounded-2xl border-2 border-blue-600 bg-slate-900/80 shadow-2xl shadow-blue-900/20">
              <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl text-white">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pro Sync</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $1.99<span className="text-lg text-slate-500 font-normal">/mo</span>
              </div>
              <p className="text-slate-400 mb-8">Automated tracking connected to your bank.</p>
              <ul className="space-y-4 mb-8">
                <PricingItem text="Unlimited subscriptions" highlight />
                <PricingItem text="SMS & Email alerts" highlight />
                <PricingItem text="Auto-sync with bank" highlight />
                <PricingItem text="Advanced analytics" highlight />
              </ul>
              <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25">
                Start 14-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactElement;
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const PricingItem = ({ text = "", highlight = false }) => (
  <li className="flex items-center gap-3 text-slate-300">
    <CheckCircle2 className={`w-5 h-5 ${highlight ? "text-blue-400" : "text-slate-500"}`} />
    <span>{text}</span>
  </li>
);

export default LandingPage;
