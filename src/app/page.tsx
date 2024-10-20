import Hero from "@/components/Hero";
import PetsList from "@/components/PetsList";
import ProductsList from "@/components/ProductsList";
import PetKnowledge from "@/components/PetKnowledge";
import HeroSmallBanner from "@/components/HeroSmallBanner";
import Navbar from "@/components/Navbar";
import AdoptionBanner from "@/components/AdoptionBanner";
import PetSellers from "@/components/PetSellers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative z-[999] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[130px]">
       <Navbar />
      </div>
      <div className="-mt-24 relative z-0">
        <Hero />
      </div>
      <PetsList />
      <HeroSmallBanner />
      <ProductsList />
      <PetSellers />
      <AdoptionBanner />
      <PetKnowledge />
      <Footer />
    </main>
  );
}
