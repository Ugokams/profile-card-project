(function(){
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  if (timeEl) {
    function updateTime() {
      timeEl.textContent = Date.now();
    }
    updateTime();
    setInterval(updateTime, 1000);
  }

  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (!form) {
    return;
  }

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("error-name");
  const emailError = document.getElementById("error-email");
  const subjectError = document.getElementById("error-subject");
  const messageError = document.getElementById("error-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  nameInput && nameInput.addEventListener("input", () => {
    nameError.style.display = nameInput.value.trim() === "" ? "block" : "none";
  });

  emailInput && emailInput.addEventListener("input", () => {
    emailError.style.display = emailInput.value.match(emailPattern)
      ? "none"
      : "block";
  });

  subjectInput && subjectInput.addEventListener("input", () => {
    subjectError.style.display =
      subjectInput.value.trim() === "" ? "block" : "none";
  });

  messageInput && messageInput.addEventListener("input", () => {
    messageError.style.display =
      messageInput.value.trim().length < 10 ? "block" : "none";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      valid = false;
    }
    if (!emailInput.value.match(emailPattern)) {
      emailError.style.display = "block";
      valid = false;
    }
    if (subjectInput.value.trim() === "") {
      subjectError.style.display = "block";
      valid = false;
    }
    if (messageInput.value.trim().length < 10) {
      messageError.style.display = "block";
      valid = false;
    }

    if (valid) {
      if (successMessage) {
        successMessage.style.display = "block";
      }
      form.reset();
      setTimeout(() => {
        if (successMessage) successMessage.style.display = "none";
      }, 3000);
    }
  });
})();
