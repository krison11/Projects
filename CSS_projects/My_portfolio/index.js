window.onload = () => {
  const nav_ul = document.querySelector('.nav-links');
  const menu_btn = document.querySelector('.menu-btn');
  const x_btn = document.querySelector('.x-btn');
  const links = document.querySelectorAll('li');

  const show = () => {
    nav_ul.classList.toggle('show-links');
    menu_btn.style.display = 'none';
    x_btn.style.animation = 'rotateX 0.3s 1 normal linear';
    x_btn.style.display = 'block';
  };

  const hide = () => {
    nav_ul.classList.toggle('show-links');
    menu_btn.style.display = 'block';
    menu_btn.style.animation = 'rotateX 0.3s 1 reverse linear';
    x_btn.style.display = 'none';
  };

  menu_btn.addEventListener('click', show);

  x_btn.addEventListener('click', () => {
    hide();
    links.forEach(el => {
      el.addEventListener('click', hide);
    });
  });
};
