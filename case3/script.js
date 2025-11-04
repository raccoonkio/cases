  const slides = document.querySelector('.slides');
  const slideElements = document.querySelectorAll('.item');
  const totalSlides = slideElements.length;
  const counter = document.getElementById('counter');
  let index = 0;

  function updateSlider() {
    slides.style.transform = `translateX(${-index * 100}%)`;
    counter.textContent = `Изображение ${index + 1} из ${totalSlides}`;
  }

  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlider();
  });

  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
  });