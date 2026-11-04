import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  {
    name: 'door-business.webp',
    width: 960,
    height: 540,
    bg: '#231c17',
    accent: '#D9822B',
    tag: 'B2B / WHOLESALE SPEC',
    title: 'Commercial Mozzarella & Cheddar Supply',
    sub: 'Stacked 5kg Vacuum Blocks • Mechanical Shredded Trays • Daily Twin Cities Dispatch'
  },
  {
    name: 'door-home.webp',
    width: 960,
    height: 540,
    bg: '#2b231c',
    accent: '#D9822B',
    tag: 'RETAIL / HOME COOKS',
    title: 'Counter Block Cheese & Pure Ghee',
    sub: '500g & 1kg Fresh Cut Blocks • Traditional Desi Ghee • Raja Bazar Counter'
  },
  {
    name: 'cheddar-block.webp',
    width: 800,
    height: 600,
    bg: '#261f1a',
    accent: '#D9822B',
    tag: 'SPEC-01 / CHEDDAR',
    title: 'Aged Cheddar Block',
    sub: 'Firm Granular Curd • Vacuum Sealed • 1kg / 5kg Master Block'
  },
  {
    name: 'mozzarella-block.webp',
    width: 800,
    height: 600,
    bg: '#212628',
    accent: '#DCE3E6',
    tag: 'SPEC-02 / MOZZARELLA',
    title: 'Low-Moisture Mozzarella Block',
    sub: 'Whole Milk Solid Block • Calibrated Stretch • High Oven Heat Yield'
  },
  {
    name: 'shredded-pizza-cheese.webp',
    width: 800,
    height: 600,
    bg: '#2b211b',
    accent: '#D9822B',
    tag: 'SPEC-03 / SHREDDED BLEND',
    title: 'Shredded Pizza Cheese Blend',
    sub: '4mm Machine Shred • Anti-Caking Calibrated • Fast Commercial Prep'
  },
  {
    name: 'butter-block.webp',
    width: 800,
    height: 600,
    bg: '#28231c',
    accent: '#D9822B',
    tag: 'SPEC-04 / TABLE BUTTER',
    title: 'Pure Dairy Table & Bakery Butter',
    sub: '82% Milkfat • Greaseproof Wrap • Lamination & Pastry Ready'
  },
  {
    name: 'cream-pot.webp',
    width: 800,
    height: 600,
    bg: '#232729',
    accent: '#DCE3E6',
    tag: 'SPEC-05 / COMMERCIAL CREAM',
    title: 'Heavy Dairy Cream',
    sub: 'High Viscosity • High Cooking Stability • No Heat Splitting'
  },
  {
    name: 'ghee-tin.webp',
    width: 800,
    height: 600,
    bg: '#2c2217',
    accent: '#D9822B',
    tag: 'SPEC-06 / DESI GHEE',
    title: 'Pure Granular Desi Ghee',
    sub: 'Traditional Clarified Butter • 1kg Pouch / 16kg Commercial Tin'
  },
  {
    name: 'delivery-crate.webp',
    width: 960,
    height: 540,
    bg: '#1c2226',
    accent: '#DCE3E6',
    tag: 'COLD-CHAIN / LOGISTICS',
    title: 'Insulated Refrigerated Transport',
    sub: 'Thermal Outer Crates • Sub-Zero Gel Packs • Direct Doorstep Dispatch'
  },
  {
    name: 'pizza-stretch.webp',
    width: 960,
    height: 540,
    bg: '#2a1e16',
    accent: '#D9822B',
    tag: 'OVEN-TEST / 280°C CALIBRATION',
    title: 'Melt, Stretch & Blister Performance',
    sub: 'Even Melt Coverage • High Elasticity • Zero Greasy Separation'
  },
  {
    name: 'cold-store-shelf.webp',
    width: 960,
    height: 540,
    bg: '#1b2326',
    accent: '#DCE3E6',
    tag: 'FACILITY / +2°C TO +4°C STORAGE',
    title: 'Kashmiri Bazaar Cold Storage',
    sub: 'Dedicated Chiller Facility • Automated Generator Backup • Daily FIFO Rotation'
  },
  {
    name: 'shop-facade-placeholder.webp',
    width: 960,
    height: 540,
    bg: '#23201d',
    accent: '#7A4B2A',
    tag: 'CLIENT PHOTO PLACEHOLDER',
    title: 'Mazhar Dairy — Shop 60-61 Kashmiri Bazaar',
    sub: 'Real photograph of shop façade and Kashmiri Bazaar counter to be supplied by client'
  },
  {
    name: 'og-image.webp',
    width: 1200,
    height: 630,
    bg: '#2B211B',
    accent: '#D9822B',
    tag: 'MAZHAR DAIRY / RAWALPINDI / EST. 1987',
    title: 'Wholesale & Retail Dairy Suppliers',
    sub: 'Pizzerias, Commercial Kitchens, Bakeries & Retail • FBR-Registered'
  }
];

