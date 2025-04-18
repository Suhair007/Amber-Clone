
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { StatsSection } from "@/components/home/StatsSection";
import { PopularCities } from "@/components/home/PopularCities";
import { PropertiesSection } from "@/components/home/PropertiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PromotionsSection } from "@/components/home/PromotionsSection";
import { BookingSteps } from "@/components/home/BookingSteps";
import { PartnersSection } from "@/components/home/PartnersSection";
import { CitiesSection } from "@/components/home/CitiesSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <StatsSection />
        <PopularCities />
        <PropertiesSection />
        <TestimonialsSection />
        <FeaturesSection />
        <PromotionsSection />
        <BookingSteps />
        <PartnersSection />
        <CitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
