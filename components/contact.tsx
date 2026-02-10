'use client';

import React from "react"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/humza-arain-bbbba2252/',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/humzaarain51',
      label: 'GitHub',
    },
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'humzaarain51@gmail.com',
      href: 'mailto:humzaarain51@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 311 3277798',
      href: 'tel:+923113277798',
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-accent text-center">Let's Get in Touch</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you. Reach out through any of the methods below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info & Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-4 bg-secondary/30 border border-border rounded-lg hover:border-accent hover:bg-secondary transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{label}</p>
                    <p className="text-foreground group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-foreground">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-secondary border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/30 border border-border rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:opacity-90 py-2 font-semibold transition-all"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>

            {isClient && submitted && (
              <div className="mt-4 p-4 bg-accent/20 border border-accent rounded-lg text-accent text-sm text-center">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call Us Button */}
      <div className="flex justify-center mt-16 mb-8">
        <a
          href="tel:+923113277798"
          className="px-8 py-3 bg-accent text-accent-foreground hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
        >
          Call Us
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-20 pt-8 text-center text-muted-foreground space-y-2">
        <p>© 2026 Muhammad Humza. All rights reserved.</p>
        <p>
          Phone: <a href="tel:+923113277798" className="text-accent hover:underline">+92 311 3277798</a>
        </p>
      </div>
    </section>
  );
}
