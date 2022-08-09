const input = document.getElementById('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

// Debounce
const debounce = (cb, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
},500);
// Throttle

// Invocation
input.addEventListener('input', (e) => {
  // Noraml
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
});
