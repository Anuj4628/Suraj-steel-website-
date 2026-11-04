/**
 * SURAJ PIPE AND FITTING — SEO DESCRIPTIVE SLUG UTILITIES
 * Generates and parses high-ranking B2B industrial SEO URLs following the Kptron reference.
 * 
 * Examples:
 * - Product + Material: /products/flanges/stainless-steel-flanges-manufactured-in-mumbai
 * - Product + Material + Grade: /products/pipes-tubes/stainless-steel-pipes-tubes-stocked-in-mumbai/stainless-steel-304-pipes-tubes-stocked-in-mumbai
 * - Backward compatibility: short slugs (/products/flanges/stainless-steel) continue to work seamlessly.
 */

import { materials, products } from './productCatalog';

// Manufacturer Division: In-house precision forging & machining
const MANUFACTURER_PRODUCTS = new Set([
  'forge-fittings',
  'flanges',
  'buttweld-fittings',
  'fasteners',
]);

/**
 * Returns whether a product is manufactured or stocked in Mumbai
 */
export function isManufacturerProduct(productId) {
  return MANUFACTURER_PRODUCTS.has(productId);
}

/**
 * Get division suffix for SEO URL
 */
export function getDivisionSuffix(productId) {
  return isManufacturerProduct(productId) ? 'manufactured-in-mumbai' : 'stocked-in-mumbai';
}

/**
 * Generate SEO-friendly descriptive slug for Product + Material
 * e.g. "stainless-steel-flanges-manufactured-in-mumbai"
 */
export function getProductMaterialSlug(productId, materialId) {
  const suffix = getDivisionSuffix(productId);
  return `${materialId}-${productId}-${suffix}`;
}

/**
 * Generate full SEO path for Product + Material
 */
export function getProductMaterialPath(productId, materialId) {
  const slug = getProductMaterialSlug(productId, materialId);
  return `/products/${productId}/${slug}`;
}

/**
 * Generate SEO-friendly descriptive slug for Grade
 * e.g. "stainless-steel-304-flanges-manufactured-in-mumbai"
 */
export function getGradeSlug(productId, materialId, gradeId) {
  const suffix = getDivisionSuffix(productId);
  return `${materialId}-${gradeId}-${productId}-${suffix}`;
}

/**
 * Generate full SEO path for Grade Detail
 */
export function getGradeDetailPath(productId, materialId, gradeId) {
  const materialSlug = getProductMaterialSlug(productId, materialId);
  const gradeSlug = getGradeSlug(productId, materialId, gradeId);
  return `/products/${productId}/${materialSlug}/${gradeSlug}`;
}

/**
 * Extract clean materialId from either short slug or long SEO slug
 */
export function extractMaterialId(slug) {
  if (!slug) return '';
  // Check exact match first
  const exact = materials.find((m) => m.id === slug);
  if (exact) return exact.id;

  // Check prefix match (sorted by length descending so "duplex-steel" is matched correctly)
  const sortedMaterials = [...materials].sort((a, b) => b.id.length - a.id.length);
  for (const m of sortedMaterials) {
    if (slug.startsWith(m.id)) {
      return m.id;
    }
  }

  return slug;
}

/**
 * Extract clean gradeId from either short gradeId or long SEO gradeSlug
 */
export function extractGradeId(slug, availableGrades = []) {
  if (!slug) return '';
  
  // Exact match
  const exact = availableGrades.find((g) => g.id.toLowerCase() === slug.toLowerCase());
  if (exact) return exact.id;

  // Search by available grade IDs in this context (longest first)
  const sortedGrades = [...availableGrades].sort((a, b) => b.id.length - a.id.length);
  for (const g of sortedGrades) {
    // If slug contains grade ID surrounded by hyphens or at boundary
    const regex = new RegExp(`(^|-)${g.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(-|$)`, 'i');
    if (regex.test(slug)) {
      return g.id;
    }
  }

  // Fallback: return slug directly
  return slug;
}

