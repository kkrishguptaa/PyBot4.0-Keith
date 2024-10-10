import { Hero } from "@/components/hero";
import FeaturesSection from "@/components/features";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <FeaturesSection />
    </div>
  );
}
