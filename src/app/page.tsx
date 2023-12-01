'use client'

import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Plans from "./components/Plans";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <HeroSection />
        <Services />
        <Plans />
        <Brands />
      </main>
      <Footer />
    </>
  )
}
