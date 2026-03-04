const continueBtn = document.getElementById("continueBtn");
const backBtn = document.getElementById("backBtn");

continueBtn.addEventListener("click", () => {
  const age = parseInt(document.getElementById("ageInput").value);

  if (!age || age < 18) {
    alert("You must be at least 18 years old.");
    return;
  }

  alert("Age saved! Proceeding to Step 3...");
});

backBtn.addEventListener("click", () => {
  alert("Going back to Step 1...");
});