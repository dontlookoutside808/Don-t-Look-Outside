const warning = document.getElementById("warning");
const enter = document.getElementById("enter");

enter.addEventListener("click", () => {
  warning.classList.add("hidden");
});

const files = {
  "01": "REPORT 01: Multiple residents reported hearing a low singing voice after local television signals became distorted. No source was located.",
  "02": "WITNESS STATEMENT: The witness repeatedly described the subject as human-shaped. The witness refused to describe its face.",
  "03": "FILE CORRUPTED. A recovered fragment contains one readable sentence: DO NOT LOOK OUTSIDE."
};

document.querySelectorAll(".file-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("file-output").textContent = files[btn.dataset.file];
  });
});

// Rare screen disturbance.
setInterval(() => {
  if (Math.random() < 0.12) {
    document.body.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
    setTimeout(() => document.body.style.transform = "", 90);
  }
}, 1800);
