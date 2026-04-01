/**
 * Node.js CLI Calculator App
 * Supports the following operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - square root
 */

/**
 * Performs addition of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division of two numbers
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The quotient of a divided by b
 * @throws {Error} If b is zero (division by zero)
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Performs modulo operation (remainder after division)
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The remainder of a divided by b
 * @throws {Error} If b is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Raises a number to the power of an exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} base raised to the power of exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Usage: node calculator.js <operation> <num1> [num2]');
    console.log('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
    process.exit(1);
  }

  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = args[2] !== undefined ? parseFloat(args[2]) : undefined;

  try {
    let result;
    switch (operation) {
      case 'add':
        result = add(num1, num2);
        break;
      case 'subtract':
        result = subtract(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        result = divide(num1, num2);
        break;
      case 'modulo':
        result = modulo(num1, num2);
        break;
      case 'power':
        result = power(num1, num2);
        break;
      case 'sqrt':
        result = squareRoot(num1);
        break;
      default:
        console.error(`Unknown operation: ${operation}`);
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
