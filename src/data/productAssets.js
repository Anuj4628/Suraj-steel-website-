/**
 * SURAJ PIPING — PRODUCT & MATERIAL ASSET MAPPER
 * Resolves exact product and material images dynamically from existing project assets.
 */

// Import category showcase images from Our Products folder
import forgedFittingsHero from '../assets/Our Products/forged fittings.png';
import flangesHero from '../assets/Our Products/flanges.png';
import buttweldFittingsHero from '../assets/Our Products/butt weld fittings.png';
import fastenersHero from '../assets/Our Products/fasteners.png';
import pipesTubesHero from '../assets/Our Products/pipes and tubes.png';
import sheetsPlatesHero from '../assets/Our Products/sheet and plates.png';
import rodsBarsHero from '../assets/Our Products/rods and bars.png';

// Import newly added product-specific copper images from "copper all images for material cards"
import copperButtweld from '../assets/copper all images for material cards/butt weld fit.jpeg';
import copperFasteners from '../assets/copper all images for material cards/fasteners.jpeg';
import copperFlanges from '../assets/copper all images for material cards/flanges.jpeg';
import copperForgeFittings from '../assets/copper all images for material cards/forge fittings.jpeg';
import copperPipesTubes from '../assets/copper all images for material cards/pipes and tubes.jpeg';
import copperRodsBars from '../assets/copper all images for material cards/rods and bars.jpeg';
import copperSheetsPlates from '../assets/copper all images for material cards/sheets and plates.jpeg';

// Import material showcase images for the 9 core materials
import stainlessSteelMatImg from '../assets/Product Section/Material Imges/stainless steel.jpg';
import carbonSteelMatImg from '../assets/Product Section/Material Imges/carbon.png';
import alloySteelMatImg from '../assets/Product Section/Material Imges/alloy steel.jpg';
import duplexSteelMatImg from '../assets/Product Section/Material Imges/super duplex.webp';
import monelMatImg from '../assets/Product Section/Material Imges/exotic.jpeg';
import nickelMatImg from '../assets/Product Section/Material Imges/nikle alloy.png';
import inconelMatImg from '../assets/Product Section/Material Imges/high Alloy.webp';
import titaniumMatImg from '../assets/Product Section/Material Imges/titanium.png';

// Dedicated product-specific copper image map
export const copperProductImages = {
  'forge-fittings': copperForgeFittings,
  'flanges': copperFlanges,
  'buttweld-fittings': copperButtweld,
  'fasteners': copperFasteners,
  'pipes-tubes': copperPipesTubes,
  'sheets-plates': copperSheetsPlates,
  'rods-bars': copperRodsBars,
};

// Material listing showcase images map
export const materialHeroImages = {
  'stainless-steel': stainlessSteelMatImg,
  'carbon-steel': carbonSteelMatImg,
  'alloy-steel': alloySteelMatImg,
  'duplex-steel': duplexSteelMatImg,
  'monel': monelMatImg,
  'nickel': nickelMatImg,
  'nickel-alloys': nickelMatImg,
  'inconel': inconelMatImg,
  'copper': copperPipesTubes,
  'titanium': titaniumMatImg,
};

// Import all files from Product Section eagerly via Vite glob
const productSectionImages = import.meta.glob(
  '../assets/Product Section/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' }
);

// Map of 7 main products to their hero images
export const productHeroImages = {
  'forge-fittings': forgedFittingsHero,
  'flanges': flangesHero,
  'buttweld-fittings': buttweldFittingsHero,
  'fasteners': fastenersHero,
  'pipes-tubes': pipesTubesHero,
  'sheets-plates': sheetsPlatesHero,
  'rods-bars': rodsBarsHero,
};

// Map of product folder paths inside "src/assets/Product Section/"
const productSubfolders = {
  'forge-fittings': 'Manufacturer division/Forged Fittings',
  'flanges': 'Manufacturer division/Flanges',
  'buttweld-fittings': 'Manufacturer division/Butt weld fit',
  'fasteners': 'Manufacturer division/Fasteners',
  'pipes-tubes': 'Supplier division/Pipes and Tubes',
  'sheets-plates': 'Supplier division/Sheet and plates',
  'rods-bars': 'Supplier division/Rods and BArs',
};

/**
 * Get product-material image with intelligent matching and genuine fallbacks
 */
export function getProductMaterialImage(productId, materialId) {
  // 1. If material is copper, use the dedicated product-specific copper image
  if (materialId === 'copper' && copperProductImages[productId]) {
    return copperProductImages[productId];
  }

  const subfolder = productSubfolders[productId];
  if (!subfolder) return productHeroImages[productId];

  // Normalized search key in glob
  const prefix = `../assets/Product Section/${subfolder}/`;

  // Material matcher regexes
  const matchers = {
    'stainless-steel': [/stainless/i, /stainles/i],
    'carbon-steel': [/carbon/i],
    'alloy-steel': [/^alloy/i, /alloy steel/i],
    'duplex-steel': [/super duplex/i, /duplex/i],
    'nickel-alloys': [/nikle/i, /nickel/i],
    'nickel': [/nikle/i, /nickel/i],
    'monel': [/exotic/i, /nikle/i],
    'inconel': [/high alloy/i, /high alloys/i, /nikle/i],
    'copper': [/copper/i],
    'titanium': [/titan/i, /titai/i],
  };

  const regexList = matchers[materialId] || [];

  // 2. First look inside the specific product folder
  for (const regex of regexList) {
    for (const [path, assetUrl] of Object.entries(productSectionImages)) {
      if (path.startsWith(prefix)) {
        const filename = path.replace(prefix, '');
        if (regex.test(filename)) {
          return assetUrl;
        }
      }
    }
  }

  // 3. Fallback to generic material asset if present
  for (const regex of regexList) {
    for (const [path, assetUrl] of Object.entries(productSectionImages)) {
      if (path.includes('Material Imges/')) {
        const filename = path.split('/').pop();
        if (regex.test(filename)) {
          return assetUrl;
        }
      }
    }
  }

  // 4. Fallback to product hero image
  return productHeroImages[productId] || forgedFittingsHero;
}
