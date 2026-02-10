'use client';

export default function About() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-accent">About Me</h2>

        {/* Intro */}
        <div className="mb-16 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I create modern web applications by combining intuitive, responsive frontends with robust, scalable backend systems. My work focuses on delivering high-performance, user-centric solutions that are visually polished, technically efficient, and built with the latest web technologies.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Experience</h3>
          <div className="bg-secondary/30 border border-border rounded-xl p-8 space-y-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-accent">Full-Stack Developer</h4>
                <p className="text-sm text-muted-foreground">Professional, Academic & Personal Projects</p>
              </div>
              <span className="text-sm font-medium text-muted-foreground">2022 – Present</span>
            </div>
            <p className="text-muted-foreground">
              Software Developer | Freelance & Software House
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over 1 year of professional experience in a software house, building end-to-end web applications combining frontend and backend development.
            </p>

            <div className="pt-4 space-y-3">
              <p className="font-semibold text-foreground">Skills & Technologies:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span><strong>Frontend:</strong> HTML, CSS, JavaScript (ES6+), React, Next.js, Tailwind CSS, TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span><strong>Backend:</strong> Node.js, APIs, Database Integration (SQL / NoSQL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span><strong>CMS & E-commerce:</strong> WordPress, Shopify</span>
                </li>
              </ul>
            </div>

            <p className="pt-4 text-muted-foreground leading-relaxed">
              Focused on creating responsive, user-friendly, high-performance applications from interactive UIs to robust backend systems.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground">Education</h3>
          <div className="space-y-4">
            {[
              {
                period: '2022 – 2026',
                degree: 'BS Software Engineering',
                school: 'Iqra University',
              },
              {
                period: '2020 – 2021',
                degree: 'Higher Secondary Certificate',
                school: 'BISE Mirpurkhas',
              },
              {
                period: '2017 – 2019',
                degree: 'Secondary School Certificate',
                school: 'BISE Mirpurkhas',
              },
            ].map((edu, idx) => (
              <div key={idx} className="bg-secondary/30 border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-accent">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
