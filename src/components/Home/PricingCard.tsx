import { Button } from "@/components/ui/button";
import Check from "@/assets/icons/cheack.png";
import RocketIcon from "@/assets/icons/rocketPlan.png";

const features = [
  "💼 Full access to all stock research tools",
  "🔒 Stock price calculator",
  "📊 Advanced charting with technical indicators",
  "🧠 1-click company analyzer with custom filters",
  "📈 Options chain with historical data + Greeks",
  "🧾 Clean financials: income statement, balance sheet & cash flow",
  "📅 Earnings calendar with transcript access",
  "📥 Priority support & early access to new tools",
];

export default function PricingCard() {
  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-rose-50 overflow-hidden">
      {/* Promo Banner */}
      <div className="w-full bg-primary p-4 text-center">
        <p className="text-white font-bold text-lg">
          Get 3 months free with annual billing
        </p>
      </div>

      {/* Plan Info */}
      <div className="w-full p-8 bg-yellow-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20">
            <img src={RocketIcon} alt="Pro Plan" className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 uppercase">
            PRO PLAN
          </h3>
        </div>

        {/* Pricing Options */}
        <div className="mt-6 space-y-4">
          <div className="text-center">
            <span className="text-4xl font-semibold">$19/</span>
            <span className="text-2xl">Month </span>
            <span className="text-base font-light">(Billed monthly)</span>
          </div>

          <div className="text-center text-2xl font-semibold">Or</div>

          <div className="text-center">
            <span className="text-5xl font-semibold">$14.45/</span>
            <span className="text-3xl">Month</span>
            <span className="text-base font-light"> (Billed annually)</span>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="p-8">
        <h4 className="text-base font-semibold mb-6">Features you'll get:</h4>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <img 
                  src={Check} 
                  alt="" 
                  className="w-6 h-6" 
                />
              </div>
              <span className="text-base text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="px-8 pb-8">
        <Button className="w-full h-12 border bg-white text-black border-[#232323] hover:bg-[#232323] hover:text-white cursor-pointer">
          <span className="text-lg font-semibold">Get Started</span>
        </Button>
      </div>
    </div>
  );
}