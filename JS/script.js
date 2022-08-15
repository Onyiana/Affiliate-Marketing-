// this is used to make change on its on without having to change the date on JS
let date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()


$(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 20,
    dots:true,
    arrows:true,
    nav:true,
    navText : ['<i class="ri-arrow-left-s-line owl-prev"></i>','<i class="ri-arrow-right-s-line owl-next"></i>'],
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:1,
        },
        1000:{
            items:1,
            loop:true
        }
    }
});


//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}