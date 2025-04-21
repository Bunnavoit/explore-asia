import FeatureSection from "@/module/home/feature-section";
import HeroSection from "@/module/home/hero-section";
import ProductCard from "@/module/home/product-card";
import Testimonail from "@/module/home/testimonail";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full ">
      <div className="mt-10 px-4 sm:px-8 lg:px-24">
        <HeroSection />
        <div className="mt-24">
          <p className="font-semibold text-4xl">Popular Destinations</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Discover must-visit places around the world curated for your perfect
            getaway.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <FeatureSection />
      </div>
      <Testimonail />
    </div>
  );
}
