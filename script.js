document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const eventName = document.getElementById('event').value;
            const message = document.getElementById('message').value.trim();

            // Validation
            if (!name || !email || !phone || !eventName || !message) {
                alert('Please fill all fields');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email');
                return;
            }

            if (phone.length < 10 || isNaN(phone)) {
                alert('Phone number must be at least 10 digits');
                return;
            }

            alert('Registration Successful!');
            form.reset();
        });
    }
});
