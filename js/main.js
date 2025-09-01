const navLinks = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('.content-section');

function showSection(id) {
    sections.forEach(section => {
        section.classList.toggle('active', section.id === id);
    });

    navLinks.forEach(link => {
        const targetId = link.getAttribute('data-target');
        link.classList.toggle('active', targetId === id);
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
    });
});