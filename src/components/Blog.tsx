"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const blogPosts = [
  {
    title: "Tendencias de Diseño Web 2024",
    excerpt:
      "Las últimas tendencias que están moldeando el futuro del diseño web y cómo aplicarlas en tus proyectos.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    date: "15 Ene 2024",
    readTime: "5 min",
    category: "Diseño",
  },
  {
    title: "SEO: Guía Completa para Principiantes",
    excerpt:
      "Todo lo que necesitas saber para optimizar tu sitio web y mejorar tu posicionamiento en buscadores.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    date: "10 Ene 2024",
    readTime: "8 min",
    category: "SEO",
  },
  {
    title: "Next.js vs React: ¿Cuál Elegir?",
    excerpt:
      "Análisis comparativo para ayudarte a elegir la mejor tecnología para tu próximo proyecto.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    date: "5 Ene 2024",
    readTime: "6 min",
    category: "Desarrollo",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Artículos y recursos sobre diseño web, desarrollo y marketing digital
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="card-hover bg-[rgba(15,15,35,0.8)] border-[rgba(0,212,255,0.2)] backdrop-blur-sm overflow-hidden group cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-80" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#ff4757]/80 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-1">
                      <span className="text-xs">🐱</span>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-white/50 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read more link */}
                  <div className="flex items-center text-[#00d4ff] text-sm font-medium group/link">
                    Leer Más
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all posts button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#00d4ff] text-[#00d4ff] rounded-full hover:bg-[#00d4ff] hover:text-[#0a0a1a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] flex items-center gap-2 mx-auto">
            <span>Ver Todos los Artículos</span>
            <span className="text-lg">🐾</span>
          </button>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-20" />
    </section>
  );
}
