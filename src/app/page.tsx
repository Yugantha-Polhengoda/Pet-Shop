import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PetsList from "@/components/PetsList";
import ProductsList from "@/components/ProductsList";
import MorePuppiesList from "@/components/MorePuppiesList";
import PetKnowledge from "@/components/PetKnowledge";
import HeroSmallBanner from "@/components/HeroSmallBanner";
import Nav from "@/components/Nav";


export default function Home() {
  return (
    <main>
      <div className="relative z-[999] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[130px]">
        <Nav />
      </div>
      {/* <div className="absolute px-5 md:px-10 lg:px-8 xl:px-[130px] max-w-[1440px] mx-auto z-20">
        <Navbar />
      </div> */}

      <div className="-mt-24 relative z-0">
        <Hero />
      </div>
      <PetsList />
      <HeroSmallBanner />
      <ProductsList />
      <PetKnowledge />
    </main>
  );
}