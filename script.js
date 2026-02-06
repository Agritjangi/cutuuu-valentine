function openLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

function goCats() {
  window.location.href = "cats.html";
}

function nextPage() {
  window.location.href = "love.html";
}

function moveNo() {
  const btn = document.getElementById("no");
  btn.style.top = Math.random() * window.innerHeight + "px";
  btn.style.left = Math.random() * window.innerWidth + "px";
}

function yes() {
  document.body.innerHTML = `
    <h1>I knew it 💖</h1>
    <p>
      Not for today.<br>
      Not for a date.<br>
      But for the feeling we keep building.
    </p>
    <h2>— Agrit</h2>
  `;
}
