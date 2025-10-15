
  /* Typewriter animation */
  const typewriterElement = document.querySelector('.typewriter');
  const phrases = [
    "embellecer tu evento.",
    "dar ese regalo especial.",
    "impulsar tu emprendimiento.",
    "dar tu toque especial a los productos.",
    "preparar el inicio de clases."
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pauseBetween = 1500;

  function createCursor() {
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.classList.add('typewriter-cursor');
    return cursor;
  }

  function type() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, letterIndex);

    // Limpiar el contenido antes de volver a insertar texto + cursor
    typewriterElement.innerHTML = '';
    typewriterElement.textContent = currentText;
    typewriterElement.appendChild(createCursor());

    if (!isDeleting && letterIndex === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseBetween);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, isDeleting ? 50 : typingSpeed);
      letterIndex += isDeleting ? -1 : 1;
    }
  }

  document.addEventListener('DOMContentLoaded', type);

  
  /*Navigation footer animations*/ 
  document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces del footer
    const navLinks = document.querySelectorAll('footer nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Quita la clase "text-primary" y vuelve a aplicar "text-slate-500" a todos los enlaces
        navLinks.forEach(l => {
          l.classList.remove('text-primary');
          l.classList.add('text-slate-500');
        });
      
        // Agrega "text-primary" al enlace clickeado
        link.classList.remove('text-slate-500');
        link.classList.add('text-primary');
      });
    });
  });
