import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import ServiceSection from "@/components/Home/ServiceSection";
import { TopProvidersSection } from "@/components/Home/TopProvidersSection";

export default function HomePage() {
  return (
    <section>
      <Hero />
      <Categories />
      <ServiceSection />
      <TopProvidersSection />
    </section>
  );
}
