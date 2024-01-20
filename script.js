const carousel = document.querySelector('.carousel');
let isScrolling = false;

carousel.addEventListener('scroll', () => {
  isScrolling = true;
});

setInterval(() => {
  if (carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth && !isScrolling) {
    carousel.scrollTo({
      left: carousel.scrollLeft + 1,
      behavior: 'smooth'
    });
  } else {
    isScrolling = false;
  }
}, 20);