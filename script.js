document.addEventListener('DOMContentLoaded', function(){

  /* ================================
        1. FADE-IN ANIMATION (SECTION)
     ================================ */
  const sectionObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');  // class dari CSS
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.section').forEach(sec => {
    sectionObserver.observe(sec);
  });


  /* ================================
        2. REVEAL (EFEK LAMA YANG ADA)
     ================================ */
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.reveal').forEach(el=> revealObserver.observe(el));


  /* =========================================
        3. PROJECT CARD STAGGER (EFEK LAMA)
     ========================================= */
  const cards = document.querySelectorAll('.projects-grid .card');
  cards.forEach((c,i)=>{
    c.style.transitionDelay = (i*80) + 'ms';
    revealObserver.observe(c);
  });


  /* =========================================
        4. SMOOTH NAVIGATION (klik About → scroll halus)
     ========================================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});
