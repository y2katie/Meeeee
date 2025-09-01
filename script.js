// Enhanced hover effects and smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    
    // Project hover effects
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Tag hover effects
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Social link hover effects
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const span = this.querySelector('span');
            span.style.transform = 'translateY(-2px)';
            span.style.transition = 'transform 0.2s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            const span = this.querySelector('span');
            span.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all projects for scroll animations
    projects.forEach(project => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(30px)';
        project.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(project);
    });
    
    // Parallax effect for header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (header) {
            header.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Cursor trail effect (subtle)
    let mouseX = 0;
    let mouseY = 0;
    let trail = [];
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Enhanced link hover effects
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'pointer';
        });
        
        link.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'default';
        });
    });
    
    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            // Additional scroll-based animations can be added here
        }, 10);
    });
    
    // Theme detection and handling
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleThemeChange(e) {
        if (e.matches) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
    
    prefersDarkScheme.addEventListener('change', handleThemeChange);
    handleThemeChange(prefersDarkScheme);
    
    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Stagger project animations
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
    
    // Enhanced focus management for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #000';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Utility functions
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        easeInOutCubic,
        lerp
    };
}
