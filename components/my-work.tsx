'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    name: 'TechEvent',
    description: 'Event management platform with advanced filtering, real-time updates, and seamless user experience for discovering and managing tech events.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'APIs'],
    github: 'https://github.com/humzaarain51/TechEvent-',
    image: '/images/tech-event.png',
  },
  {
    name: 'Live Tracker App',
    description: 'Real-time location tracking application with interactive maps, user authentication, and live updates for tracking deliveries and assets.',
    techStack: ['React', 'Next.js', 'Node.js', 'Database', 'Maps API'],
    github: 'https://github.com/humzaarain51/live-tracker-app',
    image: '/images/live-tracker.png',
  },
  {
    name: 'Restaurant Menu & Table Booking',
    description: 'Full-featured restaurant management system with digital menu, table reservations, order management, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/humzaarain51/Restaurant-Menu-Table-Booking-Web-App',
    image: '/images/restaurant.png',
  },
  {
    name: 'Shoes Store',
    description: 'E-commerce platform for shoe retail with product catalog, shopping cart, checkout flow, and inventory management.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Stripe API', 'Database'],
    github: 'https://github.com/humzaarain51/Shoes-Store',
    image: '/images/shoes.png',
  },
  {
    name: 'AI Study Companion',
    description: 'Intelligent learning platform powered by AI, providing personalized study plans, interactive quizzes, and adaptive learning paths.',
    techStack: ['React', 'Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/humzaarain51/ai-study-companion',
    image: '/images/ai-study.png',
  },
  {
    name: 'Super Antenna',
    description: 'Professional services website with area-based service locations. Implemented clickable area names that redirect users directly to Google Maps for location-specific services. Work completed while working in a software house.',
    techStack: ['WordPress', 'Google Maps API', 'HTML', 'CSS'],
    website: 'https://superantenna.com.au',
    image: '/images/super antena.png',
  },
  {
    name: 'AAH Trading',
    description: 'E-commerce platform for trading products. Developed multiple website sections and added product listings with proper structure and content organization according to business requirements. Work completed while working in a software house.',
    techStack: ['WordPress', 'WooCommerce', 'HTML', 'CSS'],
    website: 'https://aahtradding.org',
    image: '/images/aah trading.png',
  },
  {
    name: 'EXP Knocker',
    description: 'E-commerce product catalog with custom product presentation. Personally designed and edited all product images using Photoshop, then uploaded complete product catalog with detailed descriptions. Work completed while working in a software house.',
    techStack: ['WordPress', 'WooCommerce', 'Photoshop'],
    website: 'https://expknocker.com',
    image: '/images/expknocker.png',
  },
];

export default function MyWork() {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-accent">My Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-64 overflow-hidden bg-secondary/50 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                {/* Project Header */}
                <div>
                  <h3 className="text-xl font-bold text-accent group-hover:text-accent transition-colors">{project.name}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-foreground text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent hover:text-accent-foreground text-foreground rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent hover:text-accent-foreground text-foreground rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            These projects showcase my ability to build full-stack applications with modern technologies, handling everything from responsive UIs to scalable backend systems.
          </p>
        </div>
      </div>
    </section>
  );
}
