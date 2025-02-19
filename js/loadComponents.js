// Function to load HTML components
function loadComponent(elementId, componentName) {
    const element = document.getElementById(elementId);
    if (componentName === 'header') {
        element.innerHTML = headerHTML;
    } else if (componentName === 'footer') {
        element.innerHTML = footerHTML;
    }
}

// Function to set active navigation link
function setActiveNavLink(currentPage) {
    // Desktop menu
    const desktopLinks = document.querySelectorAll('.md\\:flex a');
    desktopLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.remove('text-gray-700', 'hover:text-primary-600');
            link.classList.add('text-primary-600');
        }
    });

    // Mobile menu
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.remove('text-gray-700', 'hover:text-primary-600');
            link.classList.add('text-primary-600');
        }
    });
}