async function generate() {
  for (const img of images) {
    const safeTitle = img.title.replace(/&/g, '&amp;');
    const safeSub = img.sub.replace(/&/g, '&amp;');
    const safeTag = img.tag.replace(/&/g, '&amp;');

    const svg = `
    <svg width="${img.width}" height="${img.height}" viewBox="0 0 ${img.width} ${img.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g_${img.name.replace(/[^a-z0-9]/gi, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${img.bg}" />
          <stop offset="100%" stop-color="#140f0c" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 227, 230, 0.05)" stroke-width="1" />
        </pattern>
      </defs>
      
      <!-- Base Background -->
      <rect width="${img.width}" height="${img.height}" fill="url(#g_${img.name.replace(/[^a-z0-9]/gi, '')})" />
      <rect width="${img.width}" height="${img.height}" fill="url(#grid)" />
      
      <!-- Cold-store spec border -->
      <rect x="20" y="20" width="${img.width - 40}" height="${img.height - 40}" fill="none" stroke="rgba(220,227,230,0.18)" stroke-width="1" />
      <rect x="28" y="28" width="${img.width - 56}" height="${img.height - 56}" fill="none" stroke="rgba(220,227,230,0.08)" stroke-width="1" />
      
      <!-- Tag strip / cold room stamp -->
      <g transform="translate(48, 56)">
        <rect x="0" y="0" width="${img.tag.length * 9.5 + 24}" height="26" fill="${img.accent}" fill-opacity="0.18" rx="2" stroke="${img.accent}" stroke-width="1" />
        <text x="12" y="17" font-family="monospace, monospace" font-size="11" font-weight="700" fill="${img.accent}" letter-spacing="1.5">${safeTag}</text>
      </g>
      
      <!-- Center Graphic representation -->
      <g transform="translate(${img.width / 2}, ${img.height / 2 - 20})">
        <circle r="70" fill="none" stroke="rgba(217, 130, 43, 0.2)" stroke-width="2" stroke-dasharray="6,4" />
        <circle r="54" fill="rgba(220, 227, 230, 0.04)" stroke="${img.accent}" stroke-width="1.5" />
        <path d="M -24 -12 L 24 -12 L 32 20 L -32 20 Z" fill="none" stroke="${img.accent}" stroke-width="2" />
        <line x1="-32" y1="20" x2="32" y2="20" stroke="${img.accent}" stroke-width="2.5" />
        <line x1="-12" y1="-12" x2="-8" y2="20" stroke="rgba(220,227,230,0.3)" stroke-width="1" />
        <line x1="12" y1="-12" x2="8" y2="20" stroke="rgba(220,227,230,0.3)" stroke-width="1" />
      </g>
      
      <!-- Text details -->
      <g transform="translate(48, ${img.height - 110})">
        <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" fill="#F6F1E7" letter-spacing="0.5">${safeTitle}</text>
        <text x="0" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#DCE3E6" fill-opacity="0.8" font-weight="400">${safeSub}</text>
      </g>
      
      <!-- Bottom right spec stamp -->
      <g transform="translate(${img.width - 240}, ${img.height - 52})">
        <text x="0" y="0" font-family="monospace, monospace" font-size="10" fill="rgba(220,227,230,0.5)" letter-spacing="1">REF: MAZHAR-RAWALPINDI-1987</text>
      </g>
    </svg>
    `;

    const outPath = path.join(outDir, img.name);
    await sharp(Buffer.from(svg))
      .webp({ quality: 85 })
      .toFile(outPath);

    console.log(`Generated: ${img.name} (${img.width}x${img.height})`);
  }
}

generate().catch(console.error);
