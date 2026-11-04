/**
 * SURAJ PIPING — NAVIGATION CONFIGURATION
 * Single source of truth for desktop and mobile navigation routes.
 */

export const productDropdownLinks = [
  { id: 'forge-fittings', label: 'Forge Fittings', path: '/products/forge-fittings' },
  { id: 'flanges', label: 'Flanges', path: '/products/flanges' },
  { id: 'buttweld-fittings', label: 'Buttweld Fittings', path: '/products/buttweld-fittings' },
  { id: 'fasteners', label: 'Fasteners', path: '/products/fasteners' },
  { id: 'pipes-tubes', label: 'Pipes & Tubes', path: '/products/pipes-tubes' },
  { id: 'sheets-plates', label: 'Sheets & Plates', path: '/products/sheets-plates' },
  { id: 'rods-bars', label: 'Rods & Bars', path: '/products/rods-bars' },
];

export const materialDropdownLinks = [
  { id: 'stainless-steel', label: 'Stainless Steel', path: '/materials/stainless-steel' },
  { id: 'carbon-steel', label: 'Carbon Steel', path: '/materials/carbon-steel' },
  { id: 'alloy-steel', label: 'Alloy Steel', path: '/materials/alloy-steel' },
  { id: 'duplex-steel', label: 'Duplex & Super Duplex', path: '/materials/duplex-steel' },
  { id: 'monel', label: 'Monel', path: '/materials/monel' },
  { id: 'nickel', label: 'Nickel', path: '/materials/nickel' },
  { id: 'inconel', label: 'Inconel', path: '/materials/inconel' },
  { id: 'copper', label: 'Copper', path: '/materials/copper' },
  { id: 'titanium', label: 'Titanium', path: '/materials/titanium' },
];

export const navLinks = [
  {
    id: 'home',
    label: 'HOME',
    path: '/',
    exact: true,
  },
  {
    id: 'about',
    label: 'ABOUT US',
    path: '/about',
  },
  {
    id: 'products',
    label: 'PRODUCTS',
    path: '/products',
    hasDropdown: true,
    dropdownItems: productDropdownLinks,
  },
  {
    id: 'materials',
    label: 'MATERIALS',
    path: '/materials',
    hasDropdown: true,
    dropdownItems: materialDropdownLinks,
  },
  {
    id: 'certificates',
    label: 'CERTIFICATES',
    path: '/certificates',
  },
  {
    id: 'contact',
    label: 'CONTACT',
    path: '/contact',
  },
];

export const navCta = {
  id: 'get-quote',
  label: 'GET QUOTE',
  path: '/contact?inquiry=quote',
};

export const companyContactQuickInfo = {
  phone: '+91 70451 73574',
  secondaryPhone: '+91 79840 97489',
  email: 'surajpipefitting21@gmail.com',
  contactPerson: 'Suraj Goswami',
  location: 'Shop No. 6, Khetwadi, Mumbai - 400004',
};
