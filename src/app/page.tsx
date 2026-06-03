import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import NewsMedia from "@/components/NewsMedia";
import PartnersMarquee from "@/components/PartnersMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col min-h-screen">
        <Hero />
        <Products />
        <NewsMedia />
        <PartnersMarquee />
      </main>
      <Footer />
    </>
  );
}
