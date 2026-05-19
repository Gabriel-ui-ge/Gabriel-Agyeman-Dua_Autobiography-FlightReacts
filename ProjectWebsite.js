document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    const textElement = document.getElementById('myText');
  
    // Fade in the text element as soon as the page loads
    if (textElement) {
      textElement.classList.add('visible'); 
    }
  
    const revealOnScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        // Reveal when the top of the section is within 100px of the bottom of the screen
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    // Run once on load to catch elements already in view
    revealOnScroll();
  });
  
