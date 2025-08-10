import heroBg from "../../assets/images/heroBg.jpg";
import { Button } from "../ui/button";
import Search from "../../assets/svgs/search.svg?react";
import ArrowLeft from "../../assets/svgs/arrow-left.svg?react";
import { Input } from "../ui/input";

export default function Hero() {
  const categories = [
    "Beauty & Wellness",
    "Fitness & Health",
    "Home Services",
    "Events & Entertainment",
  ];

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center h-[80vh] md:h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <div className="container mx-auto z-10 flex flex-col gap-6 md:gap-10 px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center md:text-left">
          Book top-rated services <br className="hidden sm:block" /> or start
          selling your own.
        </h1>
        <div className="flex items-center relative w-full md:w-[54%]">
          <Input
            placeholder="Search for any services"
            className="!bg-white p-5 md:p-6 text-base md:!text-lg pr-12 md:pr-14 text-black placeholder:text-gray-500"
          />
          <Button
            size={"icon"}
            className="bg-primary size-9 md:size-11 !absolute right-1 md:right-1"
          >
            <Search className="size-5 md:size-6" />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-5 justify-center md:justify-start">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className="text-sm md:text-lg text-white bg-white/20 border border-white/40 px-2 py-1 rounded-xl flex items-center gap-1 md:gap-2 backdrop-blur-sm"
              >
                <span className="whitespace-nowrap">{category}</span>
                <ArrowLeft className="size-4 md:size-5 rotate-180" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
