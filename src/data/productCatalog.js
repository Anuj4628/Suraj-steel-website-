/**
 * SURAJ PIPING — COMPLETE PRODUCT & MATERIAL CATALOG DATA
 * Enhanced with comprehensive grade lists, chemical compositions, and mechanical properties.
 */

export const products = [
  {
    id: 'forge-fittings',
    name: 'Forge Fittings',
    slug: 'forge-fittings',
    shortDesc: 'High-pressure Class 2000#, 3000#, 6000#, and 9000# socket weld and threaded forged pipe fittings.',
    fullDesc:
      'Suraj Pipe And Fitting manufactures and stocks heavy-duty high-pressure forged steel pipe fittings designed to ASME B16.11, BS 3799, and MSS-SP standards. Forged from solid billets for superior grain flow, fracture toughness, and pressure containment across severe service piping circuits.',
    sizeRange: '1/8" NB to 4" NB (DN6 to DN100)',
    pressureRatings: '2000 LBS, 3000 LBS, 6000 LBS, 9000 LBS (Socket Weld & Screwed NPT/BSPT)',
    standards: ['ASME B16.11', 'BS 3799', 'MSS SP-79 / SP-83 / SP-95 / SP-97'],
    hasTypes: true,
    types: [
      { name: 'Forged 90° & 45° Elbows', spec: 'Socket Weld & Threaded (NPT/BSPT), Class 3000# / 6000#' },
      { name: 'Forged Equal & Reducing Tees', spec: 'Uniform wall thickness, straight & branch reduction' },
      { name: 'Forged Couplings & Half Couplings', spec: 'Full couplings, half couplings, reducing couplings' },
      { name: 'Forged Pipe Unions', spec: 'Ground joint with brass-to-steel or stainless steel seating' },
      { name: 'Forged Caps & Plugs', spec: 'Hex head plugs, square head plugs, round head plugs, pipe caps' },
      { name: 'Hex Bushings & Reducer Inserts', spec: 'Male-to-female threaded and socket weld reduction' },
      { name: 'Swage Nipples & Barrel Nipples', spec: 'Concentric & eccentric forged swage nipples, PBE, TBE, BBE' },
      { name: 'Branch Outlets (Olets)', spec: 'Weldolets, Sockolets, Threadolets, Elbolets, Latrolets' },
    ],
  },
  {
    id: 'flanges',
    name: 'Flanges',
    slug: 'flanges',
    shortDesc: 'Precision-machined industrial pipe flanges in ASME/ANSI, DIN, BS, and EN specifications.',
    fullDesc:
      'Engineered industrial forged flanges manufactured in accordance with ASME B16.5, ASME B16.47 Series A & B, DIN, and EN 1092-1 standards. Featuring precision-serrated raised faces, RTJ ring grooves, and flat face finishes for leak-proof flanged joint integrity.',
    sizeRange: '1/2" NB to 48" NB (DN15 to DN1200)',
    pressureRatings: 'Class 150#, 300#, 600#, 900#, 1500#, 2500# (PN6 to PN400)',
    standards: ['ASME B16.5', 'ASME B16.47 Series A & B', 'EN 1092-1', 'BS 4504', 'MSS SP-44'],
    hasTypes: true,
    types: [
      { name: 'Weld Neck Flanges (WNRF)', spec: 'Tapered hub for critical, high-pressure, severe cyclic loading' },
      { name: 'Slip-On Flanges (SORF)', spec: 'Easy alignment and fillet welded inside and outside' },
      { name: 'Blind Flanges (BLRF)', spec: 'Solid forged disk for isolating piping ends or inspection ports' },
      { name: 'Socket Weld Flanges (SWRF)', spec: 'Bored shoulder for small diameter high-pressure lines' },
      { name: 'Threaded / Screwed Flanges', spec: 'NPT / BSPT threaded connection for welding-prohibited zones' },
      { name: 'Lap Joint Flanges (LJRF)', spec: 'Used with stub ends for quick bolt alignment and low-cost maintenance' },
      { name: 'Long Weld Neck Flanges (LWNRF)', spec: 'Extended heavy-wall neck for vessel nozzles and column connections' },
      { name: 'Orifice & Spectacle Blind Flanges', spec: 'Differential flow metering assemblies & isolation spacers' },
    ],
  },
  {
    id: 'buttweld-fittings',
    name: 'Buttweld Fittings',
    slug: 'buttweld-fittings',
    shortDesc: 'Seamless and welded industrial butt weld pipe fittings conforming to ASME B16.9.',
    fullDesc:
      'High-integrity butt weld fittings precision formed and bevel-ended for complete penetration butt welding into continuous piping runs. Engineered to eliminate flow turbulence and crevice corrosion across severe fluid transport systems.',
    sizeRange: '1/2" NB to 36" NB (Seamless up to 24", Welded 100% Radiographed up to 36")',
    pressureRatings: 'SCH 5S, 10S, 40S, 80S, 160, XXS (Wall thickness up to 60mm)',
    standards: ['ASME B16.9', 'ASME B16.28', 'MSS SP-43', 'DIN 2605 / 2615'],
    hasTypes: true,
    types: [
      { name: '90° Long Radius (LR) & Short Radius (SR) Elbows', spec: 'ASME B16.9 bevel ends, seamless & welded' },
      { name: '45° Long Radius Elbows', spec: 'Smooth radius directional redirection, minimal friction head' },
      { name: 'Equal & Reducing Tees', spec: 'Extruded / fabricated 90° branch connection with full reinforcement' },
      { name: 'Concentric & Eccentric Reducers', spec: 'Inline diameter reduction for horizontal and vertical lines' },
      { name: '180° Return Bends', spec: 'Close-center & long-radius heating coil return bends' },
      { name: 'End Pipe Caps', spec: 'Ellipsoidal and dished hydro-tested closure caps' },
      { name: 'Lap Joint Stub Ends', spec: 'Short and long pattern type A, B, and C with serrated gasket face' },
      { name: 'Four-Way Crosses', spec: 'Equal and reducing welded branch distribution fittings' },
    ],
  },
  {
    id: 'fasteners',
    name: 'Fasteners',
    slug: 'fasteners',
    shortDesc: 'High-tensile, corrosion-resistant industrial stud bolts, heavy hex nuts, and fasteners.',
    fullDesc:
      'Industrial bolting hardware engineered for critical pressure vessels, high-temperature boilers, cryogenic tanks, and corrosive marine flanged connections. Manufactured to ASTM A193, A194, A320, and ISO metric standards with certified coatings.',
    sizeRange: 'M6 to M100 (1/4" to 4" diameter), lengths up to 4 meters',
    pressureRatings: 'Grade B7 / 2H, B16, B8 / 8M, L7 / Gr 4, 8.8, 10.9, 12.9',
    standards: ['ASTM A193 / A194', 'ASTM A320', 'ASME B18.2.1 / B18.2.2', 'DIN 931 / 933 / 934'],
    hasTypes: true,
    types: [
      { name: 'Full Threaded Stud Bolts', spec: 'Continuous threaded studs for ASME B16.5 flanged connections' },
      { name: 'Heavy Hex Head Structural Bolts', spec: 'Full thread & half thread heavy duty structural bolts' },
      { name: 'Heavy Hex Nuts', spec: 'Proof-load certified matching nuts (Grade 2H, Gr 8, Gr 8M, Gr 7)' },
      { name: 'Flat Plain & Spherical Washers', spec: 'ASTM F436 hardened steel and DIN 125 flat washers' },
      { name: 'Spring Lock Washers', spec: 'High-tension anti-vibration locking washers' },
      { name: 'Continuous All-Thread Rods', spec: 'Custom length threaded tie rods for piping supports' },
      { name: 'Socket Head Cap Screws', spec: 'High-torque internal hex socket machine bolts' },
    ],
  },
  {
    id: 'pipes-tubes',
    name: 'Pipes & Tubes',
    slug: 'pipes-tubes',
    shortDesc: 'Seamless, ERW, and EFW industrial pipes and instrumentation tubes in standard and custom schedules.',
    fullDesc:
      'Complete supply of seamless and welded industrial pipes and precision instrumentation tubing in stainless steel, carbon steel, and specialized alloys. Sourced from premier NABL and PED accredited mills, 100% eddy-current or hydro-tested, with EN 10204 3.1 MTC.',
    sizeRange: '1/8" NB to 48" NB (Pipes), 6mm to 50mm OD (Precision Instrumentation Tubes)',
    pressureRatings: 'SCH 5S through SCH XXS, Wall thickness up to 80mm',
    standards: ['ASTM A312', 'ASTM A106', 'ASTM A335', 'ASTM A790', 'ASTM A269', 'API 5L'],
    hasTypes: false,
  },
  {
    id: 'sheets-plates',
    name: 'Sheets & Plates',
    slug: 'sheets-plates',
    shortDesc: 'Hot rolled and cold rolled industrial sheets, plates, coils, and profiles.',
    fullDesc:
      'Industrial grade metal sheets, heavy plates, and slit coils available in cold rolled (2B / BA / No. 4 mirror) and hot rolled (No. 1 pickled) conditions. Suitable for chemical process vessels, storage tanks, heat exchanger baffles, and heavy fabrication.',
    sizeRange: 'Thickness: 0.5mm to 100mm | Width: 1000mm, 1250mm, 1500mm, 2000mm | Length: 2000mm to 6000mm',
    pressureRatings: 'Pressure Vessel Grade (ASTM A516, ASTM A240, EN 10028)',
    standards: ['ASTM A240', 'ASTM A516', 'ASME SA240', 'EN 10028-7', 'IS 2062'],
    hasTypes: false,
  },
  {
    id: 'rods-bars',
    name: 'Rods & Bars',
    slug: 'rods-bars',
    shortDesc: 'Precision bright round bars, hex bars, square bars, and flats for machining and forging.',
    fullDesc:
      'High-precision engineered steel round bars, peeled, turned, and centerless ground with strict h9/h11 diameter tolerances. Used extensively by CNC machining workshops, pump shaft manufacturers, and valve spindle fabricators.',
    sizeRange: 'Diameter: 3mm to 350mm (Round Bars), Hex: 6mm to 65mm, Square: 6mm to 100mm',
    pressureRatings: 'Annealed, Quenched & Tempered, Cold Drawn (ASTM A276 / A479)',
    standards: ['ASTM A276', 'ASTM A479', 'DIN 1013', 'EN 10088-3', 'BS 970'],
    hasTypes: false,
  },
];

