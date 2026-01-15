import CTA from "../components/CTA";
import Comparison from "../components/Comparison";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <main className="grid-glow">
      <Hero />
      <Features />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
