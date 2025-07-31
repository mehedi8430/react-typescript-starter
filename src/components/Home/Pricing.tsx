import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section className="w-full py-20 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-20">
        <div className="text-center max-w-md space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">
            Professional & Trustworthy
          </h2>
          <p className="text-lg text-gray-900">
            Simple, Transparent Pricing for Every Investor
          </p>
        </div>
        
        <div className="flex justify-center w-full">
          <PricingCard />
        </div>
      </div>
    </section>
  );
}