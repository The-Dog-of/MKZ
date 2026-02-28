document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('#menuToggle');
    const menuNav = document.querySelector('#navLinks');
    const corpoPagina = document.body;

    if (btnMenu && menuNav) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            menuNav.classList.toggle('active');
            corpoPagina.classList.toggle('menu-aberto');
            
            const icone = btnMenu.querySelector('i');
            if (icone) {
                icone.classList.toggle('fa-bars');
                icone.classList.toggle('fa-xmark');
            }
        });

        document.addEventListener('click', (e) => {
            if (!menuNav.contains(e.target) && !btnMenu.contains(e.target)) {
                menuNav.classList.remove('active');
                corpoPagina.classList.remove('menu-aberto');
                
                const icone = btnMenu.querySelector('i');
                if (icone) {
                    icone.classList.add('fa-bars');
                    icone.classList.remove('fa-xmark');
                }
            }
        });

        const linksInternos = document.querySelectorAll('.nav-links a');
        linksInternos.forEach(link => {
            link.addEventListener('click', () => {
                menuNav.classList.remove('active');
                corpoPagina.classList.remove('menu-aberto');
                
                const icone = btnMenu.querySelector('i');
                if (icone) {
                    icone.classList.add('fa-bars');
                    icone.classList.remove('fa-xmark');
                }
            });
        });
    }

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const elementosAnimados = document.querySelectorAll('.fade-in-up');
    elementosAnimados.forEach(el => observador.observe(el));
});