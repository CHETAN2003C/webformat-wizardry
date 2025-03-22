
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import JoinUsSection from '@/components/JoinUsSection';
import EventsSection from '@/components/EventsSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectsSection />
        <FacilitiesSection />
        <EventsSection />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
