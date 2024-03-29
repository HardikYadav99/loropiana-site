document.addEventListener('DOMContentLoaded', function() {
    const showPasswordCheckbox = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');

    showPasswordCheckbox.addEventListener('change', function() {
        if (this.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});
 // Get the button element
 //var loginButton = document.getElementById("loginButton");

 // Add a click event listener to the button
 //loginButton.addEventListener("click", function() {
   // Redirect to another page (replace "otherpage.html" with your desired page)
  // window.location.href = "test.html";
//});