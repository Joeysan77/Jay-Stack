import fs from 'fs';
import path from 'path';

const folder = path.join(process.cwd(), 'styles');
if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
const outputFile = path.join(folder, 'colors.css');

const colors = {
  blue: '5, 131, 250',
  red: '237, 63, 47',
  purple: '80,0,240',
  green: '75, 199, 67',
  yellow: '255, 204, 0',
  orange: '253,110,7',
  gray: '150,150,150',
  grey:'50,50,50',
  pink:'255,20,147'
};

// ✅ Added xs: 0.05
const opacities = { xs: 0.05, sm: 0.2, md: 0.5, lg: 0.8, xl: 1 };

let css = '';

for (const [name, rgb] of Object.entries(colors)) {
  const base = `rgba(${rgb},1)`;

  // ✅ Base BG, Text, Border
  css += `.${name} { background-color: ${base}; color:white; }\n`;
  css += `.t${name} { color: ${base}; }\n`;
  css += `.b${name} { border-color: ${base}; }\n`;
  css += `.s${name} { box-shadow: 0 0 20px ${base}; }\n`;

  // ✅ Hover versions for base
  css += `.h${name}:hover { background-color: ${base}; }\n`;
  css += `.ht${name}:hover { color: ${base}; }\n`;
  css += `.hb${name}:hover { border-color: ${base}; }\n`;
  css += `.hs${name}:hover { box-shadow: 0 0 20px ${base}; }\n`;

  // ✅ Opacity variants including xs
  for (const [key, alpha] of Object.entries(opacities)) {
    const rgba = `rgba(${rgb},${alpha})`;

    // backgrounds
    css += `.${name}-${key} { background-color: ${rgba}; }\n`;
    css += `.h${name}-${key}:hover { background-color: ${rgba}; }\n`;

    // text
    css += `.t${name}-${key} { color: ${rgba}; }\n`;
    css += `.ht${name}-${key}:hover { color: ${rgba}; }\n`;

    // border
    css += `.b${name}-${key} { border-color: ${rgba}; }\n`;
    css += `.hb${name}-${key}:hover { border-color: ${rgba}; }\n`;

    // shadow
    css += `.s${name}-${key} { box-shadow: 0 0 20px ${rgba}; }\n`;
    css += `.hs${name}-${key}:hover { box-shadow: 0 0 20px ${rgba}; }\n`;
  }
}

fs.writeFileSync(outputFile, css);
console.log('✅ colors.css generated/updated at', outputFile);
