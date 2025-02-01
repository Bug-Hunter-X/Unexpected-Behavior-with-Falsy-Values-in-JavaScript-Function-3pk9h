function foo(a, b) {
  // Handle null and other falsy values explicitly
  a = a === null || a === undefined ? 0 : a; 
  b = b === null || b === undefined ? 0 : b; 
  // Add validation or type checking here as needed to handle unexpected input types.

  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Arguments must be numbers";
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(0, 5)); // Output: 5
console.log(foo(5, 0)); // Output: 5
console.log(foo('',5)); // Output: Invalid input: Arguments must be numbers
console.log(foo(false,5)); //Output: Invalid input: Arguments must be numbers