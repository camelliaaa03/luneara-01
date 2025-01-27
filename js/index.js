let currentIndex = 0; // Indeks slide aktif
const slides = document.querySelectorAll('.slides li'); // Semua elemen slide

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none'; // Tampilkan hanya slide aktif
  });
}

// Fungsi untuk berpindah ke slide sebelumnya
function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Fungsi untuk berpindah ke slide berikutnya
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);
