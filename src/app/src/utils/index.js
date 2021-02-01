/*
 * Optimal logic to move through your array forward and backward
 */

const arr = ['a', 'b', 'c', 'd', 'e'];
let currentIndex = 0;

function moveForward(current, array) {
  return (current + 1) % array.length;
}

function moveBackward(current, array) {
  return (current - 1 + array.length) % array.length;
}