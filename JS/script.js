// this is used to make change on its on without having to change the date on JS
let date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()


$(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 40,
    dots:true,
    arrows:true,
    nav:true,
    navText : ['<i class="ri-arrow-left-s-line owl-prev"></i>','<i class="ri-arrow-right-s-line owl-next"></i>'],
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:4,
            loop:true
        }
    }
});