export const materials = [
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    slug: 'stainless-steel',
    badge: 'AUSTENITIC & FERRITIC',
    shortDesc: 'Superior corrosion resistance, hygienic purity, and versatile mechanical ductility across industrial environments.',
    families: ['Austenitic Stainless Steel', 'Ferritic Stainless Steel', 'Martensitic Stainless Steel'],
  },
  {
    id: 'carbon-steel',
    name: 'Carbon Steel',
    slug: 'carbon-steel',
    badge: 'HIGH STRENGTH & ECONOMY',
    shortDesc: 'Exceptional structural strength, ease of welding, and dependable performance in standard to low-temperature pipelines.',
    families: ['Standard Carbon Steel', 'Low-Temperature Carbon Steel (LTCS)', 'High-Yield Line Pipe Steel'],
  },
  {
    id: 'alloy-steel',
    name: 'Alloy Steel',
    slug: 'alloy-steel',
    badge: 'ELEVATED TEMPERATURE & CREEP',
    shortDesc: 'Enhanced high-temperature tensile strength, creep resistance, and impact toughness for thermal steam applications.',
    families: ['Chrome-Moly Alloy Steel', 'Modified 9Cr Creep-Resistant Steel', 'High-Tensile Quenched & Tempered Alloy'],
  },
  {
    id: 'duplex-steel',
    name: 'Duplex & Super Duplex',
    slug: 'duplex-steel',
    badge: 'HIGH RESISTANCE & STRENGTH',
    shortDesc: 'Dual-phase microstructure delivering double the yield strength of austenitic steel and supreme resistance to chloride pitting.',
    families: ['22Cr Standard Duplex', '25Cr Super Duplex', 'Tungsten-Modified Super Duplex'],
  },
  {
    id: 'nickel',
    name: 'Nickel',
    slug: 'nickel',
    aliases: ['nickel-alloys'],
    badge: 'SEVERE CHEMICAL SERVICE',
    shortDesc: 'Outstanding thermal stability and resistance to reducing and oxidizing acids in aggressive chemical processing.',
    families: ['Commercially Pure Nickel 200/201', 'Nickel-Moly-Chrome (Hastelloy C-276)', 'Sulfuric Acid Resistant Alloy 20'],
  },
  {
    id: 'monel',
    name: 'Monel',
    slug: 'monel',
    badge: 'HYDROFLUORIC & MARINE SPECIALTY',
    shortDesc: 'Premier nickel-copper alloy with exceptional resistance to rapidly flowing seawater and hydrofluoric acid.',
    families: ['Solid-Solution Monel 400', 'Age-Hardened Monel K-500', 'Free-Machining Monel R-405'],
  },
  {
    id: 'inconel',
    name: 'Inconel',
    slug: 'inconel',
    badge: 'ULTRA-HIGH HEAT & CORROSION',
    shortDesc: 'Nickel-chromium superalloy engineered to retain high tensile strength in extreme oxidation up to 1000°C.',
    families: ['High-Temperature Inconel 600', 'Marine-Grade Inconel 625', 'Precipitation-Hardened Inconel 718'],
  },
  {
    id: 'copper',
    name: 'Copper',
    slug: 'copper',
    badge: 'THERMAL & ANTI-FOULING',
    shortDesc: 'High electrical and thermal conductivity combined with natural anti-biofouling performance in seawater systems.',
    families: ['Cupro-Nickel 90/10 (C70600)', 'Cupro-Nickel 70/30 (C71500)', 'Pure Electrolytic Copper (C11000)'],
  },
  {
    id: 'titanium',
    name: 'Titanium',
    slug: 'titanium',
    badge: 'LIGHTWEIGHT & MAXIMUM RESISTANCE',
    shortDesc: 'High strength-to-weight ratio with near-total immunity to wet chlorine, saltwater, and industrial chlorates.',
    families: ['Commercially Pure Grade 2', 'High-Strength Ti-6Al-4V Grade 5', 'Palladium-Enhanced Grade 7'],
  },
];

