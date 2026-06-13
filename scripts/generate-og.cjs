const sharp = require("sharp");
const path = require("path");

const W = 1200, H = 630;

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d3322"/>
      <stop offset="100%" stop-color="#1E5C40"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8FD6A8" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#8FD6A8" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Glow orb top-right -->
  <ellipse cx="1080" cy="80" rx="320" ry="220" fill="url(#glow)"/>

  <!-- Decorative rings right side -->
  <circle cx="1050" cy="330" r="240" fill="none" stroke="#8FD6A8" stroke-width="1" opacity="0.12"/>
  <circle cx="1050" cy="330" r="170" fill="none" stroke="#8FD6A8" stroke-width="1" opacity="0.09"/>
  <circle cx="1050" cy="330" r="100" fill="none" stroke="#8FD6A8" stroke-width="1.5" opacity="0.14"/>
  <circle cx="1050" cy="330" r="38"  fill="#8FD6A8" opacity="0.07"/>

  <!-- Dot grid (subtle) -->
  ${Array.from({ length: 6 }, (_, row) =>
    Array.from({ length: 8 }, (_, col) =>
      `<circle cx="${820 + col * 44}" cy="${160 + row * 44}" r="1.8" fill="#8FD6A8" opacity="0.13"/>`
    ).join("")
  ).join("")}

  <!-- Left accent bar -->
  <rect x="80" y="210" width="4" height="160" fill="#8FD6A8" rx="2"/>

  <!-- Badge pill -->
  <rect x="100" y="150" width="130" height="30" rx="15" fill="#8FD6A8" opacity="0.15"/>
  <text x="165" y="170" font-family="Helvetica Neue, Arial, sans-serif" font-size="13"
        fill="#8FD6A8" text-anchor="middle" letter-spacing="3" font-weight="600">PORTFOLIO</text>

  <!-- Name -->
  <text x="100" y="278"
        font-family="Georgia, Times New Roman, serif"
        font-size="66" font-weight="bold" fill="white" letter-spacing="-1">Jose Ignacio</text>
  <text x="100" y="353"
        font-family="Georgia, Times New Roman, serif"
        font-size="66" font-weight="bold" fill="white" letter-spacing="-1">Esteban González</text>

  <!-- Role -->
  <text x="100" y="415"
        font-family="Helvetica Neue, Arial, sans-serif"
        font-size="26" fill="#8FD6A8" opacity="0.9">AI Engineer · Desarrollador de Software</text>

  <!-- Divider -->
  <rect x="100" y="500" width="440" height="1" fill="#8FD6A8" opacity="0.2"/>

  <!-- URL -->
  <text x="100" y="528"
        font-family="Courier New, monospace"
        font-size="18" fill="white" opacity="0.38" letter-spacing="0.5">nachoatm.github.io/portfolio</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, "../public/og-image.png"))
  .then(() => console.log("✓ public/og-image.png generada (1200×630)"))
  .catch((err) => { console.error(err); process.exit(1); });
