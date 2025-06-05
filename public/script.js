document.addEventListener('DOMContentLoaded', () => {
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
});