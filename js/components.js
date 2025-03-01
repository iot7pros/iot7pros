// Header component HTML
const headerHTML = `
<header class="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 z-50">
    <div class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-between items-center">
            <a href="index.html" class="flex items-center">
                <img src="images/3D.svg" alt="3Dpros iOT" class="w-20 h-20">
            </a>
            
            <div class="flex items-center space-x-4">
                <!-- Dark mode toggle -->
                <button id="theme-toggle" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    <!-- Sun icon -->
                    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                    </svg>
                    <!-- Moon icon -->
                    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>
                </button>

                <!-- Mobile menu button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            <!-- Desktop menu -->
            <div class="hidden md:flex space-x-8 font-body font-medium">
                <a href="sculptures.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Sculptures</a>
                <a href="projects.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
                <a href="faq.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">FAQ</a>
                <a href="about.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
            </div>
        </nav>

        <!-- Mobile menu overlay -->
        <div id="mobile-menu" class="hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden">
            <!-- Header with different background -->
            <div class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center">
                        <a href="index.html" class="flex items-center">
                            <img src="images/3D.svg" alt="3Dpros iOT" class="w-20 h-20">
                        </a>
                        <!-- Close button -->
                        <button id="mobile-menu-close" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Navigation items container -->
            <div class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col items-center justify-center h-[calc(100vh-88px)] space-y-8 text-2xl font-display">
                    <a href="sculptures.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110">Sculptures</a>
                    <a href="projects.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110">Projects</a>
                    <a href="faq.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110">FAQ</a>
                    <a href="about.html" class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110">About</a>
                </div>
            </div>
        </div>
    </div>
</header>`;

// Footer component HTML
const footerHTML = `
<footer class="w-full bg-gray-900 dark:bg-gray-950 text-white mt-12">
    <div class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Tags Container -->
        <div class="hidden md:block mb-12">
            <h4 class="text-lg font-display font-semibold mb-6 text-primary-300">TAGS</h4>
            <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">Arduino</span>
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">Electronics</span>
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">3D Printing</span>
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">DIY</span>
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">Robotics</span>
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">IoT</span>
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">Coding</span>
                <span class="px-4 py-2 border border-gray-700 rounded-full text-sm bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors cursor-pointer">Art</span>
            </div>
        </div>

        <!-- Copyright and Social Icons -->
        <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div class="text-gray-400 mb-4 md:mb-0 font-light">
                2025 3Dpros iOT. All rights reserved
            </div>
            <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors"><i class="fab fa-github"></i></a>
                <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</footer>`;
