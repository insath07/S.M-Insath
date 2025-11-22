// ================== MENU TOGGLE FOR MOBILE ==================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// ================== SCROLL REVEAL ANIMATION ==================
const revealElements = document.querySelectorAll('.section-title, .hero-content, .about, .skills-container, .projects-container, .contact-container, .resume-container');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active-reveal');
    }
  });
});

// ================== SKILLS PROGRESS BAR ANIMATION ==================
const skills = document.querySelectorAll('.skill-card .progress-bar span');

skills.forEach(skill => {
  skill.style.width = '0%';
});

window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      skills.forEach(skill => {
        const width = skill.getAttribute('style-width') || skill.getAttribute('data-width');
        skill.style.width = skill.dataset.width;
      });
    }
  }
});
