gsap.to("#about-text", {
    opacity: 1, 
    duration: 1, 
    scrollTrigger: {
      trigger: ".about-section", // Element to trigger animation
      start: "top 61%", // Animation starts when the element is 80% in view
      end: "10% 80%", // Animation ends when the element is at the center of the viewport
      markers: true, // For debugging - displays markers on the viewport
      scrub: 4, // Smooth scrubbing effect
    },
    scale: 2,
    // ease: "bounce", // Easing function for bounce effect
    repeat: 0
});



