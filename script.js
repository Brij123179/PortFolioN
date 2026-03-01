// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Feature 1: Dark/Light Mode Toggle with Local Storage
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = '🌙'; // Moon icon for light mode indicating switch to dark
    } else {
        themeToggleBtn.textContent = '☀️'; // Sun icon for dark mode indicating switch to light
    }

    // Toggle theme on click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Update local storage and button icon based on the current class
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }
    });

    // Feature 2: Show/Hide Content (Read More)
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreBio = document.getElementById('moreBio');

    if (readMoreBtn && moreBio) {
        readMoreBtn.addEventListener('click', () => {
            // Toggle the 'show' class to reveal/hide text
            moreBio.classList.toggle('show');

            // Update button text
            if (moreBio.classList.contains('show')) {
                readMoreBtn.textContent = 'Read Less';
            } else {
                readMoreBtn.textContent = 'Read More';
            }
        });
    }

    // Feature 3: Interactive Image/Project Slider
    const sliderWrapper = document.getElementById('sliderWrapper');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    let currentSlide = 0;

    // Using querySelectorAll to get the number of slides
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Helper function to update slider position
    function updateSlider() {
        const percentage = -(currentSlide * 100);
        sliderWrapper.style.transform = `translateX(${percentage}%)`;
    }

    if (prevBtn && nextBtn && sliderWrapper) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides; // Wrap around to first slide
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Wrap around to last slide
            updateSlider();
        });
    }

    // Feature 4: Form Validation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    // Helper functions for showing/hiding validation errors
    function showError(inputId, errorId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(errorId);

        inputElement.classList.add('input-error');
        errorElement.classList.add('show');
    }

    function clearError(inputId, errorId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(errorId);

        inputElement.classList.remove('input-error');
        errorElement.classList.remove('show');
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent default form submission to handle it via JavaScript
            event.preventDefault();

            // Retrieve form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;

            // Reset all errors and success message initially
            clearError('name', 'nameError');
            clearError('email', 'emailError');
            clearError('message', 'messageError');
            formSuccess.classList.remove('show');

            // Validate Name (minimum 3 characters)
            if (name.length < 3) {
                showError('name', 'nameError');
                isValid = false;
            }

            // Validate Email using a basic regex or includes method
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showError('email', 'emailError');
                isValid = false;
            }

            // Validate Message (minimum 10 characters)
            if (message.length < 10) {
                showError('message', 'messageError');
                isValid = false;
            }

            // If all validations pass
            if (isValid) {
                // Show success message
                formSuccess.classList.add('show');

                // Clear the form fields
                contactForm.reset();

                // Optional: hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            }
        });
    }

});
