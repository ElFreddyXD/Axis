// Selecciona el botón del menú móvil y la lista de enlaces
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Agrega un evento de clic al botón
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Activa o desactiva la clase 'active'
    document.body.classList.toggle('menu-open'); // Evita el scroll cuando el menú está abierto
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});