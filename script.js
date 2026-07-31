document.addEventListener("DOMContentLoaded", () => {
  console.log("TIPRASA SMM PANEL Loaded Successfully!");

  const btn = document.querySelector("button");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("Welcome to TIPRASA SMM PANEL!");
    });
  }
});
