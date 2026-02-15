"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Gris",
    role: "Especialista UX/UI",
    description: "Diseña interfaces elegantes y experiencia de usuario impecable. Tranquilo pero perfectionista.",
    image: "/cats/gato1.jpg",
    illustration: "/illustrations/chill-cat.jpg",
    color: "#00d4ff",
    emoji: "🐱",
    skills: ["Figma", "Prototipado", "User Research"],
  },
  {
    name: "Rayo",
    role: "Desarrollador Full Stack",
    description: "Código limpio y arquitectura escalable. Veloz como su nombre lo indica.",
    image: "/cats/gato2.jpg",
    illustration: null,
    color: "#a855f7",
    emoji: "⚡",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Nyx",
    role: "QA & Testing",
    description: "Detecta bugs antes de que existan. Ojos verdes que no escapan nada.",
    image: "/cats/gato3.jpg",
    illustration: null,
    color: "#ff6b6b",
    emoji: "🌙",
    skills: ["Testing", "Debugging", "Automation"],
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">🐾</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Nuestro Equipo</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Profesionales con garra, literalmente. Conocé a los que hacen posible cada proyecto.
          </p>
        </div>

        {/* Main illustration */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 via-purple-500/20 to-[#ff6b6b]/20 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] rounded-3xl overflow-hidden border-2 border-[rgba(0,212,255,0.2)] hover:border-[rgba(0,212,255,0.4)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,212,255,0.3)]">
              <Image
                src="/illustrations/tech-workspace.jpg"
                alt="CatBit Solutions - Workspace"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group bg-[rgba(15,15,35,0.8)] border-[rgba(0,212,255,0.2)] backdrop-blur-sm overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]"
            >
              <CardContent className="p-0">
                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
                  
                  {/* Emoji badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex items-center justify-center text-xl border border-white/10">
                    {member.emoji}
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${member.color} 0%, transparent 70%)` }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-[#00d4ff] text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm mb-4">{member.description}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] text-[#00d4ff]/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fun fact */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-8 py-4 border border-[rgba(0,212,255,0.2)]">
            <span className="text-2xl">😺</span>
            <div className="text-left">
              <p className="text-white font-medium">¿Sabías que...?</p>
              <p className="text-white/50 text-sm">Nuestro equipo trabaja mejor con treats y siestas regulares</p>
            </div>
            <span className="text-2xl">🐱</span>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-20" />
    </section>
  );
}
