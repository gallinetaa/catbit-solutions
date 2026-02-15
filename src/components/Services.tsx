"use client";

import {
  Globe,
  Code,
  Search,
  ShoppingCart,
  Smartphone,
  Palette,
  Zap,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    icon: Globe,
    title: "Diseño Web",
    description:
      "Creamos sitios web elegantes y funcionales. Diseños que atrapan como un gato a un ratón láser.",
    color: "#00d4ff",
    catEmoji: "🐱",
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description:
      "Código limpio y escalable. Desarrollo con la precisión de un gato cazando.",
    color: "#a855f7",
    catEmoji: "😺",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Posicionamos tu web en los primeros lugares. Tu marca será imposible de ignorar.",
    color: "#00d4ff",
    catEmoji: "🔎",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Tiendas online que convierten visitantes en clientes. Ventas seguras como las 7 vidas de un gato.",
    color: "#ff6b6b",
    catEmoji: "🛒",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsive",
    description:
      "Tu web perfecta en cualquier pantalla. Adaptabilidad felina garantizada.",
    color: "#a855f7",
    catEmoji: "📱",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Identidades visuales únicas y memorables. Tu marca dejará huella... o huella de gato.",
    color: "#00d4ff",
    catEmoji: "🎨",
  },
  {
    icon: Zap,
    title: "Optimización",
    description:
      "Webs ultrarrápidas. Velocidad de rayo, o mejor dicho, de gato asustado.",
    color: "#ff6b6b",
    catEmoji: "⚡",
  },
  {
    icon: Shield,
    title: "Soporte IT",
    description:
      "Mantenimiento y seguridad 24/7. Dormimos con un ojo abierto, como los gatos.",
    color: "#a855f7",
    catEmoji: "🛡️",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">🐱</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Soluciones digitales con instinto felino. Precisión, agilidad y resultados garantizados.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl h-[250px] md:h-[300px] rounded-2xl overflow-hidden border-2 border-[rgba(0,212,255,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-all duration-500 group">
            <Image
              src="/illustrations/full-team.jpg"
              alt="CatBit Solutions Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />
            
            {/* Floating label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-effect px-4 py-2 rounded-full border border-[rgba(0,212,255,0.3)]">
              <span className="text-white text-sm">Davincho Tech - El equipo completo</span>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="card-hover bg-[rgba(15,15,35,0.8)] border-[rgba(0,212,255,0.2)] backdrop-blur-sm overflow-hidden group relative"
              >
                {/* Animated background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}15 0%, transparent 50%)` }}
                />
                
                <CardContent className="p-6 relative">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}05 100%)`,
                        border: `1px solid ${service.color}40`,
                        boxShadow: `0 0 0 0 ${service.color}00`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-all duration-300"
                        style={{ color: service.color }}
                      />
                    </div>
                    <span className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>{service.catEmoji}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom border animation */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                    }}
                  />
                  
                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, ${service.color}20 0%, transparent 70%)`,
                    }}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Cat Team Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] rounded-full px-6 py-3 hover:bg-[rgba(0,212,255,0.15)] transition-colors cursor-default">
            <span className="text-lg">🐱</span>
            <span className="text-white/70 text-sm">Sin pelos en el código, garantizado</span>
            <span className="text-lg">🐱</span>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-20" />
    </section>
  );
}
