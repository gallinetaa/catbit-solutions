"use client";

import { useEffect, useRef } from "react";

export default function CircuitBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Add random sparkle positions
    const sparkles = document.querySelectorAll(".sparkle");
    sparkles.forEach((sparkle) => {
      const randomDelay = Math.random() * 5;
      const randomDuration = 2 + Math.random() * 3;
      (sparkle as HTMLElement).style.animationDelay = `${randomDelay}s`;
      (sparkle as HTMLElement).style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f1a2e] to-[#0a0a1a]" />
      
      {/* Animated circuit SVG */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Stronger glow filter */}
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for lines */}
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="circuit-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main circuit lines - Horizontal */}
        <g className="circuit-glow" filter="url(#glow)">
          {/* Row 1 */}
          <path
            className="circuit-line"
            d="M 0 100 H 400 L 450 150 H 700 L 750 100 H 1000 L 1050 150 H 1300 L 1350 100 H 1920"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "0s" }}
          />
          
          {/* Row 2 */}
          <path
            className="circuit-line"
            d="M 0 250 H 200 L 250 300 H 500 L 550 250 H 800 L 850 300 H 1100 L 1150 250 H 1400 L 1450 300 H 1700 L 1750 250 H 1920"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "1s" }}
          />

          {/* Row 3 */}
          <path
            className="circuit-line"
            d="M 0 400 H 300 L 350 350 H 600 L 650 400 H 900 L 950 350 H 1200 L 1250 400 H 1500 L 1550 350 H 1800 L 1850 400 H 1920"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "2s" }}
          />

          {/* Row 4 */}
          <path
            className="circuit-line"
            d="M 0 550 H 150 L 200 500 H 450 L 500 550 H 750 L 800 500 H 1050 L 1100 550 H 1350 L 1400 500 H 1650 L 1700 550 H 1920"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Row 5 */}
          <path
            className="circuit-line"
            d="M 0 700 H 250 L 300 650 H 550 L 600 700 H 850 L 900 650 H 1150 L 1200 700 H 1450 L 1500 650 H 1750 L 1800 700 H 1920"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Row 6 */}
          <path
            className="circuit-line"
            d="M 0 850 H 350 L 400 800 H 650 L 700 850 H 950 L 1000 800 H 1250 L 1300 850 H 1550 L 1600 800 H 1850 L 1920 850"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "2.5s" }}
          />

          {/* Row 7 */}
          <path
            className="circuit-line"
            d="M 0 1000 H 200 L 250 950 H 500 L 550 1000 H 800 L 850 950 H 1100 L 1150 1000 H 1400 L 1450 950 H 1700 L 1750 1000 H 1920"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "3s" }}
          />
        </g>

        {/* Vertical connections */}
        <g className="circuit-glow" filter="url(#glow)">
          <path
            className="circuit-line"
            d="M 400 100 V 250 L 450 300 V 400"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "0.3s" }}
          />
          <path
            className="circuit-line"
            d="M 700 150 V 300 L 750 350 V 500"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "0.8s" }}
          />
          <path
            className="circuit-line"
            d="M 1000 100 V 250 L 1050 300 V 400"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "1.3s" }}
          />
          <path
            className="circuit-line"
            d="M 1300 150 V 350 L 1350 400 V 550"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "1.8s" }}
          />
          <path
            className="circuit-line"
            d="M 1600 300 V 500 L 1650 550 V 700"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "2.3s" }}
          />
          <path
            className="circuit-line"
            d="M 200 550 V 700 L 250 750 V 850"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "2.8s" }}
          />
          <path
            className="circuit-line"
            d="M 500 700 V 850 L 550 900 V 1000"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "3.3s" }}
          />
          <path
            className="circuit-line"
            d="M 800 650 V 800 L 850 850 V 950"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "3.8s" }}
          />
          <path
            className="circuit-line"
            d="M 1100 550 V 700 L 1150 750 V 900"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "4.3s" }}
          />
          <path
            className="circuit-line"
            d="M 1400 500 V 650 L 1450 700 V 850"
            stroke="#0088ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "4.8s" }}
          />
          <path
            className="circuit-line"
            d="M 1700 550 V 700 L 1750 750 V 900"
            stroke="#00d4ff"
            strokeWidth="1.5"
            fill="none"
            style={{ animationDelay: "5.3s" }}
          />
        </g>

        {/* Circuit nodes (connection points) */}
        <g filter="url(#glow-strong)">
          {/* Nodes on horizontal lines */}
          <circle className="circuit-node" cx="400" cy="100" r="3" fill="#00d4ff" style={{ animationDelay: "0s" }} />
          <circle className="circuit-node" cx="700" cy="150" r="3" fill="#0088ff" style={{ animationDelay: "0.2s" }} />
          <circle className="circuit-node" cx="1000" cy="100" r="3" fill="#00d4ff" style={{ animationDelay: "0.4s" }} />
          <circle className="circuit-node" cx="1300" cy="150" r="3" fill="#0088ff" style={{ animationDelay: "0.6s" }} />
          <circle className="circuit-node" cx="1600" cy="100" r="3" fill="#00d4ff" style={{ animationDelay: "0.8s" }} />
          
          <circle className="circuit-node" cx="200" cy="250" r="3" fill="#00d4ff" style={{ animationDelay: "1s" }} />
          <circle className="circuit-node" cx="500" cy="300" r="3" fill="#0088ff" style={{ animationDelay: "1.2s" }} />
          <circle className="circuit-node" cx="800" cy="250" r="3" fill="#00d4ff" style={{ animationDelay: "1.4s" }} />
          <circle className="circuit-node" cx="1100" cy="300" r="3" fill="#0088ff" style={{ animationDelay: "1.6s" }} />
          <circle className="circuit-node" cx="1400" cy="250" r="3" fill="#00d4ff" style={{ animationDelay: "1.8s" }} />
          <circle className="circuit-node" cx="1700" cy="300" r="3" fill="#0088ff" style={{ animationDelay: "2s" }} />
          
          <circle className="circuit-node" cx="300" cy="400" r="3" fill="#00d4ff" style={{ animationDelay: "2.2s" }} />
          <circle className="circuit-node" cx="600" cy="350" r="3" fill="#0088ff" style={{ animationDelay: "2.4s" }} />
          <circle className="circuit-node" cx="900" cy="400" r="3" fill="#00d4ff" style={{ animationDelay: "2.6s" }} />
          <circle className="circuit-node" cx="1200" cy="350" r="3" fill="#0088ff" style={{ animationDelay: "2.8s" }} />
          <circle className="circuit-node" cx="1500" cy="400" r="3" fill="#00d4ff" style={{ animationDelay: "3s" }} />
          <circle className="circuit-node" cx="1800" cy="350" r="3" fill="#0088ff" style={{ animationDelay: "3.2s" }} />
          
          <circle className="circuit-node" cx="150" cy="550" r="3" fill="#00d4ff" style={{ animationDelay: "3.4s" }} />
          <circle className="circuit-node" cx="450" cy="500" r="3" fill="#0088ff" style={{ animationDelay: "3.6s" }} />
          <circle className="circuit-node" cx="750" cy="550" r="3" fill="#00d4ff" style={{ animationDelay: "3.8s" }} />
          <circle className="circuit-node" cx="1050" cy="500" r="3" fill="#0088ff" style={{ animationDelay: "4s" }} />
          <circle className="circuit-node" cx="1350" cy="550" r="3" fill="#00d4ff" style={{ animationDelay: "4.2s" }} />
          <circle className="circuit-node" cx="1650" cy="500" r="3" fill="#0088ff" style={{ animationDelay: "4.4s" }} />
          
          <circle className="circuit-node" cx="250" cy="700" r="3" fill="#00d4ff" style={{ animationDelay: "4.6s" }} />
          <circle className="circuit-node" cx="550" cy="650" r="3" fill="#0088ff" style={{ animationDelay: "4.8s" }} />
          <circle className="circuit-node" cx="850" cy="700" r="3" fill="#00d4ff" style={{ animationDelay: "5s" }} />
          <circle className="circuit-node" cx="1150" cy="650" r="3" fill="#0088ff" style={{ animationDelay: "5.2s" }} />
          <circle className="circuit-node" cx="1450" cy="700" r="3" fill="#00d4ff" style={{ animationDelay: "5.4s" }} />
          <circle className="circuit-node" cx="1750" cy="650" r="3" fill="#0088ff" style={{ animationDelay: "5.6s" }} />
          
          <circle className="circuit-node" cx="350" cy="850" r="3" fill="#00d4ff" style={{ animationDelay: "5.8s" }} />
          <circle className="circuit-node" cx="650" cy="800" r="3" fill="#0088ff" style={{ animationDelay: "6s" }} />
          <circle className="circuit-node" cx="950" cy="850" r="3" fill="#00d4ff" style={{ animationDelay: "6.2s" }} />
          <circle className="circuit-node" cx="1250" cy="800" r="3" fill="#0088ff" style={{ animationDelay: "6.4s" }} />
          <circle className="circuit-node" cx="1550" cy="850" r="3" fill="#00d4ff" style={{ animationDelay: "6.6s" }} />
          
          <circle className="circuit-node" cx="200" cy="1000" r="3" fill="#00d4ff" style={{ animationDelay: "6.8s" }} />
          <circle className="circuit-node" cx="500" cy="950" r="3" fill="#0088ff" style={{ animationDelay: "7s" }} />
          <circle className="circuit-node" cx="800" cy="1000" r="3" fill="#00d4ff" style={{ animationDelay: "7.2s" }} />
          <circle className="circuit-node" cx="1100" cy="950" r="3" fill="#0088ff" style={{ animationDelay: "7.4s" }} />
          <circle className="circuit-node" cx="1400" cy="1000" r="3" fill="#00d4ff" style={{ animationDelay: "7.6s" }} />
          <circle className="circuit-node" cx="1700" cy="950" r="3" fill="#0088ff" style={{ animationDelay: "7.8s" }} />
        </g>

        {/* Larger junction nodes */}
        <g filter="url(#glow-strong)">
          <rect className="circuit-node" x="445" y="145" width="10" height="10" fill="#00d4ff" style={{ animationDelay: "0.5s" }} />
          <rect className="circuit-node" x="745" y="95" width="10" height="10" fill="#0088ff" style={{ animationDelay: "1s" }} />
          <rect className="circuit-node" x="1045" y="145" width="10" height="10" fill="#00d4ff" style={{ animationDelay: "1.5s" }} />
          <rect className="circuit-node" x="1345" y="95" width="10" height="10" fill="#0088ff" style={{ animationDelay: "2s" }} />
          
          <rect className="circuit-node" x="245" y="295" width="10" height="10" fill="#00d4ff" style={{ animationDelay: "2.5s" }} />
          <rect className="circuit-node" x="545" y="245" width="10" height="10" fill="#0088ff" style={{ animationDelay: "3s" }} />
          <rect className="circuit-node" x="845" y="295" width="10" height="10" fill="#00d4ff" style={{ animationDelay: "3.5s" }} />
          <rect className="circuit-node" x="1145" y="245" width="10" height="10" fill="#0088ff" style={{ animationDelay: "4s" }} />
          
          <rect className="circuit-node" x="345" y="345" width="10" height="10" fill="#00d4ff" style={{ animationDelay: "4.5s" }} />
          <rect className="circuit-node" x="645" y="395" width="10" height="10" fill="#0088ff" style={{ animationDelay: "5s" }} />
          <rect className="circuit-node" x="945" y="345" width="10" height="10" fill="#00d4ff" style={{ animationDelay: "5.5s" }} />
          <rect className="circuit-node" x="1245" y="395" width="10" height="10" fill="#0088ff" style={{ animationDelay: "6s" }} />
        </g>
      </svg>

      {/* Floating sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="sparkle sparkle-effect absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Electric trails overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-full h-full"
          style={{
            background: `radial-gradient(ellipse at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                         radial-gradient(ellipse at 80% 70%, rgba(0, 136, 255, 0.1) 0%, transparent 50%),
                         radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
