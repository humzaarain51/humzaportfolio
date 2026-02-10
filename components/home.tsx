'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Github, Linkedin, Facebook, ExternalLink } from 'lucide-react';

interface HomeProps {
  onGetInTouch: () => void;
  onViewWork: () => void;
}

export default function Home({ onGetInTouch, onViewWork }: HomeProps) {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/humza-arain-bbbba2252/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/humzaarain51', label: 'GitHub' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Hi, I'm <span className="text-accent">Muhammad Humza</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Full-Stack Developer crafting modern web applications with intuitive frontends and robust backend systems
              </p>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground font-medium mb-3">Platforms:</p>
                <div className="flex flex-wrap gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <a
                    href="#"
                    className="px-4 py-2 bg-secondary rounded-lg hover:bg-accent/20 transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.5 8c.83 0 1.5-.67 1.5-1.5S19.33 5 18.5 5 17 5.67 17 6.5 17.67 8 18.5 8M19 13h-5v5h5v-5M6.5 8C7.33 8 8 7.33 8 6.5S7.33 5 6.5 5 5 5.67 5 6.5 5.67 8 6.5 8M7 13H2v5h5v-5m6-7H8v5h5V6z" />
                    </svg>
                    Upwork
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-secondary rounded-lg hover:bg-accent/20 transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.5 13.5l2.5-4v4h8v-8h-4V4h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2v-4.5zM4 8h3v3H4V8z" />
                    </svg>
                    Freelancer
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-muted-foreground font-medium mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'APIs', 'Databases'].map((tech, idx) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full animate-fade-in" style={{ animationDelay: `${(idx + 2) * 50}ms` }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button
                onClick={onViewWork}
                className="bg-accent text-accent-foreground hover:opacity-90 hover:shadow-lg hover:shadow-accent/50 px-8 py-6 text-base font-semibold transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                onClick={onGetInTouch}
                variant="outline"
                className="px-8 py-6 text-base font-semibold border-border hover:bg-secondary hover:border-accent bg-transparent transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 group"
                  style={{ animationDelay: `${300 + idx * 50}ms` }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center md:justify-end animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-border shadow-2xl transform hover:scale-105 hover:shadow-accent/30 transition-all duration-300">
              <Image
                src="/profile.png"
                alt="Muhammad Humza - Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <div className="text-muted-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
