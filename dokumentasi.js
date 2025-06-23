const photos = [
  {
    title: "Kegiatan Wirausaha (Kelas 11 SMK)",
    description:
      "Saya memulai usaha kecil-kecilan dengan menjual makanan ringan di lingkungan sekolah. Strategi pemasaran yang saya gunakan adalah kombinasi antara media sosial dan penjualan langsung (direct selling). Melalui kegiatan ini, saya melatih kemampuan pemasaran, komunikasi, dan manajemen keuangan, serta berhasil memperoleh rata-rata laba bersih sebesar Rp500.000 per minggu.",
  },
  {
    title: "Pelaksanaan Praktik Kerja Lapangan di CV.Karya ELektrik",
    description:
      "Saya bersama lima orang lainnya melaksanakan Praktik Kerja Lapangan selama enam bulan, mulai dari 2 Januari hingga 2 Juli, di CV Karya Elektrik. Pengalaman ini melatih saya dalam bekerja sama dalam tim, berkomunikasi secara efektif, dan memecahkan masalah.",
  },
  {
    title: "Masa Akhir PKL & Penyerahan Sertifikat",
    description:
      "Selama enam bulan disini,saya belajar banyak hal,tentang bagaimana cara beradaptasi, mempertahankan profesionalitas, menmpertahankan konsistensi, memanajemen waktu, bertanggung jawab, dan juga tentang bagaimana menyikapi individu lain yang memiliki keanekaragaman sifat dan kepribadian",
  },
  {
    title: "Kunjungan Industri ke TransMedia Bandung",
    description: "Disini saya diajarkan mengenai mekanisme,sistem,dan topologi jaringan di TransStudio Mall Bandung",
  },
];

let currentSlide = 0;
const totalSlides = photos.length;

// Get DOM elements
const carouselTrack = document.getElementById("carouselTrack");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideCounter = document.getElementById("slideCounter");
const photoTitle = document.getElementById("photoTitle");
const photoDescription = document.getElementById("photoDescription");
const progressBar = document.getElementById("progressBar");

// Update slide display
function updateSlide() {
  // Move the carousel track
  const translateX = -currentSlide * 100;
  carouselTrack.style.transform = `translateX(${translateX}%)`;

  // Update dots
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.remove("bg-white/40");
      dot.classList.add("bg-white", "scale-125", "shadow-lg");
    } else {
      dot.classList.remove("bg-white", "scale-125", "shadow-lg");
      dot.classList.add("bg-white/40");
    }
  });

  // Update description
  photoTitle.textContent = photos[currentSlide].title;
  photoDescription.textContent = photos[currentSlide].description;

  // Update counter
  slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;

  // Update progress bar
  progressBar.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;
}

// Next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

// Previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Go to specific slide
function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Dot indicators
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

// Initialize
updateSlide();
