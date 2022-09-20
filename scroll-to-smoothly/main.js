// const btn = getButtonYouWant
// const targetedSection = getSectionYouWant

const sectionCoords = targetedSection.getBoundingClientRect();

btn.addEventListener('click', (e) => {
  e.preventDefault();

  // IE fallback
  window.scrollTo(
    sectionCoords.left + window.scrollX,
    sectionCoords.top + window.scrollY
  );

  // Browsers that support (left, top, behavior) parameters
  window.scrollTo({
    left: sectionCoords.left + window.scrollX,
    top: sectionCoords.top + window.scrollY,
    behavior: 'smooth',
  });

  // Very modern browsers
  targetedSection.scrollIntoView({ behavior: 'smooth' });
});

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
