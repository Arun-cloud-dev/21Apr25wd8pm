document.getElementById("submit").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const error = document.getElementById("error");
  const success = document.getElementById("success");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  // Clear previous error messages

  success.textContent = "";
  loading.textContent = "";
  result.textContent = "";
    
  
    // keep error visible untill next valid
    error.textContent = "";
    


    // Validate form fields
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    error.textContent = "All fields are required!";
    return;
  }

    // Validate email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    error.textContent = "Invalid email format!";
    return;
  }

    
    // Validate password length and match
  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters long!";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match!";
    return;
  }

    // Simulate form submission
  loading.textContent = "Submitting...";

    
    // Simulate a delay for form submission
  setTimeout(() => {
    loading.textContent = "";
    success.textContent = "Form submitted successfully!";

    result.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>`;
  }, 2000);
})