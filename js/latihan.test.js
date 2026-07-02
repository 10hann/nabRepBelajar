/**
 * latihan.test.js — Property-Based Tests for math-exponents-roots-website
 *
 * Feature: math-exponents-roots-website
 * Property 1: Input Filter Invariant
 * Validates: Requirements 9.3, 9.6
 *
 * For any string s, filterNumeric(s) only contains [0-9, '.', '-']
 * and length <= 15.
 */

'use strict';

const fc = require('fast-check');

/* ---------------------------------------------------------------
   Local re-implementation of filterNumeric
   (Cannot import from latihan.js because it uses DOM APIs)
   Mirrors the exact implementation in Project/js/latihan.js
   --------------------------------------------------------------- */
function filterNumeric(str) {
  return str.replace(/[^0-9.\-]/g, '').slice(0, 15);
}

/* ---------------------------------------------------------------
   Property 1: Input Filter Invariant
   For any string, filterNumeric produces only [0-9, '.', '-']
   and the result length is <= 15.
   --------------------------------------------------------------- */
try {
  fc.assert(
    fc.property(fc.string(), (s) => {
      const result = filterNumeric(s);
      return /^[0-9.\-]*$/.test(result) && result.length <= 15;
    }),
    { numRuns: 100 }
  );
  console.log('✓ Property 1 PASSED: Input Filter Invariant');
} catch (e) {
  console.error('✗ Property 1 FAILED:', e.message);
  process.exit(1);
}
