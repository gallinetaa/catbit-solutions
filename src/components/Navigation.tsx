"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Equipo", href: "#equipo" },
  { name: "Portafolio", href: "#portafolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contacto", href: "#contacto" },
  { name: "Tienda", href: "#tienda" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-purple-500 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              <span className="text-xl">🐱</span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[#00d4ff] font-bold text-sm">CatBit</span>
              <span className="text-white/70 text-xs">Solutions</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`nav-link text-white hover:text-[#00d4ff] transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-[#00d4ff]"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-[#ff4757] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff4757] text-white btn-glow px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,71,87,0.5)]"
              onClick={() => handleNavClick("#contacto")}
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-[#00d4ff] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="glass-effect rounded-xl p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block py-3 px-4 text-white hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.1)] rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-[#00d4ff] bg-[rgba(0,212,255,0.1)]"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full mt-4 bg-gradient-to-r from-[#ff4757] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff4757] text-white btn-glow py-3 rounded-full"
              onClick={() => handleNavClick("#contacto")}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
