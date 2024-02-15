function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var myCarousel = document.querySelector('#carouselExperience')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: true
})
var myCarousel = document.querySelector('#carouselExperience');

document.querySelector('.carousel-control-prev').addEventListener('click', function () {
  var carousel = bootstrap.Carousel.getInstance(myCarousel);
  carousel.prev();
});

document.querySelector('.carousel-control-next').addEventListener('click', function () {
  var carousel = bootstrap.Carousel.getInstance(myCarousel);
  carousel.next();
});
