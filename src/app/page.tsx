import FeatureCourses from "@/compontents/FeatureCourses";
import HeroSection from "@/compontents/HeroSection";
import WhyChooseUs from "@/compontents/WhyChooseUs";
export default function Home() {
  return (
      <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureCourses/>
      <WhyChooseUs/>
      </main>
      </>
    
  );
}
