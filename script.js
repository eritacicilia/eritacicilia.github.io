
document.addEventListener('DOMContentLoaded', function(){
  // Reveal elements on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
      }
    });
  }, {threshold: 0.15});

  document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));

  // Slight stagger for project cards
  const cards = document.querySelectorAll('.projects-grid .card');
  cards.forEach((c,i)=>{
    c.style.transitionDelay = (i*80) + 'ms';
    observer.observe(c);
  });
});
