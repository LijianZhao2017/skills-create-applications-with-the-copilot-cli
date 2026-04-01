/**
 * Unit tests for the Node.js CLI Calculator App
 * Tests cover:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - square root
 */

const assert = require('assert');
const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✅ ${description}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ ${description}`);
    console.error(`     ${err.message}`);
    failed++;
  }
}

// addition tests
console.log('\naddition tests:');
test('adds two positive numbers', () => assert.strictEqual(add(2, 3), 5));
test('adds a positive and negative number', () => assert.strictEqual(add(10, -3), 7));
test('adds two negative numbers', () => assert.strictEqual(add(-4, -6), -10));
test('adds zero to a number', () => assert.strictEqual(add(5, 0), 5));

// subtraction tests
console.log('\nsubtraction tests:');
test('subtracts two positive numbers', () => assert.strictEqual(subtract(10, 4), 6));
test('subtracts a larger number from a smaller one', () => assert.strictEqual(subtract(3, 7), -4));
test('subtracts zero from a number', () => assert.strictEqual(subtract(8, 0), 8));
test('subtracts negative number', () => assert.strictEqual(subtract(5, -2), 7));

// multiplication tests
console.log('\nmultiplication tests:');
test('multiplies two positive numbers', () => assert.strictEqual(multiply(3, 4), 12));
test('multiplies by zero', () => assert.strictEqual(multiply(5, 0), 0));
test('multiplies two negative numbers', () => assert.strictEqual(multiply(-3, -4), 12));
test('multiplies positive and negative', () => assert.strictEqual(multiply(-3, 4), -12));

// division tests
console.log('\ndivision tests:');
test('divides two positive numbers', () => assert.strictEqual(divide(10, 2), 5));
test('divides with decimal result', () => assert.strictEqual(divide(7, 2), 3.5));
test('divides negative numbers', () => assert.strictEqual(divide(-10, 2), -5));
test('throws on division by zero', () => {
  assert.throws(() => divide(5, 0), /Division by zero/);
});

// modulo tests
console.log('\nmodulo tests:');
test('calculates modulo of two numbers', () => assert.strictEqual(modulo(10, 3), 1));
test('calculates modulo resulting in zero', () => assert.strictEqual(modulo(9, 3), 0));
test('calculates modulo with larger divisor', () => assert.strictEqual(modulo(3, 10), 3));
test('throws on modulo by zero', () => {
  assert.throws(() => modulo(5, 0), /Modulo by zero/);
});

// power tests
console.log('\npower tests:');
test('raises number to positive power', () => assert.strictEqual(power(2, 10), 1024));
test('raises number to power of zero', () => assert.strictEqual(power(5, 0), 1));
test('raises number to power of one', () => assert.strictEqual(power(7, 1), 7));
test('raises number to negative power', () => assert.strictEqual(power(2, -2), 0.25));

// square root tests
console.log('\nsquare root tests:');
test('calculates square root of a perfect square', () => assert.strictEqual(squareRoot(25), 5));
test('calculates square root of 1', () => assert.strictEqual(squareRoot(1), 1));
test('calculates square root of 0', () => assert.strictEqual(squareRoot(0), 0));
test('calculates square root of a non-perfect square', () => {
  assert.ok(Math.abs(squareRoot(2) - 1.4142135623730951) < 1e-10);
});
test('throws on square root of negative number', () => {
  assert.throws(() => squareRoot(-1), /negative/);
});

// Summary
console.log(`\n${'='.repeat(40)}`);
console.log(`Tests: ${passed + failed} total, ${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exit(1);
}
