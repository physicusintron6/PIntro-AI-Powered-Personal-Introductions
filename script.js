document.addEventListener("DOMContentLoaded", () => {
  const getStartedBtn = document.getElementById("getStartedBtn");
  const launchBotBtn = document.getElementById("launchBot");

  // Scroll to features when "Get Started" is clicked
  getStartedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  });

  // Launch intro generator (placeholder for now)
  launchBotBtn.addEventListener("click", () => {
    alert("🚀 Intro generator coming soon!");
    // Later: open a modal or chatbot UI here
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const launchBotBtn = document.getElementById("launchBot");
  const modal = document.getElementById("introModal");
  const closeBtn = document.querySelector(".close");
  const introForm = document.getElementById("introForm");
  const introOutput = document.getElementById("introOutput");

  // Open modal
  launchBotBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submission
  introForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const style = document.getElementById("style").value;

    let intro = "";

    if (style === "professional") {
      intro = `Hello, my name is ${name}, and I am a dedicated ${role}. I specialize in delivering results with professionalism and expertise.`;
    } else if (style === "casual") {
      intro = `Hey! I’m ${name}, a ${role} who loves connecting with people and making things happen.`;
    } else {
      intro = `Hi, I’m ${name}, a ${role} with a passion for creativity and innovation. Let’s make something amazing together!`;
    }

    introOutput.innerHTML = `<p>${intro}</p>`;
  });
});