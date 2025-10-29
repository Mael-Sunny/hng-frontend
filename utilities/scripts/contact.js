const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Clear old errors
  document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));

  // Get field values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Validate fields
  if (!name) {
    showError("name", "Full name is required");
    isValid = false;
  }

  if (!email) {
    showError("email", "Email is required");
    isValid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    showError("email", "Enter a valid email (name@example.com)");
    isValid = false;
  }

  if (!subject) {
    showError("subject", "Subject is required");
    isValid = false;
  }

  if (!message) {
    showError("message", "Message is required");
    isValid = false;
  } else if (message.length < 10) {
    showError("message", "Message must be at least 10 characters long");
    isValid = false;
  }

  if (isValid) {
    successMessage.hidden = false;
    form.reset();
  } else {
    successMessage.hidden = true;
  }
});

function showError(field, message) {
  const error = document.getElementById(`test-contact-error-${field}`);
  error.textContent = message;
}
