// js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // Feature: Show/Hide Content (Read More)
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreBio = document.getElementById('moreBio');

    if (readMoreBtn && moreBio) {
        readMoreBtn.addEventListener('click', () => {
            moreBio.classList.toggle('is-visible');

            if (moreBio.classList.contains('is-visible')) {
                readMoreBtn.textContent = 'Read Less';
            } else {
                readMoreBtn.textContent = 'Read More';
            }
        });
    }

    // Feature: Form Validation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    function showError(inputId, errorId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(errorId);

        inputElement.classList.add('is-invalid');
        errorElement.classList.add('is-visible');
    }

    function clearError(inputId, errorId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(errorId);

        inputElement.classList.remove('is-invalid');
        errorElement.classList.remove('is-visible');
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;

            // Clear errors and success before re-evaluating
            clearError('name', 'nameError');
            clearError('email', 'emailError');
            clearError('message', 'messageError');
            formSuccess.classList.remove('is-visible');

            // Validations
            if (name.length < 3) {
                showError('name', 'nameError');
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showError('email', 'emailError');
                isValid = false;
            }

            if (message.length < 10) {
                showError('message', 'messageError');
                isValid = false;
            }

            // On success
            if (isValid) {
                formSuccess.classList.add('is-visible');
                contactForm.reset();

                setTimeout(() => {
                    formSuccess.classList.remove('is-visible');
                }, 5000);
            }
        });
    }
});
