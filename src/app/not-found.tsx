"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a1a]">
      {/* Circuit background hint */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="relative w-full max-w-md h-[300px] mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[rgba(0,212,255,0.3)]">
              <Image
                src="/illustrations/404-cats.jpg"
                alt="Página no encontrada"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Error code */}
          <div className="mb-6">
            <span className="text-8xl md:text-9xl font-bold gradient-text">404</span>
          </div>

          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¡Ups! Esta página se escondió como un gato
          </h1>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
            No encontramos la página que buscabas. Probablemente nuestros gatos la usaron para jugar.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00d4ff] to-purple-500 hover:from-purple-500 hover:to-[#00d4ff] text-[#0a0a1a] font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
              >
                <Home className="mr-2 w-5 h-5" />
                Volver al Inicio
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="px-8 py-6 rounded-full border-2 border-[#ff4757] text-[#ff4757] hover:bg-[#ff4757] hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Página Anterior
            </Button>
          </div>

          {/* Fun message */}
          <div className="mt-12 inline-flex items-center gap-2 text-white/40">
            <span className="text-lg">🐱</span>
            <span className="text-sm">Los gatos siguen trabajando en ello...</span>
            <span className="text-lg">🐱</span>
          </div>
        </div>
      </div>
    </div>
  );
}
