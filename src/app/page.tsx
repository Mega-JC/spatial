"use client";

import Footer from "@/components/Footer";
import PromoBiometrics from "@/components/PromoBiometrics";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PromoCards from "@/components/PromoCards";

export default function HomePage() {
  return (
    <main className="text-alabaster flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <PromoBiometrics />
      <PromoCards />
      <Footer />
    </main>
  );
}
