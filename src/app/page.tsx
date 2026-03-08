import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import ImpactBanner from "@/components/ImpactBanner";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Presentation />
        <ImpactBanner />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
