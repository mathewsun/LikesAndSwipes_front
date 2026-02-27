const steps = document.querySelectorAll(".form-step");
const progressBars = document.querySelectorAll(".progress-bar");
const nextBtns = document.querySelectorAll(".next-btn");
const backBtns = document.querySelectorAll(".back-btn");
const currentStepText = document.getElementById("currentStep");

let currentStep = 1;

function updateUI() {
  steps.forEach(step => {
    step.classList.remove("active");
    if (parseInt(step.dataset.step) === currentStep) {
      step.classList.add("active");
    }
  });

  progressBars.forEach(bar => {
    bar.classList.remove("active");
    if (parseInt(bar.dataset.step) <= currentStep) {
      bar.classList.add("active");
    }
  });

  currentStepText.textContent = currentStep;
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep === 1) {
      const name = document.getElementById("firstName").value.trim();
      if (name.length < 2) {
        alert("Please enter a valid name.");
        return;
      }
    }

    if (currentStep === 2) {
      const age = document.getElementById("age").value;
      if (age < 18 || age > 100) {
        alert("Age must be between 18 and 100.");
        return;
      }
    }

    if (currentStep < 4) {
      currentStep++;
      updateUI();
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateUI();
    }
  });
});

updateUI();