/**
 * Returns comprehensive grade list tailored to each product and material.
 * Includes short pill label (e.g. "304", "316L", "A105N", "F22") for the compact selector.
 */
export function getProductMaterialGrades(productId, materialId) {
  if (materialId === 'stainless-steel') {
    return [
      {
        id: '304',
        pillLabel: '304',
        designation: 'AISI 304 / ASTM A182 F304 / A312 TP304',
        unsNumber: 'UNS S30400',
        shortSpec: 'Universal 18/8 austenitic stainless steel with balanced ductility and atmospheric corrosion resistance.',
        fullDescription: 'The classic 18/8 austenitic stainless steel featuring 18% chromium and 8% nickel. Provides dependable general corrosion resistance, excellent cold forming capability, and universal weldability across processing piping, storage tanks, and industrial fittings.',
        properties: { tensile: '515 MPa min', yield: '205 MPa min', elongation: '40% min', hardness: '201 HBW max' },
        chemistry: { C: '0.08% max', Mn: '2.00% max', Si: '0.75% max', Cr: '18.0 - 20.0%', Ni: '8.0 - 10.5%', Mo: '—', N: '0.10% max' },
        standards: ['ASTM A182 / A312 / A240', 'EN 10204 3.1'],
        applications: ['Process piping systems', 'Chemical fluid handling', 'Sanitary & beverage processing', 'Architectural components'],
      },
      {
        id: '304l',
        pillLabel: '304L',
        designation: 'AISI 304L / ASTM A182 F304L / A312 TP304L',
        unsNumber: 'UNS S30403',
        shortSpec: 'Extra low-carbon modification (C ≤ 0.030%) preventing intergranular carbide precipitation during welding.',
        fullDescription: 'Low-carbon variant of 304 engineered to eliminate sensitization during welding and hot forming. Immunizes welded heat-affected zones against intergranular corrosion in aggressive chemical environments without post-weld solution annealing.',
        properties: { tensile: '485 MPa min', yield: '170 MPa min', elongation: '40% min', hardness: '201 HBW max' },
        chemistry: { C: '0.030% max', Mn: '2.00% max', Si: '0.75% max', Cr: '18.0 - 20.0%', Ni: '8.0 - 12.0%', Mo: '—', N: '0.10% max' },
        standards: ['ASTM A182 / A312 / A403', 'ASME SA182'],
        applications: ['Heavy-wall welded piping', 'Chemical storage vessels', 'Refinery utility headers'],
      },
      {
        id: '316',
        pillLabel: '316',
        designation: 'AISI 316 / ASTM A182 F316 / A312 TP316',
        unsNumber: 'UNS S31600',
        shortSpec: '2–3% Molybdenum-alloyed austenitic stainless steel providing elevated resistance to chlorides and pitting.',
        fullDescription: 'Molybdenum-bearing grade offering significantly enhanced pitting and crevice corrosion resistance in marine environments, chloride solutions, and acidic process streams. Standard material for marine offshore systems and chemical reactors.',
        properties: { tensile: '515 MPa min', yield: '205 MPa min', elongation: '40% min', hardness: '217 HBW max' },
        chemistry: { C: '0.08% max', Mn: '2.00% max', Si: '0.75% max', Cr: '16.0 - 18.0%', Ni: '10.0 - 14.0%', Mo: '2.0 - 3.0%', N: '0.10% max' },
        standards: ['ASTM A182 / A312 / A240', 'NACE MR0175'],
        applications: ['Offshore oil & gas pipelines', 'Marine hardware', 'Pharmaceutical equipment', 'Desalination plant piping'],
      },
      {
        id: '316l',
        pillLabel: '316L',
        designation: 'AISI 316L / ASTM A182 F316L / A312 TP316L',
        unsNumber: 'UNS S31603',
        shortSpec: 'Extra low-carbon molybdenum grade providing maximum welded corrosion resistance in marine and sour environments.',
        fullDescription: 'The premier low-carbon molybdenum austenitic stainless steel. Combines superior resistance to localized chloride pitting with total immunity to weld-decay sensitization, meeting strict NACE MR0175 sour service requirements.',
        properties: { tensile: '485 MPa min', yield: '170 MPa min', elongation: '40% min', hardness: '217 HBW max' },
        chemistry: { C: '0.030% max', Mn: '2.00% max', Si: '0.75% max', Cr: '16.0 - 18.0%', Ni: '10.0 - 14.0%', Mo: '2.0 - 3.0%', N: '0.10% max' },
        standards: ['ASTM A182 / A312 / A403', 'NACE MR0175 / ISO 15156'],
        applications: ['Subsea oil flowlines', 'Acid transfer piping', 'Marine deck fittings', 'Pulp and paper bleaching'],
      },
      {
        id: '310s',
        pillLabel: '310S',
        designation: 'AISI 310S / ASTM A182 F310 / A312 TP310S',
        unsNumber: 'UNS S31008',
        shortSpec: 'High chromium-nickel (25Cr/20Ni) heat-resistant alloy for continuous oxidative duty up to 1150°C.',
        fullDescription: 'High-alloy austenitic stainless steel designed specifically for high-temperature service. Outstanding resistance to thermal fatigue, cyclic oxidation, and carburization in industrial furnaces, kilns, and refinery thermal crackers.',
        properties: { tensile: '515 MPa min', yield: '205 MPa min', elongation: '35% min', hardness: '217 HBW max' },
        chemistry: { C: '0.08% max', Mn: '2.00% max', Si: '1.50% max', Cr: '24.0 - 26.0%', Ni: '19.0 - 22.0%', Mo: '—', N: '—' },
        standards: ['ASTM A182 / A312 / A240', 'ASME SA182'],
        applications: ['Furnace burner nozzles', 'Thermal oxidizer piping', 'Fluidized bed combustors', 'Cement kiln equipment'],
      },
      {
        id: '321',
        pillLabel: '321',
        designation: 'AISI 321 / ASTM A182 F321 / A312 TP321',
        unsNumber: 'UNS S32100',
        shortSpec: 'Titanium-stabilized austenitic stainless steel for high-temperature service in the 425°C–850°C carbide range.',
        fullDescription: 'Stabilized with titanium (Ti ≥ 5x carbon) to tie up carbon and prevent chromium carbide precipitation at elevated operating temperatures. Retains high creep rupture strength and intergranular corrosion passivity in thermal power boilers.',
        properties: { tensile: '515 MPa min', yield: '205 MPa min', elongation: '35% min', hardness: '217 HBW max' },
        chemistry: { C: '0.08% max', Mn: '2.00% max', Si: '0.75% max', Cr: '17.0 - 19.0%', Ni: '9.0 - 12.0%', Ti: '5x(C+N) min', Mo: '—' },
        standards: ['ASTM A182 / A312 / A403', 'PED 2014/68/EU'],
        applications: ['Boiler superheater piping', 'Aircraft exhaust manifolds', 'Refinery catalytic cracking tubes'],
      },
      {
        id: '347',
        pillLabel: '347',
        designation: 'AISI 347 / ASTM A182 F347 / A312 TP347',
        unsNumber: 'UNS S34700',
        shortSpec: 'Niobium/Columbium-stabilized stainless steel resisting high-temperature polythionic acid stress cracking.',
        fullDescription: 'Columbium/tantalum stabilized stainless steel specifically utilized in petroleum refining hydrotreaters to eliminate polythionic acid stress corrosion cracking during shutdown and operational cycles up to 800°C.',
        properties: { tensile: '515 MPa min', yield: '205 MPa min', elongation: '35% min', hardness: '217 HBW max' },
        chemistry: { C: '0.08% max', Mn: '2.00% max', Si: '0.75% max', Cr: '17.0 - 19.0%', Ni: '9.0 - 13.0%', Nb: '10xC min', Mo: '—' },
        standards: ['ASTM A182 / A312 / A403'],
        applications: ['Refinery hydrodesulfurization units', 'Radiant superheaters', 'Heavy chemical reactor internals'],
      },
      {
        id: '410',
        pillLabel: '410',
        designation: 'AISI 410 / ASTM A182 F6a / A276 410',
        unsNumber: 'UNS S41000',
        shortSpec: 'Martensitic 11.5–13.5% Cr stainless steel heat-treatable to high hardness and abrasive wear resistance.',
        fullDescription: 'Basic martensitic stainless steel capable of developing high tensile strength and hardness through quench-and-temper heat treatment. Resists mild atmospheric corrosion, steam, and abrasive slurry erosion in valve trim and pump components.',
        properties: { tensile: '485 to 690 MPa', yield: '275 to 450 MPa', elongation: '18% min', hardness: '220 HBW max' },
        chemistry: { C: '0.08 - 0.15%', Mn: '1.00% max', Si: '1.00% max', Cr: '11.5 - 13.5%', Ni: '0.75% max', Mo: '—' },
        standards: ['ASTM A182 / A276 / A479'],
        applications: ['Valve trim & stems', 'Pump shafts', 'Turbine blades', 'Industrial fasteners'],
      },
      {
        id: '904l',
        pillLabel: '904L',
        designation: 'AISI 904L / ASTM B625 / B649 / B677',
        unsNumber: 'UNS N08904',
        shortSpec: 'Super-austenitic 20Cr-25Ni-4.5Mo-1.5Cu alloy delivering extraordinary resistance to warm sulfuric acid.',
        fullDescription: 'High-alloy super-austenitic stainless steel enriched with 25% nickel and 1.5% copper. Specifically engineered to withstand warm dilute sulfuric acid across the entire concentration curve, phosphoric acid, and aggressive chloride pitting.',
        properties: { tensile: '490 MPa min', yield: '220 MPa min', elongation: '35% min', hardness: '210 HBW max' },
        chemistry: { C: '0.020% max', Mn: '2.00% max', Cr: '19.0 - 23.0%', Ni: '23.0 - 28.0%', Mo: '4.0 - 5.0%', Cu: '1.0 - 2.0%', N: '0.10% max' },
        standards: ['ASTM B625 / B677 / B649'],
        applications: ['Sulfuric acid handling', 'Phosphate fertilizer evaporators', 'Flue gas desulfurization scrubbers'],
      },
      {
        id: 'f51-2205',
        pillLabel: 'F51 (2205)',
        designation: 'Duplex 2205 / ASTM A182 F51 / S31803',
        unsNumber: 'UNS S31803 / S32205',
        shortSpec: 'Dual-phase 22Cr-5Ni-3Mo-0.17N delivering double the yield strength of 316 and PREN ≥ 34.',
        fullDescription: 'The most popular duplex stainless steel combining roughly 50% ferrite and 50% austenite phases. Boasts double the yield strength of austenitic grades and superior resistance to chloride stress corrosion cracking in seawater and oilfield sour service.',
        properties: { tensile: '655 MPa min', yield: '450 MPa min', elongation: '25% min', hardness: '310 HBW max' },
        chemistry: { C: '0.030% max', Mn: '2.00% max', Cr: '22.0 - 23.0%', Ni: '4.5 - 6.5%', Mo: '3.0 - 3.5%', N: '0.14 - 0.20%' },
        standards: ['ASTM A182 F51', 'ASTM A790', 'NACE MR0175'],
        applications: ['Offshore oil separators', 'Subsea risers', 'Desalination high-pressure lines'],
      },
      {
        id: 'f53-2507',
        pillLabel: 'F53 (2507)',
        designation: 'Super Duplex 2507 / ASTM A182 F53 / S32750',
        unsNumber: 'UNS S32750',
        shortSpec: 'High-alloyed 25Cr-7Ni-4Mo-0.28N super duplex with PREN ≥ 42 for severe offshore chloride service.',
        fullDescription: 'Engineered for extreme offshore environments where standard duplex is inadequate. Offers near-immunity to chloride stress corrosion cracking, high erosion resistance, and outstanding tensile strength in offshore subsea manifolds.',
        properties: { tensile: '750 MPa min', yield: '550 MPa min', elongation: '15% min', hardness: '310 HBW max' },
        chemistry: { C: '0.030% max', Mn: '1.20% max', Cr: '24.0 - 26.0%', Ni: '6.0 - 8.0%', Mo: '3.0 - 5.0%', N: '0.24 - 0.32%' },
        standards: ['ASTM A182 F53', 'ASTM A790', 'NACE MR0175'],
        applications: ['Seawater injection systems', 'Subsea manifolds', 'Flue gas desulfurization scrubbers'],
      },
    ];
  }

  if (materialId === 'carbon-steel') {
    return [
      {
        id: 'a105n',
        pillLabel: 'A105N',
        designation: 'ASTM A105 / A105N Normalized Forging',
        unsNumber: 'UNS K03504',
        shortSpec: 'Standard normalized carbon steel forging for ambient and high-temperature pressure piping.',
        fullDescription: 'The premier normalized forged carbon steel specification for flanges, elbows, tees, and couplings in ASME B16.5 and B16.11 systems. Normalized heat treatment ensures fine grain structure, high impact toughness, and reliable ductility.',
        properties: { tensile: '485 MPa min', yield: '250 MPa min', elongation: '22% min', hardness: '187 HBW max' },
        chemistry: { C: '0.35% max', Mn: '0.60 - 1.05%', P: '0.035% max', S: '0.040% max', Si: '0.10 - 0.35%' },
        standards: ['ASTM A105', 'ASME SA105', 'MSS SP-25'],
        applications: ['Oil and gas transmission', 'Steam distribution headers', 'Refinery utility piping'],
      },
      {
        id: 'a106-gr-b',
        pillLabel: 'A106 Gr B',
        designation: 'ASTM A106 Grade B Seamless Pipe',
        unsNumber: 'UNS K03006',
        shortSpec: 'High-temperature seamless carbon steel pipe for oil refineries and power plant steam conduits.',
        fullDescription: 'Standard seamless pipe specification for high-temperature service in boilers, process refineries, and power generation lines up to 425°C. 100% hydrostatically and non-destructively tested.',
        properties: { tensile: '415 MPa min', yield: '240 MPa min', elongation: '30% min', hardness: '187 HBW max' },
        chemistry: { C: '0.30% max', Mn: '0.29 - 1.06%', P: '0.035% max', S: '0.035% max', Si: '0.10% min' },
        standards: ['ASTM A106', 'ASME SA106', 'API 5L Gr B'],
        applications: ['High-pressure steam lines', 'Power plant piping', 'Refinery process streams'],
      },
      {
        id: 'a234-wpb',
        pillLabel: 'A234 WPB',
        designation: 'ASTM A234 Grade WPB Butt Weld Fitting',
        unsNumber: 'UNS K03006',
        shortSpec: 'Wrought carbon steel butt weld fittings conforming to ASME B16.9 for moderate & high heat piping.',
        fullDescription: 'The universal wrought carbon steel butt weld fitting grade for elbows, tees, reducers, and caps conforming to ASME B16.9. Offers proven weldability and pressure containment.',
        properties: { tensile: '415 to 585 MPa', yield: '240 MPa min', elongation: '20% min', hardness: '197 HBW max' },
        chemistry: { C: '0.30% max', Mn: '0.29 - 1.06%', P: '0.050% max', S: '0.058% max', Si: '0.10% min' },
        standards: ['ASTM A234', 'ASME B16.9'],
        applications: ['Crude oil transmission lines', 'Industrial steam networks', 'Cooling water manifolds'],
      },
      {
        id: 'a350-lf2',
        pillLabel: 'A350 LF2',
        designation: 'ASTM A350 LF2 Class 1 (Low Temp)',
        unsNumber: 'UNS K03011',
        shortSpec: 'Low-temperature forged carbon steel with guaranteed Charpy V-notch impact toughness at -46°C.',
        fullDescription: 'Engineered specifically for sub-zero cryogenic and Arctic service. Impact tested at -46°C (-50°F) to guarantee resistance to brittle fracture in refrigerated gas lines, LNG terminals, and cold climate pipeline networks.',
        properties: { tensile: '485 to 655 MPa', yield: '250 MPa min', elongation: '22% min', impact: '20J min at -46°C' },
        chemistry: { C: '0.30% max', Mn: '0.60 - 1.35%', P: '0.035% max', S: '0.040% max', Si: '0.15 - 0.30%' },
        standards: ['ASTM A350', 'ASME SA350', 'NACE MR0175'],
        applications: ['Cryogenic gas transmission', 'LPG/LNG storage flanging', 'Cold climate oil exploration'],
      },
      {
        id: 'api-5l-x52',
        pillLabel: 'API 5L X52',
        designation: 'API 5L Grade X52 (PSL 1 / PSL 2)',
        unsNumber: 'API 5L X52',
        shortSpec: 'High-yield carbon steel line pipe with minimum 360 MPa yield strength for cross-country pipelines.',
        fullDescription: 'Manufactured with controlled carbon equivalent for field weldability and fracture arrest properties under high-pressure gas transmission.',
        properties: { tensile: '460 to 760 MPa', yield: '360 to 530 MPa', elongation: '21% min' },
        chemistry: { C: '0.22% max', Mn: '1.40% max', P: '0.025% max', S: '0.015% max' },
        standards: ['API 5L', 'ISO 3183', 'NACE MR0175'],
        applications: ['Cross-country gas pipelines', 'Crude oil transmission', 'Offshore export risers'],
      },
      {
        id: 'a516-gr-70',
        pillLabel: 'A516 Gr 70',
        designation: 'ASTM A516 Grade 70 Boiler Quality',
        unsNumber: 'UNS K02700',
        shortSpec: 'High-strength boiler quality carbon steel plate for pressure vessels and heat exchangers.',
        fullDescription: 'Exceptional notch toughness and weldability for moderate and lower-temperature pressure vessel fabrication in refineries and chemical plants.',
        properties: { tensile: '485 to 620 MPa', yield: '260 MPa min', elongation: '21% min' },
        chemistry: { C: '0.27% max', Mn: '0.85 - 1.20%', P: '0.035% max', S: '0.035% max', Si: '0.15 - 0.40%' },
        standards: ['ASTM A516', 'ASME SA516', 'IS 2062'],
        applications: ['Boiler drums', 'Pressure vessel shells', 'Storage tanks', 'Heavy structural frames'],
      },
    ];
  }

  if (materialId === 'alloy-steel') {
    return [
      {
        id: 'f11-p11',
        pillLabel: 'F11 / P11',
        designation: 'ASTM A182 F11 / A335 P11 (1.25Cr-0.5Mo)',
        unsNumber: 'UNS K11572',
        shortSpec: 'Chromium-molybdenum alloy steel for elevated temperature steam lines up to 550°C.',
        fullDescription: '1.25% Cr - 0.5% Mo alloy steel providing dependable resistance to hydrogen attack and creep deformation at operating temperatures up to 550°C in thermal power plants.',
        properties: { tensile: '485 MPa min', yield: '310 MPa min', elongation: '20% min', hardness: '143 to 207 HBW' },
        chemistry: { C: '0.10 - 0.20%', Mn: '0.40 - 0.65%', Cr: '1.00 - 1.50%', Mo: '0.44 - 0.65%', Si: '0.50 - 1.00%' },
        standards: ['ASTM A182 / A335 / A234'],
        applications: ['Steam headers', 'Power plant turbine nozzles', 'Refinery hydrocrackers'],
      },
      {
        id: 'f22-p22',
        pillLabel: 'F22 / P22',
        designation: 'ASTM A182 F22 / A335 P22 (2.25Cr-1Mo)',
        unsNumber: 'UNS K21590',
        shortSpec: 'High-creep-strength 2.25Cr-1Mo alloy steel for 590°C thermal steam generators and boilers.',
        fullDescription: 'Offers higher chromium and molybdenum content for severe thermal cycling, resisting graphitization and high-temperature hydrogen embrittlement in steam generators.',
        properties: { tensile: '515 MPa min', yield: '310 MPa min', elongation: '20% min', hardness: '156 to 207 HBW' },
        chemistry: { C: '0.10 - 0.15%', Mn: '0.30 - 0.60%', Cr: '2.00 - 2.50%', Mo: '0.87 - 1.13%', Si: '0.50% max' },
        standards: ['ASTM A182 / A335 / A234'],
        applications: ['Superheated steam circuits', 'Boiler feed nozzles', 'Reheater flanging'],
      },
      {
        id: 'f5-p5',
        pillLabel: 'F5 / P5',
        designation: 'ASTM A182 F5 / A335 P5 (5Cr-0.5Mo)',
        unsNumber: 'UNS K41545',
        shortSpec: '5% Chromium intermediate alloy steel resisting sulfidic corrosion in oil refinery cracking units.',
        fullDescription: 'Intermediate alloy steel providing enhanced oxidation and sulfur corrosion resistance in high-temperature crude distillation furnaces.',
        properties: { tensile: '415 MPa min', yield: '205 MPa min', elongation: '30% min', hardness: '187 HBW max' },
        chemistry: { C: '0.15% max', Mn: '0.30 - 0.60%', Cr: '4.00 - 6.00%', Mo: '0.45 - 0.65%', Si: '0.50% max' },
        standards: ['ASTM A182 / A335'],
        applications: ['Coker units', 'Crude oil heaters', 'Refinery cracking furnaces'],
      },
      {
        id: 'f91-p91',
        pillLabel: 'F91 / P91',
        designation: 'ASTM A182 F91 / A335 P91 (9Cr-1Mo-V)',
        unsNumber: 'UNS K90901',
        shortSpec: 'Modified 9Cr-1Mo-V martensitic alloy steel for ultra-supercritical (USC) power stations.',
        fullDescription: 'Utilizes micro-alloying additions of vanadium, niobium, and nitrogen to achieve superior creep rupture strength up to 600°C with reduced wall thickness.',
        properties: { tensile: '585 MPa min', yield: '415 MPa min', elongation: '20% min', hardness: '190 to 248 HBW' },
        chemistry: { C: '0.08 - 0.12%', Mn: '0.30 - 0.60%', Cr: '8.00 - 9.50%', Mo: '0.85 - 1.05%', V: '0.18 - 0.25%', Nb: '0.06 - 0.10%' },
        standards: ['ASTM A182 / A335 / A234'],
        applications: ['Ultra-supercritical power piping', 'Steam turbine main steam lines'],
      },
      {
        id: 'aisi-4140',
        pillLabel: '4140',
        designation: 'AISI 4140 / 42CrMo4 Alloy Steel',
        unsNumber: 'UNS G41400',
        shortSpec: 'High-tensile chrome-moly steel bar stock for precision machining, drive shafts, and bolts.',
        fullDescription: 'Versatile through-hardening alloy steel heat-treated for high torsional strength and fatigue resistance in heavy industrial machinery.',
        properties: { tensile: '655 to 1000 MPa', yield: '415 to 800 MPa', elongation: '15 to 25%' },
        chemistry: { C: '0.38 - 0.43%', Mn: '0.75 - 1.00%', Cr: '0.80 - 1.10%', Mo: '0.15 - 0.25%', Si: '0.15 - 0.35%' },
        standards: ['ASTM A29 / EN 10083'],
        applications: ['High-torque shafts', 'Drill collars', 'Hydraulic cylinder rods'],
      },
    ];
  }

  if (materialId === 'duplex-steel') {
    return [
      {
        id: '2205-s31803',
        pillLabel: '2205 (F51)',
        designation: 'Duplex 2205 (UNS S31803 / S32205 / F51)',
        unsNumber: 'UNS S31803 / S32205',
        shortSpec: 'Standard dual-phase 22Cr-5Ni-3Mo stainless steel with PREN ≥ 34 and high yield strength.',
        fullDescription: 'Provides roughly twice the design yield strength of austenitic stainless steel, coupled with extraordinary resistance to chloride pitting, crevice corrosion, and stress corrosion cracking in seawater and sour gas (H2S) environments.',
        properties: { tensile: '655 MPa min', yield: '450 MPa min', elongation: '25% min', hardness: '310 HBW max' },
        chemistry: { C: '0.030% max', Cr: '22.0 - 23.0%', Ni: '4.5 - 6.5%', Mo: '3.0 - 3.5%', N: '0.14 - 0.20%' },
        standards: ['ASTM A182 F51', 'ASTM A790', 'NACE MR0175'],
        applications: ['Offshore oil & gas separators', 'Subsea flowlines', 'Desalination high-pressure pumps'],
      },
      {
        id: '2507-s32750',
        pillLabel: '2507 (F53)',
        designation: 'Super Duplex 2507 (UNS S32750 / F53)',
        unsNumber: 'UNS S32750',
        shortSpec: '25Cr-7Ni-4Mo-0.28N super duplex with PREN ≥ 42 for severe chloride & subsea service.',
        fullDescription: 'Engineered for exceptionally demanding corrosive applications where standard duplex is inadequate. Offers near-immunity to chloride stress corrosion cracking, high erosion resistance, and outstanding tensile strength in offshore subsea manifolds.',
        properties: { tensile: '750 MPa min', yield: '550 MPa min', elongation: '15% min', hardness: '310 HBW max' },
        chemistry: { C: '0.030% max', Cr: '24.0 - 26.0%', Ni: '6.0 - 8.0%', Mo: '3.0 - 5.0%', N: '0.24 - 0.32%' },
        standards: ['ASTM A182 F53', 'ASTM A790', 'NACE MR0175'],
        applications: ['Seawater injection systems', 'Subsea manifolds', 'Flue gas desulfurization scrubbers'],
      },
      {
        id: 'zeron-100-s32760',
        pillLabel: 'Zeron 100 (F55)',
        designation: 'Super Duplex S32760 (F55 / Zeron 100)',
        unsNumber: 'UNS S32760',
        shortSpec: 'Tungsten and copper-containing super duplex with PREN ≥ 42 and superior hot acid resistance.',
        fullDescription: 'Contains intentional additions of tungsten (0.5–1.0%) and copper (0.5–1.0%) which enhance localized corrosion resistance in hot sulfuric and hydrochloric acid solutions.',
        properties: { tensile: '750 MPa min', yield: '550 MPa min', elongation: '25% min', hardness: '310 HBW max' },
        chemistry: { C: '0.030% max', Cr: '24.0 - 26.0%', Ni: '6.0 - 8.0%', Mo: '3.0 - 4.0%', W: '0.5 - 1.0%', Cu: '0.5 - 1.0%' },
        standards: ['ASTM A182 F55', 'ASTM A790', 'NORSOK M-650'],
        applications: ['Offshore firewater deluge piping', 'Sulfuric acid handling', 'Subsea risers'],
      },
    ];
  }

  if (materialId === 'nickel' || materialId === 'nickel-alloys') {
    return [
      {
        id: 'nickel-200',
        pillLabel: 'Nickel 200',
        designation: 'Nickel 200 (UNS N02200)',
        unsNumber: 'UNS N02200',
        shortSpec: 'Commercially pure wrought nickel with supreme resistance to caustic alkalies and anhydrous ammonia.',
        fullDescription: 'High-purity wrought nickel providing excellent mechanical properties and exceptional resistance to caustic soda at all concentrations and temperatures up to molten caustic.',
        properties: { tensile: '380 to 450 MPa', yield: '100 to 150 MPa', elongation: '40% min', hardness: '140 HBW max' },
        chemistry: { Ni: '99.0% min', Cu: '0.25% max', Fe: '0.40% max', Mn: '0.35% max', C: '0.15% max' },
        standards: ['ASTM B160 / B161 / B564'],
        applications: ['Caustic soda evaporators', 'Synthetic fiber manufacturing', 'Chlor-alkali plants'],
      },
      {
        id: 'hastelloy-c276',
        pillLabel: 'Hastelloy C-276',
        designation: 'Hastelloy C-276 (UNS N10276 / Alloy C276)',
        unsNumber: 'UNS N10276',
        shortSpec: 'Nickel-molybdenum-chromium alloy with tungsten resisting wet chlorine and severe mineral acids.',
        fullDescription: 'One of the most versatile corrosion-resistant superalloys known. Resists wet chlorine gas, hypochlorite, sulfur dioxide, and severe mineral acids (hydrochloric, sulfuric, phosphoric) across broad temperature ranges.',
        properties: { tensile: '690 MPa min', yield: '283 MPa min', elongation: '40% min', hardness: '100 HRB max' },
        chemistry: { Ni: 'Balance', Mo: '15.0 - 17.0%', Cr: '14.5 - 16.5%', Fe: '4.0 - 7.0%', W: '3.0 - 4.5%', Co: '2.5% max' },
        standards: ['ASTM B574 / B575 / B564'],
        applications: ['Flue gas desulfurization systems', 'Pharmaceutical reactor vessels', 'Waste incineration scrubbers'],
      },
      {
        id: 'alloy-20',
        pillLabel: 'Alloy 20',
        designation: 'Alloy 20 (UNS N08020 / Carpenter 20)',
        unsNumber: 'UNS N08020',
        shortSpec: 'Nickel-iron-chromium austenitic alloy engineered specifically for boiling sulfuric acid service.',
        fullDescription: 'Contains copper and molybdenum to resist general corrosion, pitting, and crevice attack in boiling sulfuric acid solutions up to 40% concentration.',
        properties: { tensile: '550 MPa min', yield: '240 MPa min', elongation: '30% min', hardness: '95 HRB max' },
        chemistry: { Ni: '32.0 - 38.0%', Cr: '19.0 - 21.0%', Fe: 'Balance', Mo: '2.0 - 3.0%', Cu: '3.0 - 4.0%', Nb: '8xC to 1.0%' },
        standards: ['ASTM B462 / B464 / B729'],
        applications: ['Sulfuric acid pickling tanks', 'Synthetic rubber manufacturing', 'Chemical mixing equipment'],
      },
    ];
  }

  if (materialId === 'monel') {
    return [
      {
        id: 'monel-400',
        pillLabel: 'Monel 400',
        designation: 'Monel 400 (UNS N04400 / Alloy 400)',
        unsNumber: 'UNS N04400',
        shortSpec: 'Solid-solution 67Ni-30Cu alloy with extraordinary resistance to seawater and hydrofluoric acid.',
        fullDescription: 'Exhibits exceptional toughness across cryogenic to 550°C temperatures. Uniquely resistant to flowing seawater, non-oxidizing acids, and anhydrous hydrofluoric acid.',
        properties: { tensile: '480 to 550 MPa', yield: '170 to 240 MPa', elongation: '35% min', hardness: '150 HBW max' },
        chemistry: { Ni: '63.0% min', Cu: '28.0 - 34.0%', Fe: '2.5% max', Mn: '2.0% max', C: '0.3% max' },
        standards: ['ASTM B164 / B165 / B564'],
        applications: ['Marine propeller shafts & piping', 'Hydrofluoric acid alkylation units', 'Offshore splash zone sheathing'],
      },
      {
        id: 'monel-k500',
        pillLabel: 'Monel K-500',
        designation: 'Monel K-500 (UNS N05500 / Alloy K500)',
        unsNumber: 'UNS N05500',
        shortSpec: 'Age-hardened high-strength nickel-copper alloy with double the yield strength of Monel 400.',
        fullDescription: 'Retains the corrosion resistance of Monel 400 while incorporating aluminum and titanium for precipitation age-hardening, achieving more than double the yield strength.',
        properties: { tensile: '965 MPa min', yield: '690 MPa min', elongation: '20% min', hardness: '280 to 350 HBW' },
        chemistry: { Ni: '63.0% min', Cu: '27.0 - 33.0%', Al: '2.3 - 3.15%', Ti: '0.35 - 0.85%', Fe: '2.0% max' },
        standards: ['ASTM B865 / QQ-N-286 / NACE MR0175'],
        applications: ['Marine pump shafts & impellers', 'Oil well drill collars', 'Subsea valve trim & bolting'],
      },
    ];
  }

  if (materialId === 'inconel') {
    return [
      {
        id: 'inconel-600',
        pillLabel: 'Inconel 600',
        designation: 'Inconel 600 (UNS N06600 / Alloy 600)',
        unsNumber: 'UNS N06600',
        shortSpec: 'Nickel-chromium alloy for high-temperature oxidation and carburization resistance up to 1093°C.',
        fullDescription: 'Standard engineering material for applications requiring high heat resistance combined with corrosion resistance. High nickel content imparts virtually complete resistance to chloride stress corrosion cracking.',
        properties: { tensile: '550 MPa min', yield: '240 MPa min', elongation: '30% min', hardness: '180 HBW max' },
        chemistry: { Ni: '72.0% min', Cr: '14.0 - 17.0%', Fe: '6.0 - 10.0%', Mn: '1.0% max', C: '0.15% max' },
        standards: ['ASTM B166 / B167 / B564'],
        applications: ['Furnace retorts & muffles', 'Nuclear reactor steam generator tubing', 'Chemical thermal processing'],
      },
      {
        id: 'inconel-625',
        pillLabel: 'Inconel 625',
        designation: 'Inconel 625 (UNS N06625 / Alloy 625)',
        unsNumber: 'UNS N06625',
        shortSpec: 'Molybdenum and niobium-strengthened nickel alloy for extreme marine and aerospace service.',
        fullDescription: 'Matrix-stiffened with molybdenum (8–10%) and niobium (3.15–4.15%) to deliver exceptional fatigue strength and near-total immunity to pitting and crevice corrosion in harsh marine environments.',
        properties: { tensile: '827 MPa min', yield: '414 MPa min', elongation: '30% min', hardness: '220 HBW max' },
        chemistry: { Ni: '58.0% min', Cr: '20.0 - 23.0%', Mo: '8.0 - 10.0%', Nb: '3.15 - 4.15%', Fe: '5.0% max' },
        standards: ['ASTM B446 / B444 / B564', 'NACE MR0175'],
        applications: ['Offshore flare tips & piping', 'Subsea mooring hardware', 'Aerospace exhaust systems'],
      },
      {
        id: 'inconel-718',
        pillLabel: 'Inconel 718',
        designation: 'Inconel 718 (UNS N07718 / Alloy 718)',
        unsNumber: 'UNS N07718',
        shortSpec: 'Precipitation-hardenable superalloy with high creep rupture strength up to 700°C.',
        fullDescription: 'Combines corrosion resistance with extremely high tensile, yield, and creep-rupture properties. Commonly specified for high-strength pressure bolting and gas turbine disks.',
        properties: { tensile: '1240 MPa min', yield: '1035 MPa min', elongation: '12% min', hardness: '360 HBW min' },
        chemistry: { Ni: '50.0 - 55.0%', Cr: '17.0 - 21.0%', Mo: '2.8 - 3.3%', Nb: '4.75 - 5.5%', Ti: '0.65 - 1.15%' },
        standards: ['ASTM B637 / AMS 5662 / NACE MR0175'],
        applications: ['Gas turbine rotor discs', 'Downhole oilfield tools', 'High-strength industrial fasteners'],
      },
    ];
  }

  if (materialId === 'copper') {
    return [
      {
        id: 'cu-ni-90-10',
        pillLabel: 'Cu-Ni 90/10',
        designation: 'Cupro-Nickel 90/10 (UNS C70600)',
        unsNumber: 'UNS C70600',
        shortSpec: 'Copper-nickel-iron alloy with supreme resistance to seawater biofouling and erosion-corrosion.',
        fullDescription: 'Contains 10% nickel, 1.4% iron, and 1% manganese. Premier alloy for marine seawater cooling lines and offshore desalination plants due to its natural anti-macrofouling characteristics.',
        properties: { tensile: '275 to 380 MPa', yield: '105 to 150 MPa', elongation: '30% min' },
        chemistry: { Cu: 'Balance', Ni: '9.0 - 11.0%', Fe: '1.0 - 1.8%', Mn: '1.0% max', Pb: '0.02% max' },
        standards: ['ASTM B111 / B466 / EEMUA 144'],
        applications: ['Seawater cooling circuits', 'Shipbuilding hull piping', 'Desalination plant heat exchangers'],
      },
      {
        id: 'cu-ni-70-30',
        pillLabel: 'Cu-Ni 70/30',
        designation: 'Cupro-Nickel 70/30 (UNS C71500)',
        unsNumber: 'UNS C71500',
        shortSpec: 'Higher-strength copper-nickel alloy for high-velocity marine and offshore environments.',
        fullDescription: 'With 30% nickel content, UNS C71500 permits higher seawater flow velocities (up to 4.5 m/s) with outstanding resistance to impingement attack and stress corrosion cracking in naval vessels.',
        properties: { tensile: '360 to 450 MPa', yield: '125 to 180 MPa', elongation: '30% min' },
        chemistry: { Cu: 'Balance', Ni: '29.0 - 33.0%', Fe: '0.4 - 1.0%', Mn: '1.0% max', Pb: '0.02% max' },
        standards: ['ASTM B111 / B466'],
        applications: ['Naval combatant seawater piping', 'Feedwater heaters', 'Condenser tubes'],
      },
      {
        id: 'c11000-etp',
        pillLabel: 'Pure Copper (C11000)',
        designation: 'Electrolytic Tough Pitch Copper (UNS C11000 / C10200)',
        unsNumber: 'UNS C11000',
        shortSpec: 'Minimum 99.90% pure copper delivering 100% IACS electrical and maximum thermal conductivity.',
        fullDescription: 'Delivers maximum thermal and electrical conductivity. Widely specified for electrical switchgear, busbars, refrigeration tubing, and earthing distribution systems.',
        properties: { tensile: '220 to 380 MPa', yield: '69 to 310 MPa', elongation: '25% min', conductivity: '100% IACS' },
        chemistry: { Cu: '99.90% min', O: '0.04% max', Ag: '—', P: '—' },
        standards: ['ASTM B187 / B75 / B152'],
        applications: ['Electrical switchgear busbars', 'HVAC heat exchanger tubes', 'Earthing and lightning protection'],
      },
    ];
  }

  if (materialId === 'titanium') {
    return [
      {
        id: 'titanium-grade-2',
        pillLabel: 'Grade 2',
        designation: 'Titanium Grade 2 (UNS R50400)',
        unsNumber: 'UNS R50400',
        shortSpec: 'Commercially pure titanium offering the ideal balance of moderate strength and exceptional corrosion passivity.',
        fullDescription: 'The workhorse of industrial titanium. Completely immune to ambient seawater corrosion, wet chlorine, chlorites, hypochlorites, and nitric acid across industrial processing circuits.',
        properties: { tensile: '345 MPa min', yield: '275 MPa min', elongation: '20% min', hardness: '200 HBW max' },
        chemistry: { Ti: 'Balance', Fe: '0.30% max', O: '0.25% max', C: '0.08% max', N: '0.03% max', H: '0.015% max' },
        standards: ['ASTM B348 / B381 / B363 / B861'],
        applications: ['Chemical bleaching towers', 'Desalination plant piping', 'Offshore seawater cooling systems'],
      },
      {
        id: 'titanium-grade-5',
        pillLabel: 'Grade 5 (Ti-6Al-4V)',
        designation: 'Titanium Grade 5 (Ti-6Al-4V / UNS R56400)',
        unsNumber: 'UNS R56400',
        shortSpec: 'High-strength alpha-beta titanium alloy for aerospace and high-pressure subsea exploration.',
        fullDescription: 'Contains 6% aluminum and 4% vanadium, achieving more than double the tensile strength of Grade 2 with excellent fatigue strength and fracture toughness.',
        properties: { tensile: '895 MPa min', yield: '828 MPa min', elongation: '10% min', hardness: '36 HRC max' },
        chemistry: { Ti: 'Balance', Al: '5.5 - 6.75%', V: '3.5 - 4.5%', Fe: '0.40% max', O: '0.20% max' },
        standards: ['ASTM B348 Gr 5 / ASTM B381 / AMS 4928'],
        applications: ['Aerospace structural components', 'Deepwater subsea valves & bolting', 'High-performance marine shafts'],
      },
    ];
  }

  return [];
}

