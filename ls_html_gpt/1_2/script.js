let currentStep = 1;
const totalSteps = 5;

const steps = document.querySelectorAll(".form-step");
const progressBars = document.querySelectorAll(".progress-bar");
const currentStepText = document.getElementById("currentStep");

function updateUI() {
  steps.forEach(step => {
    step.classList.remove("active");
    if (parseInt(step.dataset.step) === currentStep) {
      step.classList.add("active");
    }
  });

  progressBars.forEach((bar, index) => {
    bar.classList.remove("active");
    if (index < currentStep) {
      bar.classList.add("active");
    }
  });

  currentStepText.textContent = currentStep;
}

document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    if (currentStep === 1) {
      const name = document.getElementById("nameInput").value.trim();
      if (!name) {
        alert("Please enter your name.");
        return;
      }
    }

    if (currentStep === 2) {
      const age = parseInt(document.getElementById("ageInput").value);
      if (!age || age < 18) {
        alert("You must be at least 18 years old.");
        return;
      }
    }

    currentStep++;
    updateUI();
  });
});

document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep--;
    updateUI();
  });
});

updateUI();