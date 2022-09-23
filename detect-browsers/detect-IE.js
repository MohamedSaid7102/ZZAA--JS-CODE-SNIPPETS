// function to detect if current user agent is IE or not, I used /*@acc_on!@*/ because navigator.userAgent is not reliable all the time.
// src: https://www.scratchcode.io/how-to-detect-ie-browser-in-javascript/
function detectIE() {
  try {
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;

    if (!isIE) {
      // Fallback to UserAgent detection for IE
      if (navigator.userAgent.indexOf('MSIE') > 0) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  } catch (e) {
    const error = e.toString();

    console.log(error);
  }
}

// Usage

if (detectIE()) {
  // Yes, IE browser Detected
} else {
  // No, IE browser not Detected
}
