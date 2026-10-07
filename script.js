const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '76px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '22px 20px';
    nav.style.background = 'var(--paper)';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.borderBottom = '1px solid var(--line)';
  }
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 850) nav.style.display = '';
  });
});
