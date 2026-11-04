/**
 * SURAJ PIPING — PRODUCTS DATA
 * Sourced directly from official assets in src/assets/Our Products/
 */

import forgedFittingsImg from '../assets/Our Products/forged fittings.png';
import flangesImg from '../assets/Our Products/flanges.png';
import buttWeldFittingsImg from '../assets/Our Products/butt weld fittings.png';
import pipesTubesImg from '../assets/Our Products/pipes and tubes.png';
import sheetsPlatesImg from '../assets/Our Products/sheet and plates.png';
import rodsBarsImg from '../assets/Our Products/rods and bars.png';
import fastenersImg from '../assets/Our Products/fasteners.png';

export const featuredProducts = [
  {
    id: 'forged-fittings',
    title: 'Forged Fittings',
    description: 'Precision-engineered fittings for reliable industrial piping connections.',
    image: forgedFittingsImg,
    alt: 'High-pressure stainless steel forged fittings, elbows, tees and couplings',
    link: '/products?category=forged-fittings',
  },
  {
    id: 'flanges',
    title: 'Flanges',
    description: 'Quality industrial flanges for secure and dependable piping systems.',
    image: flangesImg,
    alt: 'Stainless steel weld-neck, slip-on, blind and raised-face industrial flanges',
    link: '/products?category=flanges',
  },
  {
    id: 'butt-weld-fittings',
    title: 'Butt Weld Fittings',
    description: 'Reliable fittings designed for strong and efficient piping connections.',
    image: buttWeldFittingsImg,
    alt: 'Seamless and welded stainless steel buttweld elbows, reducers and tees',
    link: '/products?category=butt-weld-fittings',
  },
  {
    id: 'pipes-and-tubes',
    title: 'Pipes & Tubes',
    description: 'Stainless steel pipes and tubes for diverse industrial applications.',
    image: pipesTubesImg,
    alt: 'Industrial stainless steel seamless and welded pipes and tubing',
    link: '/products?category=pipes-tubes',
  },
  {
    id: 'sheets-and-plates',
    title: 'Sheets & Plates',
    description: 'Quality metal sheets and plates for industrial and engineering requirements.',
    image: sheetsPlatesImg,
    alt: 'Corrosion resistant stainless steel sheets, coils, and heavy plates',
    link: '/products?category=sheets-plates',
  },
  {
    id: 'rods-and-bars',
    title: 'Rods & Bars',
    description: 'Precision metal rods and bars for various industrial applications.',
    image: rodsBarsImg,
    alt: 'Industrial stainless steel round bars, hex rods, and square bars',
    link: '/products?category=rods-bars',
  },
  {
    id: 'fasteners',
    title: 'Fasteners',
    description: 'Reliable industrial fasteners for secure mechanical connections.',
    image: fastenersImg,
    alt: 'High-tensile industrial bolts, nuts, studs, and washers',
    link: '/products?category=fasteners',
  },
];

export const productCategories = [
  {
    id: 'pipes-tubes',
    title: 'Industrial Pipes & Tubes',
    types: ['Seamless Pipes', 'Welded / ERW Pipes', 'Square & Rectangular Hollow Sections', 'Capillary Tubes'],
  },
  {
    id: 'pipe-fittings',
    title: 'Buttweld & Forged Pipe Fittings',
    types: ['Elbows (90°, 45°, 180°)', 'Equal & Reducing Tees', 'Concentric & Eccentric Reducers', 'Stub Ends & Pipe Caps'],
  },
  {
    id: 'flanges',
    title: 'Industrial Flanges',
    types: ['Weld Neck Flanges', 'Slip-on Flanges', 'Blind Flanges', 'Socket Weld & Threaded Flanges'],
  },
  {
    id: 'fasteners',
    title: 'Industrial Fasteners',
    types: ['Stud Bolts', 'Hex Head Bolts', 'Heavy Hex Nuts', 'Flat & Spring Washers'],
  },
];
