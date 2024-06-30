function changeImage(imageSrc) {
    const carouselItems = document.querySelectorAll('.carousel-item img');
    carouselItems.forEach((img, index) => {
      if (img.src.includes(imageSrc)) {
        const carousel = new bootstrap.Carousel(document.querySelector('#productCarousel'));
        carousel.to(index);
      }
    });
  }