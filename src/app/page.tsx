import FeatureCourses from "@/compontents/FeatureCourses";
import HeroSection from "@/compontents/HeroSection";
export default function Home() {
  return (
      <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureCourses/>
      </main>
      </>
    
  );
}
