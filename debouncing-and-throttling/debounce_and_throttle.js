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
}, 500);
// Throttle
const throttle = (cb, delay = 1000) => {
  let shouldWait = false; /**By default you shouldn't wait, you're just here..! */
  let waitingArgs = null;

  /**We put this into a function to make possible to reset the waiting timer */
  const timeoutFunc = () => {
    /**If there is no waiting arguments 'User didn't type anything during the delay */
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null; /**Reset waiting arguments */
      setTimeout(timeoutFunc, delay); /**Reset the timeout timer */
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    // Immediatelly call that function
    cb(...args);
    shouldWait = true;

    // Then wait a 'delay' period to call it again
    setTimeout(timeoutFunc, delay);
  };
};

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
});
// Invocation
input.addEventListener('input', (e) => {
  // Noraml
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});
