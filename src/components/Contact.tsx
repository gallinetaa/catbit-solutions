"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@catbitsolutions.com",
    href: "mailto:contacto@catbitsolutions.com",
    catEmoji: "📧",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+1 (809) 555-0123",
    href: "tel:+18095550123",
    catEmoji: "📱",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Santo Domingo, República Dominicana",
    href: "#",
    catEmoji: "📍",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría escucharte. Respondemos más rápido que un gato persiguiendo un puntero láser.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
              Envíanos un Mensaje
              <span className="text-2xl">🐱</span>
            </h3>
            <p className="text-white/50 text-sm mb-6">Te responderemos en menos de 24 horas</p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">😺</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-white/60">
                  Gracias por contactarnos. Te responderemos pronto. ¡Miau!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Nombre
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="bg-[rgba(255,255,255,0.05)] border-[rgba(0,212,255,0.2)] text-white placeholder:text-white/40 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="bg-[rgba(255,255,255,0.05)] border-[rgba(0,212,255,0.2)] text-white placeholder:text-white/40 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    Asunto
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    className="bg-[rgba(255,255,255,0.05)] border-[rgba(0,212,255,0.2)] text-white placeholder:text-white/40 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                    className="bg-[rgba(255,255,255,0.05)] border-[rgba(0,212,255,0.2)] text-white placeholder:text-white/40 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#ff4757] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff4757] text-white btn-glow py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,71,87,0.5)] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Mensaje
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-5 glass-effect rounded-xl card-hover group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-[#00d4ff]/30 group-hover:border-[#00d4ff] transition-colors">
                      <Icon className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm flex items-center gap-1">
                        {info.catEmoji} {info.label}
                      </p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social links */}
            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                Síguenos en Redes
                <span className="text-lg">🐾</span>
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] rounded-lg flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0a1a] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Cat team message */}
            <div className="glass-effect rounded-xl p-6 border border-[rgba(168,85,247,0.2)]">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🐱</div>
                <div>
                  <h4 className="text-white font-semibold">El equipo técnico te espera</h4>
                  <p className="text-white/60 text-sm">Gris, Rayo y Nyx están listos para ayudarte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-20" />
    </section>
  );
}
