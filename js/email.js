  // Initialize EmailJS
  (function() {
    emailjs.init("service_qzl6doa"); // Replace with your User ID
  })();

  function sendEmail(e) {
    e.preventDefault();

    const formData = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    emailjs.send("service_qzl6doa", "template_f0nbcdl", formData)
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      });
  }
