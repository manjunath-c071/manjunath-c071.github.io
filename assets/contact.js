

/*==================================
  Project: Contact Form EmailJS
==================================*/

(function () {
  emailjs.init("yvb3HZaZWuyqc3Y_G"); // Your PUBLIC KEY
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dhnz547",   // Service ID
        "template_g4oh1qa",  // Template ID
        this
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          this.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again!");
          console.error("EmailJS Error:", error);
        }
      );
  });
