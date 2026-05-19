document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    const textElement = document.getElementById('myText');
  
    if (textElement) {
      textElement.classList.add('visible'); 
    }
  
    const revealOnScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  });
  
