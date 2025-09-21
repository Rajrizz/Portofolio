const footerForm = document.querySelector("footer form");

if (footerForm) {
  footerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert("Terima kasih! Permintaan Anda telah dikirim.");
      this.reset();
    }
  });
}
