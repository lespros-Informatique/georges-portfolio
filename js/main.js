// Main JavaScript for Georges Camara Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initProjectModal();
    initContactForm();
    initParallax();
    initLoading();
});

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const theme = localStorage.getItem('theme');

    // Set initial theme
    if (theme === 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = '☀️';
    } else {
        themeToggle.innerHTML = '🌙';
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        themeToggle.innerHTML = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Animate theme change
        gsap.fromTo(body, { opacity: 0.8 }, { opacity: 1, duration: 0.3 });
    });
}

// Navigation Functionality
function initNavigation() {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Burger menu toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu
                nav.classList.remove('active');
                burger.classList.remove('active');

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;

        navLinks.forEach(link => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop - 100;
                const sectionBottom = sectionTop + targetSection.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });

    // Stagger animations for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Skill Progress Bars Animation
function initSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                const width = progressFill.style.width;
                gsap.to(progressFill, {
                    width: width,
                    duration: 1.5,
                    ease: "power2.out"
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress-container').forEach(container => {
        skillObserver.observe(container);
    });
}

// Project Modal Functionality
function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const modalLink = document.getElementById('modal-link');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.modal-close');

    // Project data
    const projects = [
        {
            title: 'Resto Délicieux',
            description: 'Marketplace resto + admin. 500+ users/mois, 0% downtime',
            tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            link: 'https://resto.kassanngroup.com/',
            image: 'img/multi-resto_captue.jpeg'
        },
        {
            title: 'App Diendi',
            description: 'Collecte fonds + reçus thermiques. +300% collecte vs manuel',
            tech: ['Flutter', 'Firebase', 'Stripe'],
            link: 'https://app-diendi.dndcorporations.com/',
            image: 'img/diendi_project_capture.png'
        },
        {
            title: 'Bibliothèque UAO',
            description: 'Demo sur demande. 5000+ étudiants cible',
            tech: ['React', 'Node.js', 'MongoDB'],
            link: '#',
            image: 'img/biblio_university_capture.png'
        },
        {
            title: 'Marketplace Mobile',
            description: 'Flutter iOS/Android natif',
            tech: ['Flutter', 'Dart', 'Firebase'],
            link: '#',
            image: 'img/multi-resto_captue.jpeg'
        }
    ];

    // Open modal on project click
    document.querySelectorAll('.view-project-btn').forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const project = projects[index];
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalTech.innerHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
            modalLink.href = project.link;
            modalLink.textContent = project.link === '#' ? 'Demo sur demande' : 'Voir le projet';
            modalImage.src = project.image;
            modalImage.alt = project.title;

            // Ensure modal is visible and prevent auto-close
            modal.style.display = 'block';
            modal.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';

            // Reset modal position and animate entrance
            gsap.set('.modal-content', { y: -50, opacity: 0 });
            gsap.to('.modal-content', {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
                onComplete: function() {
                    // Ensure modal stays open after animation
                    modal.style.display = 'block';
                    modal.style.visibility = 'visible';
                }
            });
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        gsap.to('.modal-content', {
            y: -50,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Contact Form Functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.querySelector('.submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Disable button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';

        try {
            // Send email using EmailJS
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    to_name: 'Georges Camara'
                }
            );

            // Success animation
            gsap.to(submitBtn, {
                background: 'linear-gradient(135deg, #10B981, #059669)',
                duration: 0.3,
                onComplete: () => {
                    submitBtn.textContent = 'Message envoyé !';
                    gsap.to(submitBtn, { background: 'linear-gradient(135deg, #6366F1, #10B981)', delay: 2 });
                }
            });

            // Reset form
            form.reset();

        } catch (error) {
            console.error('Error sending email:', error);
            submitBtn.textContent = 'Erreur lors de l\'envoi';
            gsap.to(submitBtn, { background: 'linear-gradient(135deg, #EF4444, #DC2626)', duration: 0.3 });
        } finally {
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer';
            }, 3000);
        }
    });

    // Form validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateInput(input);
            }
        });
    });

    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;

        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        } else {
            isValid = value.length > 0;
        }

        input.classList.toggle('error', !isValid);
        return isValid;
    }
}

// Parallax Effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');

        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Loading Animation
function initLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        window.addEventListener('load', () => {
            gsap.to(loading, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loading.style.display = 'none';
                }
            });
        });
    }
}

// GSAP Hero Animations
gsap.registerPlugin();

gsap.from('.hero-img', {
    scale: 0,
    rotation: -180,
    duration: 1,
    ease: "back.out(1.7)"
});

gsap.from('.hero h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
});

gsap.from('.hero h2', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "power2.out"
});

gsap.from('.hero p', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.8,
    ease: "power2.out"
});

gsap.from('.hero-cta', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    ease: "power2.out"
});

// Timeline animations
gsap.from('.timeline-item', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.skills-timeline',
        start: 'top 80%'
    }
});

// More projects animation
gsap.from('.more-projects-content', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: '.more-projects',
        start: 'top 80%'
    }
});

// Particle effect for hero background (optional)
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        hero.appendChild(particle);
    }
}

// Uncomment to add particles
// createParticles();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mouse follow effect for interactive elements
document.addEventListener('mousemove', debounce((e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    }
}, 10));

// Accessibility: Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal[style*="display: block"]');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// Service Worker for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}