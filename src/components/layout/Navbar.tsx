"use client";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section based on scroll position
      const sections = ["products", "about", "story", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#", id: "home" },
    { label: "Products", href: "#products", id: "products" },
    { label: "About", href: "#about", id: "about" },
    { label: "Our Story", href: "#story", id: "story" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-sh-base border-b border-sh-border dark:border-sh-deep transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#");
            }}
            className="flex-shrink-0"
          >
            <Logo variant="auto" size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href)}
                className={`font-lato text-sm transition-colors ${
                  activeSection === link.id
                    ? "text-sh-plum dark:text-sh-magenta"
                    : "text-sh-muted dark:text-sh-rose hover:text-sh-plum dark:hover:text-sh-magenta"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              href="https://wa.me/2348080571942"
              variant="primary"
              className="hidden md:inline-block text-sm px-5 py-2"
            >
              Shop Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-sh-plum dark:text-sh-magenta"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-sh-deep border-b border-sh-border dark:border-sh-deep">
            <div className="flex flex-col items-center gap-4 py-6 px-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className="font-lato text-sm text-sh-muted dark:text-sh-rose hover:text-sh-plum dark:hover:text-sh-magenta transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                href="https://wa.me/2348080571942"
                variant="primary"
                className="mt-2 text-sm px-5 py-2"
              >
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
