const textElements = document.querySelectorAll('.u, .i, .A, .R, .h, .O, .P, .E, .Once, .more, .author, .text1, .text2, .text3, .text4,.text5,.text6,.text7,.text8,.text9, .text10, .text11,.text12,.text13,.text14, .text15, .text16, .text17, .text18, .OnceMore, .OnceMore2, .OnceMore3, .OnceMore4, .quote1, .quote2, .quote3, .quote4, .Blurred1, .Blurred2, .E1, .E2, .box4, .rectangle7, .rectangle8, .Beneficial ');
        // Add mouseenter event to start the "runaway" effect

        function moveAwayFromCursor(event, element) {
            const elementRect = element.getBoundingClientRect();
            const offsetX = event.clientX - elementRect.left - elementRect.width / 2; // X distance from center of element
            const offsetY = event.clientY - elementRect.top - elementRect.height / 2; // Y distance from center of element
          
            // Calculate the distance from the cursor to the element center
            const distanceFromCursor = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            
            // Set a dynamic multiplier to move even further away based on cursor distance
            const moveMultiplier = distanceFromCursor / 2; // Divide by 2 to make the effect more intense
            
            const angle = Math.atan2(offsetY, offsetX); // Angle between the element center and the cursor
          
            // Calculate movement based on the angle and dynamic multiplier
            const moveX = Math.cos(angle) * moveMultiplier;
            const moveY = Math.sin(angle) * moveMultiplier;
          
            // Apply the transformation to move the text further away dynamically
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
          
          // Add mouseenter event to start the "runaway" effect
          textElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
              element.style.transition = 'transform 0.3s ease-out'; // Smooth transition with quicker easing
            });
            
            // Add mousemove event to move the text dynamically
            element.addEventListener('mousemove', (event) => {
              moveAwayFromCursor(event, element);
            });
            
            // Add mouseleave event to reset the position
            element.addEventListener('mouseleave', () => {
              element.style.transition = 'transform 0.3s ease-out'; // Smooth transition
              element.style.transform = 'translate(0, 0)'; // Reset to original position
            });
          });
          
          
       // Create an Intersection Observer to detect when text enters the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed'); // Add the fade-in effect
            entry.target.classList.remove('hidden'); // Ensure visibility
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Select all elements that need to be revealed
const hiddenTextElements = document.querySelectorAll('.u, .i, .A, .R, .h, .O, .P, .E, .Once, .more, .author, .text1, .text2, .text3, .text4,.text5,.text6,.text7,.text8,.text9, .text10, .text11,.text12,.text13,.text14, .text15, .text16, .text17, .text18, .OnceMore, .OnceMore2, .OnceMore3, .OnceMore4, .quote1, .quote2, .quote3, .quote4, .Blurred1, .Blurred2, .E1, .E2, .box4, .rectangle7, .rectangle8, .line, .line2, .line3, .line4 ');

// Ensure all elements start hidden
hiddenTextElements.forEach(element => {
    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden'); // Apply initial hidden state
    }
    observer.observe(element);
});


  

  
  