document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".enquiry-form");

    if (form) {
        form.addEventListener("submit", function (event) {
          
            event.preventDefault();

            let isValid = true;

            // Check if Full Name is valid
            const fullNameInput = document.getElementById("fullname");
            const fullNameError = document.getElementById("fullnameError");
            if (fullNameInput.value.trim() === "") {
                fullNameError.textContent = "Full name is required";
                isValid = false;
            } else {
                fullNameError.textContent = "";
            }

            // Check if Email is valid
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (emailInput.value.trim() === "") {
                emailError.textContent = "Email address is required";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            // Check if Phone number is valid
            const phoneInput = document.getElementById("phone");
            const phoneError = document.getElementById("phoneError");
            if (phoneInput.value.trim() === "") {
                phoneError.textContent = "Phone number is required";
                isValid = false;
            } else {
                phoneError.textContent = "";
            }

            // Dropdown role check to see if valid
            const roleSelect = document.getElementById("role");
            const roleError = document.getElementById("roleError");
            if (roleSelect.value === "") {
                roleError.textContent = "Please select an option";
                isValid = false;
            } else {
                roleError.textContent = "";
            }

            // Message validation
            const messageInput = document.getElementById("message");
            const messageError = document.getElementById("messageError");
            if (messageInput.value.trim() === "") {
                messageError.textContent = "Please enter your message";
                isValid = false;
            } else {
                messageError.textContent = "";
            }

            // Success Message/ form submitted successfully confirmation
            const successNotice = document.getElementById("successNotice");

            if (isValid) {
                form.reset();

    
                if (successNotice) {
                    successNotice.textContent = "Form Submitted Successfully!";
                    successNotice.style.display = "block";
                } 
            } else {
                if (successNotice) {
                    successNotice.textContent = "";
                    successNotice.style.display = "none"
                }
            }
        });
    }
});