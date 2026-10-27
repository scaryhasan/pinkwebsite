
const yes = document.getElementById("Yes");
const no = document.getElementById("No");

yes.addEventListener("click", function () {
    const margin = 10;

    const maxX = window.innerWidth - yes.offsetWidth - margin;
    const maxY = window.innerHeight - yes.offsetHeight - margin;

    const x = margin + Math.random() * Math.max(0, maxX - margin);
    const y = margin + Math.random() * Math.max(0, maxY - margin);

    yes.style.position = "fixed";
    yes.style.left = x + "px";
    yes.style.top = y + "px";
    yes.style.zIndex = "10";
});

no.addEventListener("click", function () {
    document.body.innerHTML = `
        <main class="thank-you">
            <div class="emoji">💌</div>
            <h1>Thank you 💗</h1>
            <p>
                I wish you all the happiness in the world.
                Take care of yourself, pookie. 🥹
            </p>
            <div class="big-heart">❤️</div>
        </main>
    `;
});
