document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    function initTypingEffect() {
        const textElement = document.getElementById('typing-text');
        const cursor = document.querySelector('.cursor');
        const professions = [
            "Full Stack Developer",
            "MCA Student at Parul University",
            "Web Designer",
            "Backend Engineer"
        ];

        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        function type() {
            const currentText = professions[professionIndex];

            if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typingSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                typingSpeed = 500; // Pause before typing next
            }

            setTimeout(type, typingSpeed);
        }

        // Start typing effect
        setTimeout(type, 1000);
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.top-nav ul li a');
    const navHeight = document.querySelector('.top-nav').offsetHeight || 60; // Approximate nav height
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the section ID (e.g., "home")
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project Filtering
    const filters = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const category = filter.getAttribute('data-filter');

            projects.forEach(project => {
                const projectCategory = project.getAttribute('data-category');
                if (category === 'all' || projectCategory === category) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Education Filtering
    const eduButtons = document.querySelectorAll('.edu-button');
    const eduItems = document.querySelectorAll('.edu-item');

    eduButtons.forEach(button => {
        button.addEventListener('click', () => {
            eduButtons.forEach(btn => btn.classList.remove('active'));
            eduItems.forEach(item => item.classList.remove('active'));

            button.classList.add('active');

            const eduLevel = button.getAttribute('data-edu');
            const targetItem = document.querySelector(`.edu-item[data-edu="${eduLevel}"]`);
            if (targetItem) {
                targetItem.classList.add('active');
            }
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    const sendButton = document.querySelector('.send-button');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Disable button to prevent multiple submissions
        sendButton.disabled = true;
        sendButton.textContent = 'Sending...';

        try {
            const response = await fetch('/send-email', { // Use relative URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset(); // Clear the form
            } else {
                throw new Error(result.message || 'Failed to send message.');
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            sendButton.disabled = false;
            sendButton.textContent = 'Send Message';
        }
    });

    // Initialize the typing effect
    initTypingEffect();
});