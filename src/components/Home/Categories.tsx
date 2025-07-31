import ProfessionalServices from "@/assets/svgs/ProfessionalServices.svg?react";
import SpiritualWellness from "@/assets/svgs/Spiritual&Wellness.svg?react";
import LogisticsErrands from "@/assets/svgs/Logistics&Errands.svg?react";
import AutoMobile from "@/assets/svgs/Auto&Mobile.svg?react";
import HomeServices from "@/assets/svgs/HomeServices.svg?react";
import PhotographyMedia from "@/assets/svgs/Photography&Media.svg?react";
import HomeRentalHosting from "@/assets/svgs/HomeRental&Hosting.svg?react";
import BeautyWellness from "@/assets/svgs/Beauty&Wellness.svg?react";
import FitnessHealth from "@/assets/svgs/Fitness&Health.svg?react";
import EventsEntertainment from "@/assets/svgs/Events&Entertainment.svg?react";
import { useNavigate } from "react-router";

export default function Categories() {
  const navigate = useNavigate();
  const CATEGORIES = [
    { title: "Professional Services", image: ProfessionalServices },
    { title: "Spiritual Wellness", image: SpiritualWellness },
    { title: "Logistics & Errands", image: LogisticsErrands },
    { title: "Auto & Mobile", image: AutoMobile },
    { title: "Home Services", image: HomeServices },
    { title: "Photography & Media", image: PhotographyMedia },
    { title: "Home Rental & Hosting", image: HomeRentalHosting },
    { title: "Beauty & Wellness", image: BeautyWellness },
    { title: "Fitness & Health", image: FitnessHealth },
    { title: "Events & Entertainment", image: EventsEntertainment },
  ];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col gap-2 rounded-2xl shadow-[0_1px_10px_0_rgba(0,0,0,0.2)] dark:shadow-[0_1px_10px_0_var(--primary)]/50 px-4 py-4"
              onClick={() => navigate("/categories")}
            >
              <div className="flex items-center gap-2 ">
                <category.image className="size-10" />
                <p className="text-2xl font-medium text-wrap">
                  {category.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
