import assert from 'node:assert/strict';
import test from 'node:test';
import { checkEligibility } from './checkEligibility.js';

test('basic eligibility estimate handles missing, below-threshold, and possible-match inputs', () => {
  assert.ok(checkEligibility('', '').error);
  assert.equal(checkEligibility('17', '10000').eligible, false);
  assert.equal(checkEligibility('27', '45000').eligible, true);
});
