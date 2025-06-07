document.getElementById("submit").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const error = document.getElementById("error");
  const success = document.getElementById("success");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  // Clear only success, loading, and result
  success.textContent = "";
  loading.textContent = "";
  result.textContent = "";

  // Keep previous error until replaced by new one or successful submit
  error.textContent = "";

  // Validations
  if (!name || !email || !password || !confirmPassword) {
    error.textContent = "All fields are required!";
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!email.match(emailPattern)) {
    error.textContent = "Invalid email format!";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters!";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match!";
    return;
  }

  // If all validations pass
  error.textContent = "";
  loading.textContent = "Submitting...";

  setTimeout(() => {
    loading.textContent = "";
    success.textContent = "Form submitted successfully!";
    result.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}`;
  }, 2000);
});
