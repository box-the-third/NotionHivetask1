document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const loadMoreButton = document.querySelector('.load-more');
  const blogSection = document.querySelector('.blog');
  const videoModal = document.getElementById('video-modal');
  const contactModal = document.getElementById('contact-modal');
  const closeButtons = document.querySelectorAll('.close-button');

  let currentIndex = 0;

  function showCarouselItem(index) {
    carousel.style.transition = 'transform 4s ease-in-out';
    carousel.style.transform = `translateX(-${index * 20}%)`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
  }, 6000);

  document.querySelector('.watch-now').addEventListener('click', () => {
    videoModal.style.display = 'flex';
    videoModal.style.display = 'center';
  });

  loadMoreButton.addEventListener('click', () => {
    const newBlogItems = `
      <div class="blog-item">
        <img src="assets/blog77.jpg" alt="Blog Image 1">
        <img src="assets/blog66.jpg" alt="Blog Image 2">
        <img src="assets/blog55.jpg" alt="Blog Image 3">
      </div>
      <div class="blog-item">
        <img src="assets/blog33.jpg" alt="Blog Image 1">
        <img src="assets/blog44.jpg" alt="Blog Image 2">
        <img src="assets/blog88.jpg" alt="Blog Image 3">
      </div>
      <div class="blog-item">
        <img src="assets/blog44.jpg" alt="Blog Image 1">
        <img src="assets/blog22.jpg" alt="Blog Image 2">
        <img src="assets/blog66.jpg" alt="Blog Image 3">
      </div>
    `;
    blogSection.insertAdjacentHTML('beforeend', newBlogItems);
  });

  document.querySelector('.contact-us').addEventListener('click', () => {
    contactModal.style.display = 'flex';
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      videoModal.style.display = 'none';
      contactModal.style.display = 'none';
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
      videoModal.style.display = 'none';
    }
    if (event.target === contactModal) {
      contactModal.style.display = 'none';
    }
  });
});
