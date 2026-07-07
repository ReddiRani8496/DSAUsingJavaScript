/**
 * Debounce function
 * @param {Function} func - The function you want to execute after the delay.
 * @param {number} delay - The time to wait (in milliseconds) before executing the function.
 * @returns {Function} - A debounced version of the original function.
 */
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
