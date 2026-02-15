import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diseños Webs Davincho Sena | Tu Aliado en el Mundo Digital",
  description: "Diseño web profesional, desarrollo, SEO, E-commerce y más. Creamos experiencias digitales excepcionales para tu negocio.",
  keywords: ["Diseño Web", "Desarrollo Web", "SEO", "E-commerce", "Marketing Digital", "Davincho Sena", "Páginas Web"],
  authors: [{ name: "Davincho Sena" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Diseños Webs Davincho Sena",
    description: "Tu aliado en el mundo digital. Diseño web profesional y desarrollo.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseños Webs Davincho Sena",
    description: "Tu aliado en el mundo digital. Diseño web profesional y desarrollo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
