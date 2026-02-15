"use client";

import { Check, Star, Cat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfecto para emprendedores",
    price: "$299",
    period: "/proyecto",
    features: [
      "Diseño web responsive",
      "Hasta 5 páginas",
      "Formulario de contacto",
      "SEO básico",
      "Integración redes sociales",
      "Soporte por 30 días",
    ],
    isPopular: false,
    buttonText: "Comenzar",
    catEmoji: "🐱",
  },
  {
    name: "Profesional",
    description: "Ideal para empresas en crecimiento",
    price: "$599",
    period: "/proyecto",
    features: [
      "Diseño web personalizado",
      "Hasta 10 páginas",
      "Blog integrado",
      "SEO avanzado",
      "Panel de administración",
      "Analytics integrado",
      "Soporte por 90 días",
      "Capacitación incluida",
    ],
    isPopular: true,
    buttonText: "Más Popular",
    catEmoji: "😺",
  },
  {
    name: "Enterprise",
    description: "Solución completa para grandes empresas",
    price: "$1,299",
    period: "/proyecto",
    features: [
      "Diseño premium exclusivo",
      "Páginas ilimitadas",
      "E-commerce completo",
      "Integración CRM",
      "API personalizada",
      "Soporte prioritario 24/7",
      "Mantenimiento anual",
      "Hosting premium 1 año",
    ],
    isPopular: false,
    buttonText: "Contactar",
    catEmoji: "🦁",
  },
];

const additionalServices = [
  {
    name: "Mantenimiento Mensual",
    price: "$49/mes",
    description: "Actualizaciones y soporte técnico continuo",
    catEmoji: "🔧",
  },
  {
    name: "Campaña SEO",
    price: "$199/mes",
    description: "Optimización continua y contenido SEO",
    catEmoji: "🔍",
  },
  {
    name: "Branding Completo",
    price: "$399",
    description: "Logo, colores, tipografía y manual de marca",
    catEmoji: "🎨",
  },
];

export default function Store() {
  return (
    <section id="tienda" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">💰</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Nuestros Planes</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Elige el plan perfecto para tu negocio. Sin pelos en el código, garantizado.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-[rgba(15,15,35,0.8)] backdrop-blur-sm overflow-hidden card-hover ${
                plan.isPopular
                  ? "border-[#00d4ff] shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                  : "border-[rgba(0,212,255,0.2)]"
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[#00d4ff] to-purple-500 text-[#0a0a1a] text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    POPULAR
                  </div>
                </div>
              )}

              <CardContent className="p-6">
                {/* Plan name with cat */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{plan.catEmoji}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-white/60 text-sm">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[rgba(0,212,255,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#00d4ff]" />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <Button
                  className={`w-full py-6 rounded-full btn-glow transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-[#00d4ff] to-purple-500 hover:from-purple-500 hover:to-[#00d4ff] text-[#0a0a1a] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                      : "bg-transparent border-2 border-[#ff4757] text-[#ff4757] hover:bg-[#ff4757] hover:text-white hover:shadow-[0_0_30px_rgba(255,71,87,0.5)]"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="gradient-text">Servicios Adicionales</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-5 card-hover group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{service.catEmoji}</span>
                  <h4 className="text-lg font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
                    {service.name}
                  </h4>
                </div>
                <p className="text-white/60 text-sm mb-3">
                  {service.description}
                </p>
                <p className="text-2xl font-bold gradient-text">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-white/80 flex items-center gap-2">
              Garantía de satisfacción 100% 
              <span className="text-lg">🐱</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
