// script.js


document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
      displayErrorMessage("Please fill in both fields.");
    } else {
      displayErrorMessage("Login successful!", "success");

      // Clear form data after successful login
      document.getElementById("loginForm").reset();
    }
  });

// Function to display error message
function displayErrorMessage(message, type = "error") {
  var errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.style.color = type === "error" ? "red" : "green";
}