/**
 * Helper to resolve a material object by id, slug, or alias
 */
export function getMaterial(materialId) {
  if (!materialId) return null;
  const clean = String(materialId).toLowerCase().trim();

  return (
    materials.find(
      (m) =>
        m.id === clean ||
        m.slug === clean ||
        (m.aliases && m.aliases.includes(clean)) ||
        (clean === 'nickel-alloys' && m.id === 'nickel') ||
        (clean === 'nickel' && m.id === 'nickel') ||
        (clean === 'duplex' && m.id === 'duplex-steel') ||
        (clean === 'duplex-super-duplex' && m.id === 'duplex-steel')
    ) || null
  );
}

/**
 * Returns specific technical description for a given product + material combination
 */
export function getProductMaterialInfo(productId, materialId) {
  const product = products.find((p) => p.id === productId);
  const material = getMaterial(materialId);

  if (!product || !material) return null;

  const grades = getProductMaterialGrades(productId, material.id);

  return {
    productId,
    materialId: material.id,
    productName: product.name,
    materialName: material.name,
    badge: material.badge,
    families: material.families,
    title: `${material.name} ${product.name}`,
    shortDesc: `${material.shortDesc} Precision-manufactured to ASME, ASTM, and DIN standards with 100% material test certificate traceability.`,
    fullDesc: `${product.name} manufactured in ${material.name} represent an optimal engineering solution for industrial systems requiring high structural integrity and dependable service. At Suraj Pipe And Fitting, each component is manufactured and stocked to rigorous dimensional tolerances (ASME, ASTM, DIN, EN) and 100% verified with authentic EN 10204 3.1 Mill Test Certificates.`,
    sizeRange: product.sizeRange,
    pressureRatings: product.pressureRatings,
    standards: product.standards,
    hasTypes: product.hasTypes,
    types: product.hasTypes ? product.types : [],
    grades,
  };
}

/**
 * Returns products that genuinely belong to the selected material
 */
export function getProductsForMaterial(materialId) {
  const material = getMaterial(materialId);
  if (!material) return [];

  return products.map((product) => {
    const info = getProductMaterialInfo(product.id, material.id);
    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      materialId: material.id,
      materialName: material.name,
      title: `${material.name} ${product.name}`,
      shortDesc: info?.shortDesc || product.shortDesc,
      sizeRange: product.sizeRange,
      pressureRatings: product.pressureRatings,
      standards: product.standards,
      hasTypes: product.hasTypes,
    };
  });
}
