"use client";

import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const portfolioItems = [
  {
    title: "PetShop Online",
    category: "E-commerce",
    description: "Tienda online de productos para mascotas con pasarela de pago",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
    link: "#",
  },
  {
    title: "App Veterinaria",
    category: "Aplicación Web",
    description: "Sistema de citas y gestión para clínicas veterinarias",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    link: "#",
  },
  {
    title: "Portal Inmobiliario",
    category: "Marketplace",
    description: "Plataforma de bienes raíces con búsqueda inteligente",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Firebase", "Maps"],
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    category: "Dashboard",
    description: "Panel de control con métricas en tiempo real",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "WebSocket"],
    link: "#",
  },
  {
    title: "Blog de Tecnología",
    category: "Blog",
    description: "Blog tech con CMS personalizado y comentarios",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    tags: ["Next.js", "Sanity", "Vercel"],
    link: "#",
  },
  {
    title: "App Delivery",
    category: "Aplicación Móvil",
    description: "App de delivery con seguimiento en tiempo real",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">🐾</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Nuestro Portafolio</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Proyectos que dejamos listos, sin un solo "pelo" en el código
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="card-hover bg-[rgba(15,15,35,0.8)] border-[rgba(0,212,255,0.2)] backdrop-blur-sm overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Image container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-80" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#00d4ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#00d4ff]/20 backdrop-blur-sm border border-[#00d4ff]/40 rounded-full text-[#00d4ff] text-xs font-medium flex items-center gap-1">
                      <span className="text-xs">🐱</span>
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={item.link}
                      className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#00d4ff]/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={item.link}
                      className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#00d4ff]/30 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] rounded text-[#00d4ff]/80 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#00d4ff] text-[#00d4ff] rounded-full hover:bg-[#00d4ff] hover:text-[#0a0a1a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] flex items-center gap-2 mx-auto">
            <span>Ver Más Proyectos</span>
            <span className="text-lg">🐾</span>
          </button>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-20" />
    </section>
  );
}
