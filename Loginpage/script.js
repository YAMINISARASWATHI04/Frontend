// script.js

// script.js

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Simple validation
    if (username === "" || password === "") {
      displayErrorMessage("Please fill in both fields.");
    } else if (!passwordPattern.test(password)) {
      displayErrorMessage(
        "Password must be at least 8 characters, include one letter and one number."
      );
    } else {
      displayErrorMessage("Login successful!", "success");
    }
  });

// Function to display error message
function displayErrorMessage(message, type = "error") {
  var errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.style.color = type === "error" ? "red" : "green";
}
