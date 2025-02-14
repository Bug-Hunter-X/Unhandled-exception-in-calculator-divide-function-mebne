# Unhandled Exception in Calculator

This repository demonstrates an unhandled exception in a simple JavaScript calculator application. The `divide` function throws an error when attempting to divide by zero, causing the application to crash.  The solution demonstrates how to gracefully handle this scenario.

## Bug

The `calculator.js` file contains a `divide` function that lacks proper error handling. When the divisor is zero, an error is thrown but not caught, leading to application termination.

## Solution

The `calculatorSolution.js` file addresses this issue by introducing a `try...catch` block to handle the potential `Error`.  This ensures that the application doesn't crash and provides more user-friendly feedback.

## How to Reproduce

1. Clone the repository.
2. Run `node calculator.js` and try `calculator.divide(10, 0)`.
3. Observe the unhandled exception error.
4. Run `node calculatorSolution.js` and try `calculatorSolution.divide(10, 0)`. Note the graceful error handling.
