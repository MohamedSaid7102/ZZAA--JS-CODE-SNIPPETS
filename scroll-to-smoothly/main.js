//////////////////////// Utility Functions Start //////////////////////

/** Detect if user agent is IE or not **/
function detectIE() {
  try {
    let isIE = /*@cc_on!@*/ false || !!document.documentMode;

    if (!isIE)
      if (navigator.userAgent.indexOf('MSIE') > 0)
        // Fallback to UserAgent detection for IE
        return true;
      else return false;

    return true;
  } catch (e) {
    let error = e.toString();

    console.log(error);
  }
}


/**
 *
 * @param {DOM Element} element, on click this element
 * @param {DOM Element} section , scroll to this section
 */
function smoothScrollOn(element, section) {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const sectionCoords = section.getBoundingClientRect();

    // IE fallback
    if (detectIE())
      window.scrollTo(
        sectionCoords.left + window.scrollX,
        sectionCoords.top + window.scrollY
      );

    // Very modern browsers
    section.scrollIntoView({ behavior: 'smooth' });
  });
}
//////////////////////// Utility Functions End //////////////////////

// const btn = getButtonYouWant
// const targetedSection = getSectionYouWant
smoothScrollOn(btn, targetedSection);

// ******************************** //
/* ********** Some facts ********** */
// ******************************** //

window.addEventListener('scroll', () => {
  // scrollY: The distance between your very top viewport and your current position after scrolling Virtiacally.
  // scrollX: The distance between your very left viewport and your current position after scrolling Horizontally.
  console.log(`X: ${window.scrollX}, Y: ${window.scrollY}`);
});

window.addEventListener('resize', () => {
  console.log(
    `X: ${document.documentElement.clientWidth}, Y: ${document.documentElement.clientHeight}`
  );
});

btn.addEventListener('click', () => {
  console.log(btn.getBoundingClientRect());
  /**
   * Prints info about this item box
   * 
      ​{
        bottom: 1889.61669921875,
        
        height: 1405.61669921875,
        ​
        left: 0,
        ​
        right: 1151.3333740234375,
        ​
        top: 484,
        ​
        width: 1151.3333740234375,
        ​
        x: 0,
        ​
        y: 484,
      }
   */
});
