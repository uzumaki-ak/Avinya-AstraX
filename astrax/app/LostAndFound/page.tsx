import Navbar from "@/components/Navbar";
import { HeroSection } from "./Component/Hero";
import { FormSection } from "./Component/FormSection";
import { RecentItemsGrid } from "./Component/Recent-Items-Grids";
import { HowItWorks } from "./Component/HowItWorks";
import { FeatureHighlights } from "./Component/FeatureHIghlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#D4F9EB] to-[#E8FFF6]">
      <Navbar/>
      <HeroSection />
      <FormSection />
      <RecentItemsGrid />
      <HowItWorks/>
      <FeatureHighlights/>
      <Footer/>
    </main>
  )
}