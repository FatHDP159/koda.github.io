// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ==========================
// MENÚ MÓVIL (NUEVA FUNCIÓN)
// ==========================

// Seleccionar elementos
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// Abrir/Cerrar menú hamburguesa
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Bloquear scroll cuando esté abierto
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Cerrar al hacer click en links
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Cerrar al tocar fondo
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ==========================
// SMOOTH SCROLL (UNIFICADO)
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Navbar fijo

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================
// FORM WHATSAPP
// ==========================

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Hola K'ODA, soy ${name}.%0A%0A${message}%0A%0AMi WhatsApp: ${whatsapp}`;
    const whatsappUrl = `https://wa.me/51905578852?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');

    this.reset();
    alert('¡Gracias! Te estamos redirigiendo a WhatsApp para completar tu consulta.');
});
