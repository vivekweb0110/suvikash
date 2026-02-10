// Simple interactivity: mobile menu, year, smooth scroll, basic form handling
document.addEventListener('DOMContentLoaded',function(){
  const menuToggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('main-nav');
  if(menuToggle){
    menuToggle.addEventListener('click',()=>{
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display==='block'){nav.style.display='none'}else{nav.style.display='block'}
    });
  }

  // Close menu on link click (mobile)
  document.querySelectorAll('#main-nav a').forEach(a=>{
    a.addEventListener('click',()=>{
      if(window.innerWidth<=700 && nav){nav.style.display='none'; menuToggle.setAttribute('aria-expanded','false');}
    })
  })

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'});}    
    })
  });

  // Set current year
  const yearEl=document.getElementById('year'); if(yearEl) yearEl.textContent=new Date().getFullYear();

  // Basic contact form handling (client-side only)
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const status=document.getElementById('formStatus');
      // Simple validation
      const name=form.name.value.trim();
      const email=form.email.value.trim();
      const message=form.message.value.trim();
      if(!name||!email||!message){ status.textContent='Please complete all fields.'; status.style.color='crimson'; return }
      status.textContent='Thanks — message sent (demo).'; status.style.color='green';
      form.reset();
    })
  }
});
