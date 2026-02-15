"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Heart,
  Cat,
} from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Diseño Web", href: "#servicios" },
    { name: "Desarrollo", href: "#servicios" },
    { name: "SEO", href: "#servicios" },
    { name: "E-commerce", href: "#servicios" },
    { name: "Soporte IT", href: "#servicios" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contacto" },
    { name: "Tienda", href: "#tienda" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-20 pb-8">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-50" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-purple-500 flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00d4ff] font-bold text-lg">CatBit</span>
                <span className="text-white/70 text-xs">Solutions</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Soluciones tecnológicas con instinto felino. Diseño web, desarrollo y soporte IT con precisión y agilidad.
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] rounded-lg flex items-center justify-center text-[#00d4ff]/70 hover:bg-[#00d4ff] hover:text-[#0a0a1a] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@catbitsolutions.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#00d4ff]" />
                  contacto@catbitsolutions.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18095550123"
                  className="flex items-center gap-3 text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff]" />
                  +1 (809) 555-0123
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                Santo Domingo, República Dominicana
              </li>
            </ul>
          </div>
        </div>

        {/* Team Cats */}
        <div className="flex justify-center items-center gap-4 mb-8 py-6 border-t border-b border-[rgba(0,212,255,0.1)]">
          <span className="text-white/40 text-sm">Nuestro equipo:</span>
          <div className="flex items-center gap-2">
            <span className="text-lg">🐱</span>
            <span className="text-white/50 text-sm">Gris</span>
            <span className="text-lg">🐱</span>
            <span className="text-white/50 text-sm">Rayo</span>
            <span className="text-lg">🐱</span>
            <span className="text-white/50 text-sm">Nyx</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(0,212,255,0.1)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} CatBit Solutions. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/40 hover:text-[#00d4ff] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-white/40 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-[#ff4757]" /> y mucho 🐱
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
