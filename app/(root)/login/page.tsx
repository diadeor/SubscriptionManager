"use client";
import { ReactElement, useState } from "react";
import { Mail, Lock, User, ArrowRight, CreditCard, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen  flex font-sans selection:bg-blue-500 selection:text-white">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 relative z-10">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400 mb-2 ">
            {isLogin ? "Welcome back" : "Create an account"}
          </h2>
          <p className="text-slate-400 mb-8">
            {isLogin
              ? "Enter your details to access your dashboard."
              : "Start tracking your subscriptions in minutes."}
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && <Field label="Full Name" placeholder="John Doe" Icon={User} />}
            <Field label="Email Address" type="email" Icon={Mail} placeholder="johndoe@gmail.com" />
            <Field
              label="Password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              Icon={Lock}
            >
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </Field>
            {/* Forgot Password Link (Login Only) */}
            {isLogin && (
              <div className="flex items-center justify-end">
                <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-400">
                  Forgot password?
                </a>
              </div>
            )}
            {/* Submit btn */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-lg text-md font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all shadow-lg shadow-blue-600/50"
            >
              {isLogin ? "Sign in" : "Create account"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social Auth Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-950 text-slate-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 border border-slate-800 rounded-lg shadow-sm bg-slate-900 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
                <FcGoogle className="w-5 h-5" />
                <span>Continue with Google</span>
              </button>
            </div>
          </div>

          {/* Toggle Login/Signup */}
          <p className="mt-8 text-center text-sm text-slate-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-blue-500 hover:text-blue-400 transition-colors"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: FEATURE/VISUAL (Hidden on Mobile) --- */}
      <div className="hidden lg:flex flex-1 relative bg-slate-900 items-center justify-center overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="relative z-10 max-w-lg px-8 text-center">
          {/* Floating Card Visual */}
          <div className="mb-12 relative group perspective-1000">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-2xl transform transition-transform group-hover:scale-105 duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-400">Total Savings</div>
                  <div className="text-2xl font-bold text-white">$642.00</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-3/4"></div>
                </div>
                <div className="h-2 w-2/3 bg-slate-800 rounded-full"></div>
              </div>
            </div>
          </div>

          <blockquote className="text-xl font-medium text-white mb-4">
            "SubTrack saved me over $200 in the first week. I had subscriptions running that I
            completely forgot about!"
          </blockquote>
          <cite className="text-slate-500 not-italic font-medium">
            — Sarah Jenkins, Freelance Designer
          </cite>
        </div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  Icon,
  type,
  children,
  placeholder,
}: {
  label: string;
  Icon: ReactElement | any;
  type?: string;
  children?: ReactElement;
  placeholder: string;
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
        </div>
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          className="block w-full px-10 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all sm:text-sm"
        />
        {children}
      </div>
    </div>
  );
};

export default AuthPage;
