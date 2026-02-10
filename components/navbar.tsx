'use client';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-accent">Muhammad Humza</div>
        <div className="flex gap-8">
          {['Home', 'About', 'My Work', 'Contact'].map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '-');
            return (
              <button
                key={item}
                onClick={() => onNavigate(sectionId)}
                className={`text-sm transition-colors ${
                  activeSection === sectionId ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
