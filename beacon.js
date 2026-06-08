(() => {
  const root = document.querySelector("#app") || document.body;
  const button = document.createElement("button");
  button.className = "resume-beacon";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "resume-beacon-card");
  button.innerHTML = '<span class="beacon-icon" aria-hidden="true">KK</span><span>quick signal</span>';

  const card = document.createElement("section");
  card.className = "resume-beacon-card";
  card.id = "resume-beacon-card";
  card.hidden = true;
  card.innerHTML = `
    <button class="resume-beacon-close" type="button" aria-label="Close quick signal">x</button>
    <p class="beacon-kicker">quick profile</p>
    <h2>Kingsley Kotey</h2>
    <p>Full-stack software engineer building shipped products, secure APIs, data-backed workflows, and supportable release paths.</p>
    <ul>
      <li>Next.js - TypeScript - React - Node.js</li>
      <li>Python - SQL - PostgreSQL - AWS</li>
      <li>Systems, IAM, deployment, and product work in one profile</li>
    </ul>
    <div class="beacon-actions">
      <a href="https://kkotey.com" target="_blank" rel="noopener noreferrer">site</a>
      <a href="/KoteyResumeSWE.pdf" target="_blank" rel="noopener noreferrer">resume</a>
      <a href="https://github.com/kkotey14" target="_blank" rel="noopener noreferrer">github</a>
      <a href="https://www.linkedin.com/in/kingsley-kotey-476649278/" target="_blank" rel="noopener noreferrer">linkedin</a>
      <button type="button" data-copy-email>copy contact</button>
    </div>
    <p class="beacon-status" role="status" aria-live="polite"></p>
  `;

  root.append(button, card);

  const close = card.querySelector(".resume-beacon-close");
  const copy = card.querySelector("[data-copy-email]");
  const status = card.querySelector(".beacon-status");

  const setOpen = (open) => {
    card.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    if (open && status) status.textContent = "";
  };

  button.addEventListener("click", () => setOpen(card.hidden));
  close.addEventListener("click", () => setOpen(false));
  copy.addEventListener("click", async () => {
    const email = "kkotey475@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = "contact copied: " + email;
    } catch {
      status.textContent = email;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
})();
