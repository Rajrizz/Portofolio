document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const submitBtn = this.querySelector('button[type="submit"]');

  // Disable button and show loading
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...';
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Permintaan Terkirim!';
    submitBtn.className = submitBtn.className.replace("from-purple-600 via-cyan-600 to-blue-600", "from-green-600 to-teal-600");

    alert("Terima kasih! Permintaan konsultasi Anda telah dikirim. Tim TADI akan menghubungi Anda dalam 24 jam.");

    setTimeout(() => {
      this.reset();
      submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-3"></i> Kirim Permintaan Konsultasi <i class="fas fa-sparkles ml-3"></i>';
      submitBtn.className = submitBtn.className.replace("from-green-600 to-teal-600", "from-purple-600 via-cyan-600 to-blue-600");
      submitBtn.disabled = false;
    }, 3000);
  }, 2000);
});
