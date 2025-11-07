import { HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <Hero />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
