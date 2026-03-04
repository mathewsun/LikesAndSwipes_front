const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  alert("Name saved! Proceeding to Step 2...");
});