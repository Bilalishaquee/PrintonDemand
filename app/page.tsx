import HomeHero from '@/components/home/hero';
import ProductShowcase from '@/components/home/product-showcase';
import ProcessSection from '@/components/home/process-section';
import FeaturedProducts from '@/components/home/featured-products';
import Testimonials from '@/components/home/testimonials';
import CallToAction from '@/components/home/call-to-action';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen">
        <HomeHero />
      </section>
      
      <section className="snap-start h-screen">
        <ProductShowcase />
      </section>
      
      <section className="snap-start h-screen">
        <ProcessSection />
      </section>
      
      <section className="snap-start h-screen">
        <FeaturedProducts />
      </section>
      
      <section className="snap-start h-screen">
        <Testimonials />
      </section>
      
      <section className="snap-start h-screen">
        <CallToAction />
      </section>
    </div>
  );
}