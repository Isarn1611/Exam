document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;
        let errors = [];

        // recieve input
        const name = form.name.value.trim();
        const subject = form.subject.value.trim();
        const phone = form.phone.value.trim();
        const email = form.email.value.trim();
        const secret = form.secret.value.trim();
        const message = form.message.value.trim();

        // check Name
        if (name.length < 2) {
            isValid = false;
            errors.push("!!! Name must be at least 2 characters.");
        }

        // check Subject
        if (subject.length < 3) {
            isValid = false;
            errors.push("!!! Subject is too short.");
        }

        // check Phone
        const phonePattern = /^\d{9,15}$/;
        if (!phonePattern.test(phone)) {
            isValid = false;
            errors.push("!!! Phone must contain 9–15 digits.");
        }

        // check Email
        const emailPattern = /^[A-Za-z0-9._%+-]+@ftu\.ac\.th$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errors.push("!!! Email must end with @ftu.ac.th.");
        }

        // check Secret
        const secretPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
        if (!secretPattern.test(secret)) {
            isValid = false;
            errors.push("!!! Secret must have at least 8 chars, include uppercase, lowercase, number, and special character.");
        }

        // check Message
        if (message.length < 5) {
            isValid = false;
            errors.push("!!! Message must be at least 5 characters.");
        }

        // display
        if (!isValid) {
        alert(errors.join("\n")); 
        } else {
        alert("Form submitted successfully!");
            form.reset();
        }
    });
});
