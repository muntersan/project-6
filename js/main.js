const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    parallax: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper__arrow--next',
      prevEl: '.swiper__arrow--prev',
    },
  
  });