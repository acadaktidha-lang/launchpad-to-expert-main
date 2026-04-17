import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import Navbar from "@/components/Navbar";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <JourneySection />
    <Footer />
  </div>
);

export default Index;
