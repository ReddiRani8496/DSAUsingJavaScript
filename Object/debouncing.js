/**
 * Debounce function
 * @param {Function} func - The function you want to execute after the delay.
 * @param {number} delay - The time to wait (in milliseconds) before executing the function.
 * @returns {Function} - A debounced version of the original function.
 */
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // 1. Clear the existing timer if the function is called again before the delay finishes
    clearTimeout(timeoutId);

    // 2. Set a new timer
    timeoutId = setTimeout(() => {
      // 3. Execute the function with the correct context (this) and arguments
      func.apply(this, args);
    }, delay);
  };
}
