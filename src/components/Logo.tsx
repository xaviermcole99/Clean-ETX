import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    xxl: 'w-36 h-36 md:w-48 md:h-48',
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={`${dimensions[size] || size} ${className} shrink-0 select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Clean ETX Logo"
    >
      <defs>
        {/* Halftone Shading Patterns for Retro Comic Effect */}
        <pattern id="halftone-bg" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="2" cy="2" r="1.2" fill="#0f172a" opacity="0.12" />
        </pattern>
        <pattern id="halftone-glove" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
          <circle cx="1.5" cy="1.5" r="1" fill="#0f172a" opacity="0.2" />
        </pattern>
        
        {/* Drop shadow for 3D text and elements */}
        <filter id="pop-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="3.5" dy="3.5" stdDeviation="0" floodColor="#0f172a" floodOpacity="1" />
        </filter>
        <filter id="pop-shadow-sm" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="2" stdDeviation="0" floodColor="#0f172a" floodOpacity="1" />
        </filter>
      </defs>

      {/* Outer Offset Black Neo-Brutalist Shadow */}
      <circle cx="104" cy="104" r="92" fill="#0f172a" />

      {/* Main Teal/Mint Circular Badge Base */}
      <circle cx="100" cy="100" r="92" fill="#14b8a6" stroke="#0f172a" strokeWidth="5.5" />

      {/* Background Comic Shading */}
      <circle cx="100" cy="100" r="92" fill="url(#halftone-bg)" />

      {/* Retro Rainbow Arcs (Red/Orange stripes at the top) */}
      <path
        d="M 21 78 A 80 80 0 0 1 179 78"
        fill="none"
        stroke="#ea580c"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M 21 78 A 80 80 0 0 1 179 78"
        fill="none"
        stroke="#ef4444"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Pink Cleaning Cloth (Draped on the left) */}
      <g>
        {/* Black under-stroke/outline */}
        <path
          d="M 12 92 C 15 70, 52 75, 75 92 C 60 115, 30 135, 15 110 Z"
          fill="#0f172a"
        />
        {/* Main cloth body */}
        <path
          d="M 14 94 C 17 74, 50 78, 72 94 C 58 112, 32 131, 17 108 Z"
          fill="#ec4899"
          stroke="#0f172a"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Creases */}
        <path d="M 25 100 Q 38 92 52 102" stroke="#0f172a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 30 112 Q 44 104 58 114" stroke="#0f172a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* Horizontal Broom Handle & Brush */}
      <g>
        {/* Wooden handle under-stroke */}
        <line x1="16" y1="108" x2="184" y2="108" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />
        {/* Wooden handle main */}
        <line x1="16" y1="108" x2="184" y2="108" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
        
        {/* Broom fibers on the left */}
        <path
          d="M 16 108 L 48 85 L 44 135 Z"
          fill="#facc15"
          stroke="#0f172a"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
        <path d="M 22 108 L 44 100" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 22 108 L 42 118" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Yellow Cleaning Gloves (Double hands in center) */}
      <g>
        {/* Glove 1: Back/Left Hand */}
        <path
          d="M 66 142 Q 62 105 76 80 C 78 74, 86 74, 88 82 C 90 73, 98 73, 98 83 C 100 74, 108 74, 108 84 C 110 76, 117 78, 117 89 C 117 115, 102 135, 112 148"
          fill="#facc15"
          stroke="#0f172a"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M 66 142 Q 62 105 76 80 C 78 74, 86 74, 88 82 C 90 73, 98 73, 98 83 C 100 74, 108 74, 108 84 C 110 76, 117 78, 117 89 C 117 115, 102 135, 112 148"
          fill="url(#halftone-glove)"
        />

        {/* Glove 2: Front/Right Hand (Active pointing) */}
        <path
          d="M 88 132 C 84 102, 85 64, 98 44 C 102 38, 112 38, 114 48 C 116 38, 126 38, 126 48 C 128 38, 137 38, 137 51 C 139 42, 148 45, 146 58 C 146 88, 126 122, 142 132"
          fill="#facc15"
          stroke="#0f172a"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M 88 132 C 84 102, 85 64, 98 44 C 102 38, 112 38, 114 48 C 116 38, 126 38, 126 48 C 128 38, 137 38, 137 51 C 139 42, 148 45, 146 58 C 146 88, 126 122, 142 132"
          fill="url(#halftone-glove)"
        />

        {/* Dynamic crease lines & shading on front glove */}
        <path d="M 104 46 C 103 62, 103 82, 108 92" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 115 46 C 114 62, 114 82, 118 92" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 126 48 C 125 64, 125 84, 128 92" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 98 112 Q 115 110 132 116" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Green Spray Bottle / Cleaner (Bottom Right) */}
      <g>
        {/* Rotated spray bottle */}
        <g transform="rotate(28 125 152)">
          {/* Shadow outline */}
          <rect x="106" y="132" width="28" height="42" rx="7" fill="#0f172a" />
          {/* Main bottle */}
          <rect x="108" y="134" width="24" height="38" rx="6" fill="#10b981" stroke="#0f172a" strokeWidth="4" />
          
          {/* Bottle neck & nozzle trigger */}
          <path d="M 114 134 L 114 122 L 126 122 L 126 134 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
          <path d="M 110 122 L 130 114 L 132 124 L 122 124 Z" fill="#0891b2" stroke="#0f172a" strokeWidth="4" />
          <path d="M 124 124 L 128 136" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>

      {/* Sparkling Stars & Glitters (Pop Art Sparkles) */}
      {/* Sparkle 1: Gold Star Left Top */}
      <path
        d="M 38 42 Q 38 52 48 52 Q 38 52 38 62 Q 38 52 28 52 Q 38 52 38 42 Z"
        fill="#f59e0b"
        stroke="#0f172a"
        strokeWidth="2.5"
        filter="url(#pop-shadow-sm)"
      />
      {/* Sparkle 2: Gold Star Right Mid */}
      <path
        d="M 172 58 Q 172 66 180 66 Q 172 66 172 74 Q 172 66 164 66 Q 172 66 172 58 Z"
        fill="#f59e0b"
        stroke="#0f172a"
        strokeWidth="2"
        filter="url(#pop-shadow-sm)"
      />
      {/* Sparkle 3: Tiny White Star Center Top */}
      <path
        d="M 100 24 Q 100 29 105 29 Q 100 29 100 34 Q 100 29 95 29 Q 100 29 100 24 Z"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="1.5"
      />
      {/* Sparkle 4: Gold Star Bottom Center */}
      <path
        d="M 114 120 Q 114 126 120 126 Q 114 126 114 132 Q 114 126 108 126 Q 114 126 114 120 Z"
        fill="#f59e0b"
        stroke="#0f172a"
        strokeWidth="1.5"
        filter="url(#pop-shadow-sm)"
      />

      {/* Chunky Slanted 'Clean ETX' Text with 3D Offset Shadow Block */}
      <g transform="rotate(-6 100 110)">
        {/* Layered 3D Shadow for perfect neobrutalist thickness */}
        <text
          x="100"
          y="115"
          textAnchor="middle"
          fontFamily="'Space Grotesk', 'Impact', 'Arial Black', sans-serif"
          fontSize="26"
          fontWeight="900"
          fontStyle="italic"
          fill="#0f172a"
          letterSpacing="0.5"
        >
          Clean ETX
        </text>
        <text
          x="102"
          y="117"
          textAnchor="middle"
          fontFamily="'Space Grotesk', 'Impact', 'Arial Black', sans-serif"
          fontSize="26"
          fontWeight="900"
          fontStyle="italic"
          fill="#0f172a"
          letterSpacing="0.5"
        >
          Clean ETX
        </text>
        <text
          x="104"
          y="119"
          textAnchor="middle"
          fontFamily="'Space Grotesk', 'Impact', 'Arial Black', sans-serif"
          fontSize="26"
          fontWeight="900"
          fontStyle="italic"
          fill="#0f172a"
          letterSpacing="0.5"
        >
          Clean ETX
        </text>
        
        {/* Foreground Text with High-Contrast Teal Stroke */}
        <text
          x="100"
          y="115"
          textAnchor="middle"
          fontFamily="'Space Grotesk', 'Impact', 'Arial Black', sans-serif"
          fontSize="26"
          fontWeight="900"
          fontStyle="italic"
          fill="#a7f3d0" /* light pastel teal mint */
          stroke="#0f172a"
          strokeWidth="5"
          strokeLinejoin="round"
          letterSpacing="0.5"
        >
          Clean ETX
        </text>
      </g>

      {/* Bubble Highlight shine on top-left of the badge */}
      <circle cx="45" cy="45" r="5" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}
