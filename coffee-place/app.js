const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenBtn = document.querySelector("#menu-open-button")
const menuCloseBtn = document.querySelector("#menu-close-button")


menuOpenBtn.addEventListener("click" , () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

//Close menu when close button is clicked
menuCloseBtn.addEventListener("click" , () => menuOpenBtn.click())

//Close menu when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () =>  menuOpenBtn.click())
})

// Initialize swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    }
  }
});