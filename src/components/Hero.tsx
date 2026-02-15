"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo Badge */}
            <div className="flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)]">
              <span className="text-2xl">🐱</span>
              <span className="text-[#00d4ff] text-sm font-medium">Tecnología con instinto felino</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">CatBit</span>
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Solutions
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-lg">
              Soluciones tecnológicas con instinto felino
            </p>
            <p className="text-base md:text-lg text-white/50 mb-8 max-w-md">
              Diseño web • Desarrollo • Soporte IT
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#ff4757] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff4757] text-white btn-glow px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,71,87,0.5)] hover:scale-105"
                onClick={() => handleScroll("#servicios")}
              >
                Descubre Nuestros Servicios
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0a1a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                onClick={() => handleScroll("#contacto")}
              >
                Contáctanos
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-md">
              {[
                { number: "100+", label: "Proyectos" },
                { number: "50+", label: "Clientes" },
                { number: "5+", label: "Años" },
                { number: "24/7", label: "Soporte" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main illustration with glow */}
            <div className="relative">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-purple-500/20 rounded-3xl blur-3xl scale-110 animate-pulse" />
              
              {/* Floating paw prints */}
              <div className="absolute -top-4 -left-4 text-2xl animate-bounce opacity-60" style={{ animationDelay: "0s" }}>🐾</div>
              <div className="absolute -top-2 -right-6 text-xl animate-bounce opacity-40" style={{ animationDelay: "0.5s" }}>🐾</div>
              <div className="absolute -bottom-3 -left-3 text-lg animate-bounce opacity-50" style={{ animationDelay: "1s" }}>🐾</div>
              
              {/* Main image */}
              <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden border-2 border-[rgba(0,212,255,0.3)] shadow-[0_0_50px_rgba(0,212,255,0.2)] hover:shadow-[0_0_80px_rgba(0,212,255,0.4)] transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="/illustrations/catbit-team.jpg"
                  alt="CatBit Solutions - Equipo de gatos tecnológicos"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/50 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-effect px-6 py-3 rounded-full border border-[rgba(0,212,255,0.3)] flex items-center gap-2">
                <span className="text-lg">😺</span>
                <span className="text-white text-sm font-medium">Equipo Técnico Profesional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team cats - Real photos */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-white/40 text-sm mb-4">Nuestro equipo real 🐱</p>
          <div className="flex gap-4 justify-center">
            {/* Cat 1 */}
            <div className="relative group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                <Image 
                  src="/cats/gato1.jpg" 
                  alt="Gris - Especialista en UX" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Gris</span>
            </div>
            {/* Cat 2 */}
            <div className="relative group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Image 
                  src="/cats/gato2.jpg" 
                  alt="Rayo - Desarrollador Senior" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Rayo</span>
            </div>
            {/* Cat 3 */}
            <div className="relative group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#ff6b6b]/30 hover:border-[#ff6b6b] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,107,0.5)]">
                <Image 
                  src="/cats/gato3.jpg" 
                  alt="Nyx - QA Testing" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Nyx</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#00d4ff]/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
