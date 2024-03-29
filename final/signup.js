

document.addEventListener("DOMContentLoaded", function() {
    const passwordField = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");

    togglePassword.addEventListener("click", function() {
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        // Toggle eye icon
        if (type === "password") {
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        } else {
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        }
    });

    // Handle form submission
//     document.getElementById("registration-form").addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent form submission
        
//         // Redirect to home page
//         alert("Hello!");
//         window.location.href = "test.html"; // Change "home.html" to the actual path of your home page
//     });
});
