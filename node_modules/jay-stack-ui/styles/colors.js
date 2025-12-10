import fs from 'fs';
import path from 'path';

const folder = path.join(process.cwd(), 'styles');
if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
const outputFile = path.join(folder, 'colors.css');

// ---------------- COLORS ----------------
const colors = {
  blue: '5, 131, 250',
  red: '237, 63, 47',
  purple: '80,0,240',
  green: '75, 199, 67',
  yellow: '255, 204, 0',
  orange: '253,110,7',
  black: '0,0,0',
  white: '255,255,255',
  gray: '128,128,128',
  grey: '128,128,128',
  lightgrey: '211,211,211',
  violet: '148,0,211',
  pink: '255,105,180',
  cyan: '0,255,255',
  teal: '0,128,128',
  lime: '50,205,50',
  brown: '165,42,42',
  navy: '0,0,128',
  magenta: '255,0,255',
  indigo: '75,0,130',
  gold: '255,215,0',
  silver: '192,192,192'
};

// ---------------- OPACITIES ----------------
const opacities = { xs: 0.05, sm: 0.2, md: 0.5, lg: 0.8, xl: 1 };

// ---------------- SHADOW SIZES ----------------
const shadowSizes = {
  sm: '0 2px 4px',
  md: '0 4px 6px',
  lg: '0 10px 15px',
  xl: '0 20px 25px'
};

let css = '/* Auto-generated utilities */\n\n';

// ---------------- BASE COLORS (BG, Text, Border, Shadow) ----------------
for (const [name, rgb] of Object.entries(colors)) {
  const base = `rgba(${rgb},1)`;

  // Background, text, border
  css += `.${name} { background-color: ${base}; color:white; }\n`;
  css += `.t${name} { color: ${base}; }\n`;
  css += `.b${name} { border-color: ${base}; }\n`;

  // Default shadow
  css += `.s${name} { box-shadow: 0 0 20px ${base}; }\n`;

  // Hover
  css += `.h${name}:hover { background-color: ${base}; }\n`;
  css += `.ht${name}:hover { color: ${base}; }\n`;
  css += `.hb${name}:hover { border-color: ${base}; }\n`;
  css += `.hs${name}:hover { box-shadow: 0 0 20px ${base}; }\n`;

  // Active
  css += `.a${name}:active { background-color: ${base}; }\n`;
  css += `.at${name}:active { color: ${base}; }\n`;
  css += `.ab${name}:active { border-color: ${base}; }\n`;
  css += `.as${name}:active { box-shadow: 0 0 20px ${base}; }\n`;

  // Opacity variants
  for (const [opacityName, alpha] of Object.entries(opacities)) {
    const rgba = `rgba(${rgb},${alpha})`;

    // Background
    css += `.${name}-${opacityName} { background-color: ${rgba}; }\n`;
    css += `.h${name}-${opacityName}:hover { background-color: ${rgba}; }\n`;
    css += `.a${name}-${opacityName}:active { background-color: ${rgba}; }\n`;

    // Text
    css += `.t${name}-${opacityName} { color: ${rgba}; }\n`;
    css += `.ht${name}-${opacityName}:hover { color: ${rgba}; }\n`;
    css += `.at${name}-${opacityName}:active { color: ${rgba}; }\n`;

    // Border
    css += `.b${name}-${opacityName} { border-color: ${rgba}; }\n`;
    css += `.hb${name}-${opacityName}:hover { border-color: ${rgba}; }\n`;
    css += `.ab${name}-${opacityName}:active { border-color: ${rgba}; }\n`;

    // Shadow
    css += `.s${name}-${opacityName} { box-shadow: 0 0 20px ${rgba}; }\n`;
    css += `.hs${name}-${opacityName}:hover { box-shadow: 0 0 20px ${rgba}; }\n`;
    css += `.as${name}-${opacityName}:active { box-shadow: 0 0 20px ${rgba}; }\n`;

    // Cursor
    css += `.c${name}-${opacityName} { caret-color: ${rgba}; }\n`;
    css += `.ac${name}-${opacityName}:active { caret-color: ${rgba}; }\n`;
  }
}

// ---------------- SHADOW SIZE + COLOR + OPACITY ----------------
for (const [sizeName, sizeValue] of Object.entries(shadowSizes)) {
  // Default shadow size
  css += `.s-${sizeName} { box-shadow: ${sizeValue} rgba(0,0,0,0.2); }\n`;
  css += `.hs-${sizeName}:hover { box-shadow: ${sizeValue} rgba(0,0,0,0.2); }\n`;
  css += `.as-${sizeName}:active { box-shadow: ${sizeValue} rgba(0,0,0,0.2); }\n`;

  // Colored shadows with opacity, ORDER: size-color-opacity
  for (const [colorName, rgb] of Object.entries(colors)) {
    for (const [opacityName, alpha] of Object.entries(opacities)) {
      const rgba = `rgba(${rgb},${alpha})`;

      css += `.s-${sizeName}-${colorName}-${opacityName} { box-shadow: ${sizeValue} ${rgba}; }\n`;
      css += `.hs-${sizeName}-${colorName}-${opacityName}:hover { box-shadow: ${sizeValue} ${rgba}; }\n`;
      css += `.as-${sizeName}-${colorName}-${opacityName}:active { box-shadow: ${sizeValue} ${rgba}; }\n`;
    }
  }
}

fs.writeFileSync(outputFile, css);
console.log('✅ colors.css generated/updated at', outputFile);