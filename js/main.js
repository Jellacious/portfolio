// Navigation mobile + filtrage projets (vanilla JS, zéro dépendance)
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Filtrage des cartes sur projets.html
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('[data-category]');

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-filter');

                filterButtons.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');

                projectCards.forEach((card) => {
                    const cat = card.getAttribute('data-category');
                    if (target === 'all' || cat === target) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }
});

