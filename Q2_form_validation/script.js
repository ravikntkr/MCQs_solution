function validateForm(event) {
  event.preventDefault(); // Prevents the form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const date = document.getElementById("date").value;
  const color = document.getElementById("color").value;

  // Perform validation checks
  if (
    !name ||
    !email ||
    !phone ||
    !password ||
    !age ||
    !gender ||
    !date ||
    !color
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Additional validation checks can be added here

  // If all checks pass, submit the form
  alert("Form submitted successfully!");
  document.getElementById("myForm").reset(); // Reset the form
}
