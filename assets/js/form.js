document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("https://script.google.com/macros/s/AKfycbykMde97ifti9AU_5tMGchSDsIknv6sdCQK17MoA90-181fw-_UDURfyV8IXIGZ58JlJA/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then(() => {
        alert("Message sent successfully!");
        this.reset();
      })
      .catch(() => alert("Error sending message."));
    });