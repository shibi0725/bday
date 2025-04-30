function nextSlide(n) {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${(n - 1) * 100}vw)`;
}

