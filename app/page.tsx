'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Home from '@/components/home';
import About from '@/components/about';
import MyWork from '@/components/my-work';
import Contact from '@/components/contact';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />
      <div id="home">
        <Home onGetInTouch={() => scrollToSection('contact')} onViewWork={() => scrollToSection('my-work')} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="my-work">
        <MyWork />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <WhatsAppButton />
    </div>
  );
}
