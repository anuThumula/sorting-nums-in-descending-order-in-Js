const numbers = [5, 1, 9, 3, 7];

// Sorting in descending order
numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers); // Output: [9, 7, 5, 3, 1]