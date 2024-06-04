var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// SCROLL 

  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.07,
});



let tl = gsap.timeline();

let t2 = gsap.timeline();

tl.from(".nav,.lo,.nm, h3,.btn", {
  y: -100,
  duration: 1, // seconds
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});




let scrollertl = gsap.timeline({
  scrollTrigger: {
    trigger: "#courses, #c1, #c2, #c2",
    scroller: ".main",
  },
});
scrollertl.from("#courses, #c1, #c2, #c2", {
  y: 60,
  duration: 1, // seconds
  delay: 0.7,
  opacity: 0,
  stagger: 0.3,
});



let scrollert2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#faculty",
    scroller: ".main",
  },
});
scrollert2.from("#faculty", {
  y: 60,
  duration: 1.5, // seconds
  delay: 1.2,
  opacity: 0,
  stagger: 0.5,
});