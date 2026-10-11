
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');

  if (!navbar || !menuButton || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Cerrar menú');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuButton.addEventListener('click', toggleMenu);

  // Cierra al seleccionar cualquier enlace del menú.
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Cierra al tocar fuera del menú y del botón.
  document.addEventListener('click', function (event) {
    if (
      menuButton.getAttribute('aria-expanded') === 'true' &&
      !navbar.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Permite cerrar con Escape.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  // Si se vuelve a escritorio, restablece el menú.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
});
