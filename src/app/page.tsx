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
    <main className="flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] relative z-[999] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[130px]">
        <Navbar />
      </div>
      <div className="-mt-24 w-full relative z-0">
        <Hero />
      </div>
      <div className="w-full max-w-[1440px]">
        <PetsList />
      </div>
      <div className="w-full max-w-[1440px]">
        <HeroSmallBanner />
      </div>
      <div className="w-full max-w-[1440px]">
        <ProductsList />
      </div>
      <div className="w-full max-w-[1440px]">
        <PetSellers />
      </div>
      <div className="w-full max-w-[1440px]">
        <AdoptionBanner />
      </div>
      <div className="w-full max-w-[1440px]">
        <PetKnowledge />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
