const form = document.getElementById('onboardingForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('firstName').value.trim();

  if (name.length < 2) {
    alert('Please enter a valid name.');
    return;
  }

  // Simulate moving to next step
  alert(`Welcome, ${name}! Moving to step 2...`);

  // Future enhancement:
  // updateProgress(2);
});