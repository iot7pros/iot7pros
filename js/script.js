// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
}

mobileMenuButton.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu when window is resized to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // 768px is the md breakpoint in Tailwind
        closeMobileMenu();
    }
});

// Dark mode functionality
function initTheme() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Check if theme is set in localStorage
    const theme = localStorage.getItem('color-theme');
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
    if (theme === 'dark' || (!theme && systemDarkMode)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    // Add click event
    themeToggleBtn.addEventListener('click', function() {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        }
    });
}

// Initialize theme after DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible');
            backToTopButton.classList.remove('opacity-100');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
